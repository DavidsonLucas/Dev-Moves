import React from 'react'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import * as c from './styled'
import Card from '../Card'

const Slider = ({ info, title }) => {


  return (
    <>
      <c.Container>
        <h2>{title}</h2>
        <Swiper grabCursor navigation spaceBetween={10} slidesPerView='auto' className='swiper'>
          {info.map((item, index) => (
            <SwiperSlide key={index} >
              <Card item = {item}/>
            </SwiperSlide>
          ))}
  
        </Swiper>
      </c.Container>
    </>
  )
}

export default Slider
