import React from 'react'

const About = () => {
  return (
    <div  id='about' className='w-full md:h-screen p-4 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
          <div className='col-span-2'>
            <p className='py-4 uppercase text-xl tracking-widest text-[#5aa2c9] font-bold'>About</p>
            <h2 className='py-4'>Who I Am</h2>
            <p className='py-2 text-[#CFCFCF]'>
            I have spent the past few years studying Psychology and Accounting at the Queensland University of Technology in Australia. While I have always had a passion for technology and computer work, it was not until late 2021 that I started to learn to code. Initially, this was a great way for me to pass the time during the holidays. I worked with my friends to help them create websites for their small businesses and taught myself a wide range of skills. What began as a hobby has evolved into a passion for programming and learning.
            </p>
            <p className='py-2 text-[#CFCFCF]'>
            I was enthralled by the intricacies and nuances of modern web development and drove myself to learn as much as possible. These days, I am drawn to the capabilities of modern javascript frameworks, and their ever-evolving features. I spend my time learning new technologies, educating myself, and building projects.
            </p>
          </div>
          <div className='w-full h-auto m-auto shadow-xl shadow-gray-800 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <img className='rounded-xl' src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80' alt='background' />
          </div>
        </div>
    </div>
  )
}

export default About