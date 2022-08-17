import React from 'react'
import Pages from '../components/Pages'
import FormPic from '../public/assets/projects/FormPage.PNG'


const javascriptForm = () => {
  return (
    <Pages 
        projectPic={FormPic}
        name={'Form'}
        mainTech={'Javascript and SASS'}
        description={'Javascript form employing DOM manipulation and SASS features. Users can enter several details (First and last name, email and password) and the app will return a paragraph conveying instructions using all the user data entered.'}
        techs={['HTML', 'CSS3', 'Javascript', 'SASS']}
        gitHubLink={'https://github.com/CalebWright156/Javascript-Form'}
        textSize={'text-4xl'}
    />
  )
}

export default javascriptForm