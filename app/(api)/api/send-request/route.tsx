import { OrderEmailTemplate } from "@/app/components/order-email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Grönaboken <onboarding@resend.dev>",
      to: ["suthada@brucy.io"],
      subject: "Orderbekräftelse – Grönaboken",
      react: (
        <OrderEmailTemplate
          firstName="John"
          lastName="Doe"
          email="johan@email.com"
          phoneNumber="070-123 45 67"
          address="Storgatan 1, 123 45 Stockholm"
          items={[
            {
              productName: "Vaniljpulver",
              quantity: 2,
              price: 79,
            },
            {
              productName: "Kardemumma",
              quantity: 1,
              price: 49,
            },
          ]}
          total={207}
        />
      ),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

