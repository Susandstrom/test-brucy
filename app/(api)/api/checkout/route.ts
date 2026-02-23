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
                    unit_amount: item.price * 100, //STRIPE SÄLJER I ÖREN SÅ DÄRFÖR *100
                },
                quantity: item.quantity,
            })),
            mode: "payment",
            success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
        });

        return Response.json({ url: session.url });
    } catch (error: any) {
        console.error(error);
        return Response.json(
            { error: error.message },
            { status: 500 }
        );
    }
}

