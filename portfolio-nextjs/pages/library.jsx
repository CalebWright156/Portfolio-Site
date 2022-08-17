import React from 'react'
import Pages from '../components/Pages'
import LibraryPic from '../public/assets/projects/LibraryPage.PNG'


const library = () => {
  return (
    <Pages 
        textColor={'text-gray-800'}
        projectPic={LibraryPic}
        name={'Library'}
        mainTech={'Bootstrap and Typescript'}
        description={'Basic Library built with bootstrap and typescript. Users can add a book through a form that asks for a Title, Author and ISBN. Once the user submits, the details from the form are placed in a table that is saved in localstorage. Users can also delete added books from the table.'}
        techs={['HTML', 'CSS3', 'Javascript', 'Bootstrap', 'Typescript']}
        gitHubLink={'https://github.com/CalebWright156/Library'}
    />
  )
}

export default library