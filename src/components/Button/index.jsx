import React from 'react'
import { useState } from 'react'
import * as c from './styled'
import Modal from '../Modal'
import { Link } from 'react-router-dom'

const Button = ({ children, red , ...rest}) => {

 

  return (
    <>
     {red ? (
        <c.ButtonRed {...rest}>{children}</c.ButtonRed>
      ) : (
        <c.ButtonWathi {...rest} >{children}</c.ButtonWathi>
      )}
     
    
    </>
  )
}

export default Button
