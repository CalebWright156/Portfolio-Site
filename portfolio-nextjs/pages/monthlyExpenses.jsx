import React from 'react'
import Pages from '../components/Pages'
import Expenses from '../public/assets/projects/Expense.PNG'


const monthlyExpenses = () => {
  return (
    <Pages 
        textColor={'text-gray-800'}
        projectPic={Expenses}
        name={'Monthly Expenses'}
        mainTech={'React JS'}
        description={'Expense tracker where you can add and remove transactions that will be automatically updated. If users go into a negative balance as displayed the balance text will turn red. Built with React JS using useState hooks and Context API.'}
        techs={['Reactjs', 'HTML', 'CSS3']}
        gitHubLink={'https://github.com/CalebWright156/Monthly-Expenses'}
    />
  )
}

export default monthlyExpenses