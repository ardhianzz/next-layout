import React from 'react'

const Footer = () => {
  return (
    <div className="absolute bg-slate-800 bottom-0 h-10 w-screen">
      <div className='flex w-full h-full'>
        <div className='mx-auto my-auto text-slate-300 text-xs italic'>
            <p>
              Starter Layout Next Js <br />
              by <span className='font-semibold'>Nur Ardhiansyah</span>
            </p>
        </div>
      </div>
    </div>
  )
}

export default Footer