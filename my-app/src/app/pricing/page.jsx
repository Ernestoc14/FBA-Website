import Card from "../components/Card"
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
        <Card prices={prices}/>
      </div>
    </div>
  )
}

export default PricingPage