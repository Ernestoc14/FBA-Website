"use client"
import React from 'react'
import { useState } from "react"

const handleClick = (click, setClick) => {
  click ? setClick(false) : setClick(true)
  alert(click)
  console.log(click)
}

function CustomButton() {
  const [click, setClick] = useState(false)

  return (
    <button
      className="mt-4 p-3 border border-black rounded-md"
      onClick={() => { handleClick(click, setClick) }}
    >
      BUY
    </button>
  )
}

export default CustomButton