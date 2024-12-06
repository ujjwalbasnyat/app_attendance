import React from 'react'
import { BsSend } from "react-icons/bs";

function Messenger() {
  return (
    <div className='bg-white item-center justify-center shadow-md grid grid-cols-1 gap-2 p-4 rounded-md'>
        <div className='font-semibold'>
        Send Message to Parents
        </div>
        <div className='flex item-center gap-2'>
            <input type='text' placeholder='Enter a message' className='focus:outline-none'/>
            <button className='bg-secondary'><BsSend/></button>
        </div>
    </div>
  )
}

export default Messenger