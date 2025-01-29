import React from 'react'

const Button = ({btnContent}) => {
  return (
    <>
    <button className='text-[18px] font-nunito text-bg_white font-bold bg-yellow_Color py-[10px] px-[20px] rounded-lg'>{btnContent || "nai"} </button>
    </>
  )
}

export default Button