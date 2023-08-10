import { Stripe } from "stripe"

async function loadPrices() {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const prices = await stripe.prices.list()
    return prices.data
}

async function PricingPage() {
    const prices = await loadPrices()
    console.log(prices)

    return (
        <div className="flex justify-center items-center h-screen">
            <div>
                <header>
                    <h1 className="mt-10 flex justify-center">Our Packs</h1>
                </header>
                <div className="flex gap-x-2">
                    {prices.map(price => (
                        <div key={price.id} className=" mb-2 border-2 p-6 ">
                            <h3 className="">{price.nickname}</h3>
                            <h2 className="">{price.unit_amount / 100} $</h2>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PricingPage