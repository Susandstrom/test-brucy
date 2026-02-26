import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const sessionId = body.sessionId;

    if (!sessionId) {
      return NextResponse.json(
        { error: "No sessionId provided" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["customer"],
    });

    return NextResponse.json({
      name: session.customer_details?.name,
      email: session.customer_details?.email,
      phone: session.customer_details?.phone,
      address: session.customer_details?.address,
    });

  } catch (error) {
    console.error("VERIFY SESSION ERROR:", error);
    return NextResponse.json(
      { error: "Failed to fetch session" },
      { status: 500 }
    );
  }
}