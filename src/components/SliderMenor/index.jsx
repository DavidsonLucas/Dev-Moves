import React from 'react'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import * as c from './styled'
import CardMenor from '../CardMenor'

const SliderMenor = ({ info, title }) => {


  return (
    <>
      <c.Container>
        <h2>{title}</h2>
        <Swiper grabCursor navigation spaceBetween={10} slidesPerView='auto' className='swiper'>
          {info.map((item, index) => (
            <SwiperSlide key={index} >
              <CardMenor item = {item}/>
            </SwiperSlide>
          ))}

        </Swiper>
      </c.Container>
    </>
  )
}

export default SliderMenor
