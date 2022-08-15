import React, { useState } from "react"
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Navbar = () =>{
    const [nav, setNav] = useState(false)

    const toggleNav = () =>{
        setNav(!nav)
    }

    return (
        <div className="fixed w-full h-20 shadow-xl z-[150] bg-[#414141]">
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <span>*FUTURE LOGO*</span>
                <div>
                    {/* Links to pages */}
                    <ul className="hidden md:flex">
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b hover:opacity-75">Home</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b hover:opacity-75">About</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b hover:opacity-75">Skills</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b hover:opacity-75">Projects</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b hover:opacity-75">Contact</li>
                        </Link>
                    </ul>
                    {/* hamburger menu */}
                    <div onClick={toggleNav} className="md:hidden cursor-pointer">
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div>

            {/* overlay menu after hamburger icon is clicked*/}
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                    {/* Ternary that executes the overlay menu */}
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] m:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300' 
                                    : 'fixed left-[-100%] top-0 ease-in duration-300'}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <span className="text-[#414141]">Future Logo</span>
                            <div onClick={toggleNav} className="rounded-full shadow-lg shadow-grey-500 p-3 cursor-pointer">
                                <AiOutlineClose className="text-[#414141]" />
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-300 my-4"> 
                        <p className="w-[85%] text-[#414141] md:w-[90%] py-4">Lets build something together*CHANGE*</p>
                    </div>
                    <div className="py-4 flex-col">
                        {/* Links to pages, similar to the nav*/}
                    <ul className="uppercase">
                        <Link href='/'>
                            <li className="py-4 text-[#414141] text-sm">Home</li>
                        </Link>
                        <Link href='/'>
                            <li className="py-4 text-[#414141] text-sm">About</li>
                        </Link>
                        <Link href='/'>
                            <li className="py-4 text-[#414141] text-sm">Skills</li>
                        </Link>
                        <Link href='/'>
                            <li className="py-4 text-[#414141] text-sm">Projects</li>
                        </Link>
                        <Link href='/'>
                            <li className="py-4 text-[#414141] text-sm">Contact</li>
                        </Link>
                    </ul>
                    {/* container including links to Linkedin, github and email */}
                    <div className="pt-40 ">
                        <p className="uppercase tracking-widest text-[#5aa2c9] font-bold">Lets connect *CHANGE*</p>
                        <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                            <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                                <FaLinkedinIn className='text-[#414141]'/>
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                                <FaGithub className='text-[#414141]'/>
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                                <AiOutlineMail className='text-[#414141]'/>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar