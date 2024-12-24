import React from 'react'
import { Container } from 'react-bootstrap'
import  './SubTitle.css'
const SubTitle = ({title,btnTitle}) => {
  return (
       
           <div className="container d-flex justify-content-between pt-3">
           <div className='text-title '>{title} </div>
            { btnTitle ? <div className='btn-title py-1 px-3'>{btnTitle}</div> 
            :null           
                }
           </div>

  )
}

export default SubTitle