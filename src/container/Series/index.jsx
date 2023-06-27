import React from 'react'
import * as c from './styled'
import { useEffect } from 'react'
import { useState } from 'react'
import { getDescover, getMovieForComing, getPerson, getPopularSeries, getTopSeries } from '../../services/getData'
import Slider from '../../components/Slider'
import SliderMenor from '../../components/SliderMenor'

const Series = () => {
const [topSeries, setTopSeries] = useState()
const [seriesPoPular, setSeriesPopular] = useState()
const [movieForComing, setMovieForComing] = useState()
const [moviePerson, setMoviePerson] = useState()
const [movieDiscover, setMovieDiscover] = useState()

  useEffect(() => {
    async function getAllData() {
    Promise.all([
      getTopSeries(),
      getPopularSeries(),
      getPerson(),
      getMovieForComing(),
      getDescover()
    ])
    .then(([top,popular,person,forcomig,descover]) =>{
      setTopSeries(top)
      setSeriesPopular(popular)
      setMoviePerson(person)
      setMovieForComing(forcomig)
      setMovieDiscover(descover)
     })
     .catch((error)=>console.error(error))
  
    }
  getAllData()
  }, [])
  return (
    <c.Container>
    {topSeries && <Slider info={topSeries} title={'series'}/>}
    {seriesPoPular && <Slider info={seriesPoPular} title={'series popular'}/>}
    {moviePerson && <SliderMenor info={moviePerson} title={'melhores atores'}/>}
    {movieForComing && <Slider info ={movieForComing} title={''}/>}
    {movieDiscover && <Slider info ={movieDiscover} title={''}/>}
    </c.Container>
  )
}

export default Series
