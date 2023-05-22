import React from 'react'
import { useContext } from 'react'
import { sender } from '../Store'

const Title = (props) => {

  let {mode, setMode} = useContext(sender)

  return (
    <>
    <div className="main py-1">
    <div className='text-center mt-4 py-5'>
            <h1 className='text-warning '>{props.title}</h1>
            <h5 className={`text-${mode?"light":"dark"}`}>{props.describe}</h5>
        </div>
    </div>
        
    </>
  )
}

export default Title