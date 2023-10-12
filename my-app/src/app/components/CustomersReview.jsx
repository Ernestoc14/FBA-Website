import React from 'react'

const reviews = [
  { author: "Carlos Cedeno", comment: "It is a very good product, I use it for my injury recovey " },
  { author: "Grandy Cassino", comment: "My girlfriend loves it, it was a birthday gift for her" },
  { author: "Dario Crespo", comment: "I bought the Resistance Bands Pack 3 months ago for streaching and they are really good." },
  { author: "Rita Caballero", comment: "I use the Bands in my workout everiday." }
]

function CustomersReview() {
  return (
    <section className='flex flex-col w-full h-80 justify-center items-center text-white bg-black'>
      <h2 className=' font-bold text-2xl'>Customer Reviews</h2>
      <div className='grid grid-cols-2 gap-10 mt-8'>
        {reviews.map((review, index) => (
          <div key={index} className='border border-white'>
            <h3 className='font-semibold text-lg'>{review.author}</h3>
            <p className='w-2/3'>{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CustomersReview