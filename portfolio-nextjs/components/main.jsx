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
                    <div className='rounded-full bg-[#CFCFCF] shadow-lg shadow-gray-800 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <a href="https://www.linkedin.com/in/caleb-wright-120934177/"><FaLinkedinIn className='text-[#414141]'/></a>
                    </div>
                    <div className='rounded-full bg-[#CFCFCF] shadow-lg shadow-gray-800 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <a href="https://github.com/CalebWright156"><FaGithub className='text-[#414141]'/></a>
                    </div>
                    <div className='rounded-full bg-[#CFCFCF] shadow-lg shadow-gray-800 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineMail className='text-[#414141]'/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Main