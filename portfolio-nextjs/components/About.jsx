import React from 'react'

const About = () => {
  return (
    <div  id='about' className='w-full md:h-screen p-4 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
          <div className='col-span-2'>
            <p className='py-4 uppercase text-xl tracking-widest text-[#5aa2c9] font-bold'>About</p>
            <h2 className='py-4'>Who I Am</h2>
            <p className='py-2 text-[#CFCFCF]'>
                I have spent the last few years studying psychology and accounting at University. I have always had a knack and love for technology and working with computers ever since childhood. Last year during my holidays I thought I would learn HTML and CSS to make edits for my friends small business website they was working on. What I thought would be a fun way to pass my time during University holidays has evolved into a love for programming. 
            </p>
            <p className='py-2 text-[#CFCFCF]'>
                I was absolutely enthralled by the intricacies and nuance of modern web development and was driven to learn as much as possible. These days I am drawn to the capabilities of modern javascript frameworks and their ever evolving features. I am now spending my time learning new technologies and building projects primarily with React. 
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