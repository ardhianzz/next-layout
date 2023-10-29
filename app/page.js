import React from 'react'

const MainPage = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen bg-slate-50'>
      <div className=''>
        <h1 className='text-3xl mb-12'>Hallo, silahkan pilih :</h1>
        <div className='block justify-center'>
          <div className='bg-blue-800 cursor-pointer w-36 mx-auto my-2 p-2 rounded-md hover:bg-blue-400 text-center text-blue-50'>User</div>
          <div className='bg-blue-800 cursor-pointer w-36 mx-auto my-2 p-2 rounded-md hover:bg-blue-400 text-center text-blue-50'>Admin Level 1</div>
          <div className='bg-blue-800 cursor-pointer w-36 mx-auto my-2 p-2 rounded-md hover:bg-blue-400 text-center text-blue-50'>Admin Level 2</div>
        </div>
      </div>
    </div>
  )
}

export default MainPage