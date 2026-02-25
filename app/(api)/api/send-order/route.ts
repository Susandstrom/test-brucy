import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
    try{
        const { email, name } = await req.json();

        const data = await resend.emails.send({
            from: "webshop <onboarding@resend.dev>",
            to: email,
            subject: "Tack för din beställning!",
            html:`
            <h1>Tack ${name}!</h1>
            <p>Vi har mottagit din beställning.</p>`,
        });

        return NextResponse.json({ success: true, data});
    } catch (error) {
        return NextResponse.json(
            { error: "Kunde inte skicka mail"},
            { status: 500 }
        );
    }

}