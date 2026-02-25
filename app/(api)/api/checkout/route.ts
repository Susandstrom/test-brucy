import Stripe from "stripe";

//Min stripe key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

//POST - betalning endast med kort och vart kunden hamnar efter betalning eller icke betalning
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { items } = body;
        console.log("Items:", items);

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

            //för att samla in kunduppgifter
            customer_creation: "always",
            billing_address_collection: "required",
            phone_number_collection: {
                enabled: true,
            },
            success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart/success`,//Sidan du hamnar på om betalningen gick igenom och en beställning blev lagd
            cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart/cancel`,//Sidan du hamnar på om du avbryter eller något blev fel
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

