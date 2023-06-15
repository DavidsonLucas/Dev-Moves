import React from 'react'
import * as c from './styled'
import api from '../../services/api'
import { useState, useEffect } from 'react'
import Slider from '../../components/Slider'
import SliderMenor from '../../components/SliderMenor'


const Movies = () => {
const [topMovies, setTopMovies] = useState()
const [movieForComing, setMovieForComing] = useState()
const [movie, setMovie] = useState()
const [moviePopular, setMoviePopular] = useState()



useEffect(() => {

async function getTopMoveis() {
  const {
    data: { results }
  } = await api.get('/movie/top_rated')

  setTopMovies(results)
}

async function getMovieForComing() {
  const {
    data: { results }
  } = await api.get('/movie/upcoming')

  setMovieForComing(results)
}

async function getMovies() {
  const {
    data: { results }
  } = await api.get('/discover/movie')

  setMovie(results)
}

async function getMoveisPopular() {
  const {
    data: { results }
  } = await api.get('/person/popular')

  setMoviePopular(results)
  console.log(results)

}

getTopMoveis()
getMovieForComing()
getMovies()
getMoveisPopular()
}, [])

  // return (
  //   // <c.Container>
  //   // {topMovies && <Slider info={topMovies} title={'Top Filmes'}/>}
  //   // {movie && <Slider info={movie} title={''}/>}
  //   // {moviePopular && <SliderMenor info={moviePopular} title={''}/>}
  //   // {movieForComing && <Slider info ={movieForComing} title={''}/>}

  //   // </c.Container>
  // )
}

export default Movies
