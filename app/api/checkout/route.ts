import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

type CheckoutItem = {
  productName: string;
  price: number;
  quantity: number;
};

type CheckoutBody = {
  items: CheckoutItem[];
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CheckoutBody;
    const { items } = body;

    if (!Array.isArray(items) || items.length === 0) {
      return Response.json({ error: "Inga varor i checkout" }, { status: 400 });
    }

    const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
    const requestOrigin = new URL(request.url).origin;
    const baseUrl =
      configuredSiteUrl && !configuredSiteUrl.includes("localhost")
        ? configuredSiteUrl
        : requestOrigin;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item) => ({
        price_data: {
          currency: "sek",
          product_data: {
            name: item.productName,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      customer_creation: "always",
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["SE"],
      },
      phone_number_collection: {
        enabled: true,
      },
      success_url: `${baseUrl}/cart/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cart/cancel`,
    });

    return Response.json({ url: session.url });
  } catch (error: unknown) {
    console.error(error);
    const message =
      error instanceof Error ? error.message : "Kunde inte skapa checkout";
    return Response.json({ error: message }, { status: 500 });
  }
}
