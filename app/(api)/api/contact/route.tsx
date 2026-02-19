import { EmailTemplate } from "@/app/components/email-template";
import { Resend } from "resend";
import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json({ error: "Alla fält måste fyllas i" }, { status: 400 });
    }

    const html = await render(<EmailTemplate name={name} email={email} message={message} />);

    // skicka mailet
    const data = await resend.emails.send({
      from: "Grönaboken <gronaboken@resend.dev>",
      to: ["suthada@brucy.io"], 
      subject: "Ny kontakt från webbformulär",
      html, 
    });

    console.log("Mejl skickat:", data);

    return Response.json({ success: true, data });
  } catch (error: any) {
    console.error(error);
    return Response.json({ error: error.message || "Något gick fel" }, { status: 500 });
  }
}
  