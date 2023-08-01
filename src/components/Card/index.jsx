import React from 'react'
import * as c from './styled'
import { getimages } from '../../utils/getImages'

const Card = ({ item  }) => {


  return (
    <c.Container>
       <img src={getimages(item.poster_path || item.profile_path ||"")} alt="" />
      <h3> {item.title || item.name || ""}</h3>
    </c.Container>
  )
}

export default Card
