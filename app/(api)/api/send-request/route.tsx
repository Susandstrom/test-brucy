import { EmailTemplate } from "@/app/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Grönaboken <onboarding@resend.dev>",
      to: ["suthada@brucy.io"],
      subject: "Grönaboken",
      react: (
        <EmailTemplate
          name="John"
          email="johan@email.com"
          message="Hello"
        />
      ),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

