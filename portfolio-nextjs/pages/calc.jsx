import React from 'react'
import Calculator from '../public/assets/projects/Calculator.PNG'
import Pages from '../components/Pages'
 

const calc = () => {
  return (
    <Pages 
        projectPic={Calculator}
        name={'Basic Calculator'}
        mainTech={'React JS'}
        description={'Basic calculator that can perform rudimentary to medium complexity mathematic operations. Users can press the number buttons and combine it with an operant to calculate. Built with React JS using components and useState hooks.'}
        techs={['Reactjs', 'HTML', 'CSS3']}
        gitHubLink={'https://github.com/CalebWright156/Calculator-React'}
    />
  )
}


// projectPic, name, mainTech, description, techs
export default calc