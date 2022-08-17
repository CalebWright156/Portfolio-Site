import React from 'react'
import SkillImage from './SkillImage'
import HTMLLogo from '../public/assets/skills/html.png'
import CSSLogo from '../public/assets/skills/css.png'
import SASSLogo from '../public/assets/skills/sass.png'
import TailwindLogo from '../public/assets/skills/tailwind.png'
import BootstrapLogo from '../public/assets/skills/bootstrap.png'
import JavascriptLogo from '../public/assets/skills/javascript.png'
import TypescriptLogo from '../public/assets/skills/typescript.png'
import ReactLogo from '../public/assets/skills/react.png'
import NextLogo from '../public/assets/skills/nextjs.png'
import NodeLogo from '../public/assets/skills/node.png'



const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-10'>
        <div className='max-w-p[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5aa2c9] font-bold'>Skills</p>
            <h2 className='py-4'>My Skills</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <SkillImage imageSource={HTMLLogo} name={'HTML'}/>
                <SkillImage imageSource={CSSLogo} name={'CSS'} />
                <SkillImage imageSource={SASSLogo} name={'SASS'} />
                <SkillImage imageSource={TailwindLogo} name={'Tailwind'} />
                <SkillImage imageSource={BootstrapLogo} name={'Bootstrap'} />
                <SkillImage imageSource={JavascriptLogo} name={'Javascript'} />
                <SkillImage imageSource={TypescriptLogo} name={'Typescript'} />
                <SkillImage imageSource={ReactLogo} name={'React'} />
                <SkillImage imageSource={NextLogo} name={'NextJs'} />
                <SkillImage imageSource={NodeLogo} name={'Node'} />
            </div>
        </div>
    </div>
  )
}

export default Skills