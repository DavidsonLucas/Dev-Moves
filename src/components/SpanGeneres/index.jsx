import React from 'react'
import { useState } from 'react'
import * as c from './styled'

const SpanGeneres = ({ generes}) => {

  return (
    <c.Container>
        {generes && generes.map(genres => (

          <span key={genres.id}>{genres.name}</span>
        ))}
    </c.Container>
  )
}

export default SpanGeneres
