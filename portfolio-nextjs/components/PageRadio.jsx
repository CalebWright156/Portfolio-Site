import React from 'react'
import {RiRadioButtonFill} from 'react-icons/ri'


const PageRadio = ({ technology }) => {
  return (
    <>
        <p className='py-2 flex items-center'><RiRadioButtonFill className='mr-1'/>{ technology }</p>
    </>
  )
}

export default PageRadio