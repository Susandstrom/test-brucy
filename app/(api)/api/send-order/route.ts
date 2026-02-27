import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { OrderEmailTemplate } from "@/app/components/order-email-template";

export async function POST(req: Request) {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      items,
      total,
    } = await req.json();

    const data = await resend.emails.send({
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

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: "Kunde inte skicka mail" },
      { status: 500 }
    );
  }
}