import { NextResponse } from "next/server";
import Stripe from "stripe";
import { resend } from "@/lib/resend";
import { OrderEmailTemplate } from "@/app/components/order-email-template";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const { sessionId, items, total } = await req.json();

    if (!sessionId) {
      return NextResponse.json({ error: "No sessionId" }, { status: 400 });
    }

    // 🔥 hämta kunddata från Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    const fullName = session.customer_details?.name || "";
    const email = session.customer_details?.email || "";
    const phoneNumber = session.customer_details?.phone || "";

    // 🔥 adress från customer_details (inte shipping_details)
    const addressObj = session.customer_details?.address;

    const address = addressObj
      ? `${addressObj.line1 || ""}, ${addressObj.postal_code || ""} ${addressObj.city || ""}`
      : "";

    // dela upp namn
    const nameParts = fullName.split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    await resend.emails.send({
      from: "webshop <onboarding@resend.dev>",
      to: email,
      subject: "Tack för din beställning!",
      react: OrderEmailTemplate({
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        items,
        total,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Send order error:", error);
    return NextResponse.json(
      { error: "Kunde inte skicka mail" },
      { status: 500 }
    );
  }
}