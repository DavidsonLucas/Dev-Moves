import React from 'react'
import * as c from './styled'
import { useState, useEffect } from 'react'
import Slider from '../../components/Slider'
import SliderMenor from '../../components/SliderMenor'
import { getDescover, getMovie, getMovieForComing, getPerson, getTopMoveis } from '../../services/getData'


const Movies = () => {
const [topMovies, setTopMovies] = useState()
const [moviePoPular, setMoviePopular] = useState()
const [movieForComing, setMovieForComing] = useState()
const [moviePerson, setMoviePerson] = useState()
const [movieDiscover, setMovieDiscover] = useState()



useEffect(() => {
  async function getAllData() {
  Promise.all([
    getMovie(),
    getTopMoveis(),
    getPerson(),
    getMovieForComing(),
    getDescover()
  ])
  .then(([top,popular,person,forcomig,descover]) =>{
    setTopMovies(top)
    setMoviePopular(popular)
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
    {topMovies && <Slider info={topMovies} title={'Filmes'}/>}
    {moviePoPular && <Slider info={moviePoPular} title={'popular'}/>}
    {moviePerson && <SliderMenor info={moviePerson} title={'melhores atores'}/>}
    {movieForComing && <Slider info ={movieForComing} title={''}/>}
    {movieDiscover && <Slider info ={movieDiscover} title={''}/>}

    </c.Container>
  )
}

export default Movies
