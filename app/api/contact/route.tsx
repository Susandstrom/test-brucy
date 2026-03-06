import { render } from "@react-email/render";
import { createElement } from "react";
import { Resend } from "resend";
import { EmailTemplate } from "@/app/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Alla fält måste fyllas i" },
        { status: 400 }
      );
    }

    const html = await render(
      createElement(EmailTemplate, { name, email, message })
    );

    const data = await resend.emails.send({
      from: "Grönaboken <gronaboken@resend.dev>",
      to: ["suthada@brucy.io"],
      subject: "Ny kontakt från webbformulär",
      html,
    });

    return Response.json({ success: true, data });
  } catch (error: unknown) {
    console.error(error);
    const message = error instanceof Error ? error.message : "Något gick fel";
    return Response.json({ error: message }, { status: 500 });
  }
}
