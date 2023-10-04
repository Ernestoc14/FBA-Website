import React from 'react'
import Image from "next/image"

function Hero() {
  return (
    <div className="hero">
      <div className="hero__image-container h-60">
        <div className="hero__image border border-black">
          <Image
            // src="/rywyn-logo.jpeg"
            src="/Rywyn-Horizontal-Logo.jpeg"
            alt="hero"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex-1 w-full">
        <div className="flex flex-col justify-center text-center w-full mt-32 z-10 absolute">
          <h1 className="text-white text-5xl font-sans font-black">
            The Best Resistance Bands
            <br />
            In the Market!
          </h1>
          <p className="text-white mt-10">
            Streamline your car rental experience with our efforless booking process.
          </p>
        </div>
      </div>


      <div className="hero__video-overlay border border-green-700 min-w-full min-h-">
        <video autoPlay muted loop fill className="w-full">
          <source src="/bg-video-hero.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Hero