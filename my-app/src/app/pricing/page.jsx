import { Stripe } from "stripe"

async function loadPrices() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const { data: prices } = await stripe.prices.list({
    active: true,
    limit: 10,
    expand: ['data.product'],
  })
  return prices
}

async function PricingPage() {
  const prices = await loadPrices()
  console.log(prices)

  return (
    <div className="flex justify-center items-center h-screen bg-slate-700 text-white">
      <div>
        <header>
          <h1 className="my-5 text-center">Our Packs</h1>
        </header>
        <div className="grid justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2">
          {prices.map(price => (
            <div key={price.id} className=" mb-2 border-2 p-6 ">
              <h3>{price.product.name}</h3>
              <h2 className="text-2xl font-bold">{price.unit_amount / 100} $</h2>
              <img src={price.product.images[0]} alt={price.product.name} className="w-40 h-40 object-cover" />
              <button className="mt-4 p-3 border border-white rounded-md">BUY</button>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default PricingPage