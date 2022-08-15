import React from 'react'
import SkillImage from './SkillImage'


const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
        <div className='max-w-p[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5aa2c9] font-bold'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <SkillImage imageSource={'/../public/assets/skills/html.png'} name={'HTML'}/>
                <SkillImage imageSource={'/../public/assets/skills/css.png'} name={'CSS'} />
                <SkillImage imageSource={'/../public/assets/skills/sass.png'} name={'SASS'} />
                <SkillImage imageSource={'/../public/assets/skills/tailwind.png'} name={'Tailwind'} />
                <SkillImage imageSource={'/../public/assets/skills/bootstrap.png'} name={'Bootstrap'} />
                <SkillImage imageSource={'/../public/assets/skills/javascript.png'} name={'Javascript'} />
                <SkillImage imageSource={'/../public/assets/skills/typescript.png'} name={'Typescript'} />
                <SkillImage imageSource={'/../public/assets/skills/react.png'} name={'React'} />
                <SkillImage imageSource={'/../public/assets/skills/nextjs.png'} name={'NextJs'} />
                <SkillImage imageSource={'/../public/assets/skills/node.png'} name={'Node'} />
            </div>
        </div>
    </div>
  )
}

export default Skills