import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({ image, title, builtWith, description, linkToCode  }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-600 rounded-xl group hover:bg-gradient-to-r from-[#335262] to-[#2b3242]'>
        <Image className='rounded-xl group-hover:opacity-10' src={image} alt='' />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3> 
            <p className='pb-4 pt-2 text-white text-center'>Built With: <span className='font-bold'>{builtWith}</span></p>
            <p className='text-center py-4'>{description}</p>
            <Link href={linkToCode}> 
                <p className='text-center py-3 px-5 rounded-lg bg-white text-gray-700 font-bold cursor-pointer'>Check Out The Code</p>
            </Link>
        </div>
    </div>
  )
}

export default ProjectCard