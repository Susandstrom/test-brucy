import { NextResponse } from "next/server";
import Stripe from "stripe";
import { resend } from "@/lib/resend";
import { News_Cycle } from "next/font/google";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
    const sig = req.headers.get("stripe-signature");
    const body = await req.text();

    try {
        const event = stripe.webhooks.constructEvent(
            body,
            sig!,
            process.env.STRIPE_WEBHOOK_SECRET!
        );

        if (event.type === "checkout.session.completed") {
            const session = event.data.object as Stripe.Checkout.Session;

            const email = session.customer_details?.email;
            const name = session.customer_details?.name || "kund";

            if (email) {
                await resend.emails.send({
                    from: "Webshop <onboarding@resend.dev>",
                    to: email,
                    subject: "Tack för din beställning!",
                    html: `<h1>Tack ${name}!</h1><p> vi har mottagit din order! </p>`,
                });
            }
        }

        return NextResponse.json({ recevied: true });
    }catch (err) {
        console.error(err);
        return NextResponse.json({ error: "webhook error"}, { status: 400});
    }
}