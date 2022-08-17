import React from 'react'
import Pages from '../components/Pages'
import Tasks from '../public/assets/projects/TaskPage.PNG'

const taskManager = () => {
  return (
    <Pages 
        projectPic={Tasks}
        name={'Task Manager'}
        mainTech={'Reactjs'}
        description={'Task management application. Users can create tasks, have these tasks appear in a list where they can be highlighted to indicate a priority task, or deleted once completed. App utlises basic CRUD applications, as well as react hooks.'}
        techs={['HTML', 'CSS3', 'Javascript', 'Reactjs',]}
        gitHubLink={'https://github.com/CalebWright156/Task-Manager'}
    />
  )
}

export default taskManager