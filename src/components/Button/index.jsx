import React from 'react'
import { useState } from 'react'
import * as c from './styled'
import Modal from '../Modal'
import { Link } from 'react-router-dom'

const Button = ({ children, red , ...rest}) => {

 

  return (
    <>
     {red ? (
       <Link to="/detalhe"> <c.ButtonRed {...rest}>{children}</c.ButtonRed></Link>
      ) : (
        <c.ButtonWathi {...rest} >{children}</c.ButtonWathi>
      )}
     
    
    </>
  )
}

export default Button
