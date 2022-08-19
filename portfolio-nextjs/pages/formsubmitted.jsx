import React from 'react'
import Link from 'next/link'

const formsubmitted = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto flex flex-col justify-center items-center'>
        <h1 className='py-4 text-[#CFCFCF]'>
            Form Submitted!
        </h1>
        <Link href='/'>
          <button className='my-5 w-[50%] h-16 font-bold text-xl'>Click Here To Return</button>
        </Link>
      </div>
    </div>
  )
}

export default formsubmitted