import React from 'react'
import { useState } from 'react'
import * as c from './styled'
import { getimages } from '../../utils/getImages'

const Credtis = ({ credtis }) => {

  return (
    <>
          <c.Titulo>Créditos</c.Titulo>

      {credtis && (
        
          <c.Container>
            {credtis.slice(0 , 5).map(artits => (
              <div key={artits.id}>
                <img src={getimages(artits.profile_path)} alt="" />
                <h4>{artits.character}</h4>
              </div>
              
            ))}
          </c.Container>
        
      )}
    </>
  )
}

export default Credtis
