import React from 'react'
import ProjectCard from './ProjectCard'
import Calculator from '../public/assets/projects/Calculator.PNG'
import ExpenseTracker from '../public/assets/projects/Expense.PNG'
import Form from '../public/assets/projects/Form.PNG'
import Library from '../public/assets/projects/Library.PNG'
import TaskManager from '../public/assets/projects/TaskManager.PNG'
import ComingSoon from '../public/assets/projects/ComingSoon.jpg'
import PersonalSite from '../public/assets/projects/Personal.jpg'


const Projects = () => {
  return (
    <div className='w-full m-5'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5aa2c9] font-bold'>Projects</p>
            <h2 className='py-4'>Finished Projects/Future Endeavours</h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <ProjectCard 
                image={Calculator}
                title={'Basic Calculator'}
                builtWith={'React JS'}
                description={'Basic calculator that can perform mathematic operations. Built with React JS using components and useState hooks'}
                linkToCode={'https://github.com/CalebWright156/Calculator-React'}
              />
              
              <ProjectCard 
                image={ExpenseTracker}
                title={'Monthly Expenses Tracker'}
                builtWith={'React JS'}
                description={'Expense tracker where you can add and remove transactions that will be automatically updated. Built with React JS using useState hooks and Context API'}
                linkToCode={'https://github.com/CalebWright156/Monthly-Expenses'}
              />

              <ProjectCard 
                image={Form}
                title={'Javascript Form'}
                builtWith={'Javascript and SASS'}
                description={'Javascript form employing DOM manipulation and SASS features'}
                linkToCode={'https://github.com/CalebWright156/Javascript-Form'}
              />

              <ProjectCard 
                image={Library}
                title={'Library app'}
                builtWith={'Typescript and Bootstrap'}
                description={'Library that utilises that displays form entered data into a table. User can add and delete books as well as have their books saved on localstorage'}
                linkToCode={'https://github.com/CalebWright156/Library'}
              />

              <ProjectCard 
                image={TaskManager}
                title={'Task Manager'}
                builtWith={'React JS'}
                description={'Task Manager allowing the user basic CRUD applications for their tasks. Tasks can be added to a list with a reminder feature and the ability to delete tasks once completed.'}
                linkToCode={'https://github.com/CalebWright156/Task-Manager'}
              />

              <ProjectCard 
                image={ComingSoon}
                title={'Task Manager'}
                builtWith={'React JS'}
                description={'Task Manager allowing the user basic CRUD applications for their tasks. Tasks can be added to a list with a reminder feature and the ability to delete tasks once completed.'}
                linkToCode={'/'}
              />

              <ProjectCard 
                image={PersonalSite}
                title={'This Website!!'}
                builtWith={'NextJs and Tailwind'}
                description={'This website was made with Nextjs with lazy image loading and custom tailwind for the stylings and responsiveness'}
                linkToCode={'https://github.com/CalebWright156/Portfolio-Site'}
              />

            </div>
        </div>  
    </div>
  )
}

export default Projects

