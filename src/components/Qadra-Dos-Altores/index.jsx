import React, { Children } from 'react'
import * as c from './styled'

const Quadrado = ({children}) => {
  return (
    <div>
      <c.Quadrado>{children}</c.Quadrado>
    </div>
  )
}

export default Quadrado
