import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'


const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto flex justify-center items-center'>
                <div>
                <h1 className='py-4 text-[#CFCFCF]'>
                    Hi, my name is <span className='text-[#5aa2c9]'>Caleb</span>
                </h1>
                <h1 className='py-2 text-[#CFCFCF]'>
                    Your Next Web Developer
                </h1>
                <p className='py-4 text-[#CFCFCF] max-w-[70%] m-auto'>
                    A detail-oriented, software engineer with a deep interest in full stack development. Looking to bring my skills to a tech company with global reach
                </p>
                {/* container for social links */}
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full bg-[#CFCFCF] shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaLinkedinIn className='text-[#414141]'/>
                    </div>
                    <div className='rounded-full bg-[#CFCFCF] shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaGithub className='text-[#414141]'/>
                    </div>
                    <div className='rounded-full bg-[#CFCFCF] shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineMail className='text-[#414141]'/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Main