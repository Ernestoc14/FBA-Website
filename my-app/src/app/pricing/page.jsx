import Card from "../components/Card"
import { Stripe } from "stripe"

async function loadPrices() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const { data: prices } = await stripe.prices.list({
    active: true,
    limit: 5, //Fix when we have more than 3 products
    expand: ['data.product'],
  })
  return prices
}

async function PricingPage() {
  const prices = await loadPrices()

  return (
    <div className="flex justify-center items-center h-screen bg-slate-500 text-white">
      <div>
        <header>
          <h1 className="my-5 text-center">Our Packs</h1>
        </header>
        <div className="flex justify-center items-center">
          {/* WE CAN ONLY GET ONE IMAGE PER PRODUCT */}
          <Card prices={prices} />
        </div>
      </div>
    </div>
  )
}

export default PricingPage