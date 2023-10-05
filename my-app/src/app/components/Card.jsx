import React from 'react'
import CustomButton from "./CustomButton"

function Card({ prices }) {
  return (
    <div className="grid justify-center items-center md:grid-cols-2 lg:grid-cols-4 gap-x-2 bg-white text-black">
      {prices.map(price => (
        <div key={price.id} className=" mb-2 border-2 border-black p-6">
          <h3>{price.product.name}</h3>
          <h2 className="text-center text-2xl font-bold">{price.unit_amount / 100} $</h2>
          <div className="flex justify-center items-center">
            <img src={price.product.images} alt={price.product.name} className="w-40 h-40 object-cover" />
          </div>
          <CustomButton />
        </div>
      ))
      }
    </div>
  )
}

export default Card