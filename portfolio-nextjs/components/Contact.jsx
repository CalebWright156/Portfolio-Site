import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'



const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest font-bold uppercase text-[#5aa2c9]'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* Left side */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-800 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <img className='rounded-xl hover:scale-105 ease-in duration-300' src='https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=921&q=80' alt=''/>
                        </div>
                        <div className=''>
                            <h2 className='py-2'>Caleb Wright</h2>
                            <p>Front-End Developer</p>
                            <p className='py-4'>I am available for full time junior positions or freelance projects. Contact me and let&apos;s talk.</p>
                        </div>
                        <div>
                        <p className='uppercase pt-8'>Lets Connect</p>
                        <div className='flex items-center justify-between py-4'>
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

                {/* Right side */}
                <div className='col-span-3 w-full bg-[#CFCFCF] text-[#414141] font-bold h-auto shadow-xl shadow-gray-800 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-400' type='text' />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone Number</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-400' type='text' />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-400' type='email' />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-400' type='text' />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-400' rows='10'></textarea>
                            </div>
                            <button className='w-full p-4 text-[#eae8e8] mt-4'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href=''>
                    <div className='rounded-full bg-[#CFCFCF] shadow-lg shadow-gray-800 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp size={20} className='text-[#414141]'/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact