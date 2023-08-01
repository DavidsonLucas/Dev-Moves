import React from 'react'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import * as c from './styled'
import CardMenor from '../CardMenor'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode,  } from 'swiper';


const SliderMenor = ({ info, title }) => {


  return (
    <>
      <c.Container>
        <h2>{title}</h2>
        <Swiper 
              
              spaceBetween={1} 
              slidesPerView={'auto'}
              freeMode={true} 
              modules={[FreeMode]}
              className='swiper'
              breakpoints={{
                  280: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  360: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  375: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  390: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },  
                  540: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },  
                  768: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                  }, 
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  
                  1200:{
                    slidesPerView: 7,
                    spaceBetween: 10,
                  }
        
                }}
        
        >
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
