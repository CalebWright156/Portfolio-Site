import React from 'react'
import ProjectCard from './ProjectCard'
import Calculator from '../public/assets/projects/Calculator.PNG'
import ExpenseTracker from '../public/assets/projects/Expense.PNG'
import Form from '../public/assets/projects/Form.PNG'
import Library from '../public/assets/projects/Library.PNG'
import TaskManager from '../public/assets/projects/TaskManager.PNG'
import ComingSoon from '../public/assets/projects/ComingSoon.jpg'
import PersonalSite from '../public/assets/projects/Personal.jpg'
import Image from 'next/image'


const Projects = () => {
  return (
    <div id='projects' className='w-auto m-5'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5aa2c9] font-bold'>Projects</p>
            <h2 className='py-4'>Finished Projects/Future Endeavours</h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <ProjectCard 
                image={Calculator}
                title={'Basic Calculator'}
                builtWith={'React JS'}
                linkToCode={'/calc'}
              />
              
              <ProjectCard 
                image={ExpenseTracker}
                title={'Monthly Expenses Tracker'}
                builtWith={'React JS'}
                linkToCode={'/monthlyExpenses'}
              />

              <ProjectCard 
                image={Form}
                title={'Javascript Form'}
                builtWith={'Javascript and SASS'}
                linkToCode={'/javascriptForm'}
              />

              <ProjectCard 
                image={Library}
                title={'Library app'}
                builtWith={'Typescript and Bootstrap'}
                linkToCode={'/library'}
              />

              <ProjectCard 
                image={TaskManager}
                title={'Task Manager'}
                builtWith={'React JS'}
                linkToCode={'/taskManager'}
              />             
              
               <ProjectCard 
                image={PersonalSite}
                title={'This Website!!'}
                builtWith={'NextJs and Tailwind'}
                linkToCode={'/portfolio'}
              />

              <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-600 rounded-xl group hover:bg-gradient-to-r from-[#335262] to-[#2b3242]'>
                <Image className='rounded-xl group-hover:opacity-10' src={ComingSoon} alt='' />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                  <h3 className='text-2xl text-white tracking-wider text-center'>{'Coming Soon'}</h3> 
                  <p className='pb-4 pt-2 text-white text-center'>Future Projects Coming Soon</p>
                </div>
              </div>
            </div>
        </div>  
    </div>
  )
}

export default Projects

