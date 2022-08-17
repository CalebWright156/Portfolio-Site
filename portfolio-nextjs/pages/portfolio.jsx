import React from 'react'
import Pages from '../components/Pages'
import Tasks from '../public/assets/projects/Personal.jpg'

const portfolio = () => {
  return (
    <Pages 
        projectPic={Tasks}
        name={'This Website!'}
        mainTech={'Nextjs'}
        description={'Portfolio website built with nextjs for pages and routing and tailwindcss for responsiveness.'}
        techs={['HTML', 'CSS3', 'Reactjs', 'Nextjs', 'Tailwindcss']}
        gitHubLink={'https://github.com/CalebWright156/Portfolio-Site'}
        textSize={'text-4xl'}
    />
  )
}

export default portfolio