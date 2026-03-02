import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items } = body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item: any) => ({
        price_data: {
          currency: "sek",
          product_data: {
            name: item.productName,
          },
          unit_amount: item.price * 100, //Stripe räknar i öre så den måste vara *100
        },
        quantity: item.quantity,
      })),
      mode: "payment",

      // Hämtar kunddata (namn, adress, postkod, email) från checkout
      customer_creation: "always",

      billing_address_collection: "required",

      shipping_address_collection: {
        allowed_countries: ["SE"],
      },

      phone_number_collection: {
        enabled: true,
      },

      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart/cancel`,
    });

    return Response.json({ url: session.url });
  } catch (error: any) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}