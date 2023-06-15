import React from 'react'
import { useState, useEffect } from 'react'
import api from '../../services/api'
import Button from '../../components/Button'
import * as c from './styled'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import { getimages } from '../../utils/getImages'
import SliderMenor from '../../components/SliderMenor'


const Home = () => {
  const [shwoModal, setShwoModal] = useState(false)
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [person, setPerson] = useState()
  const [movieForComing, setMovieForComing] = useState()

  useEffect(() => {
    async function getMoveis() {
      const {
        data: { results }
      } = await api.get('/movie/popular')

      setMovie(results[2])
      console.log(results)
    }

    async function getTopMoveis() {
      const {
        data: { results }
      } = await api.get('/movie/top_rated')

      setTopMovies(results)
    }

    async function getTopSeries() {
      const {
        data: { results }
      } = await api.get('/tv/top_rated')
      
      setTopSeries(results)
    }

    
    async function getPopularSeries() {
      const {
        data: { results }
      } = await api.get('/tv/popular')

      setPopularSeries(results)
    }

    async function getPerson() {
      const {
        data: { results }
      } = await api.get('/person/popular')

      setPerson(results)
    }

        async function getMovieForComing() {
      const {
        data: { results }
      } = await api.get('/movie/upcoming')

      setMovieForComing(results)
    }
    getMoveis()
    getTopMoveis()
    getTopSeries()
    getPopularSeries()
    getPerson()
    getMovieForComing()
  }, [])
    
     
  return (
    <>
      {movie && (
        
        <>
        <c.Background imagem={getimages(movie.backdrop_path)}>
       
      { shwoModal && (<Modal  movieId={movie.id} setShwoModal={setShwoModal}/>)}
          <c.Container >
            <c.Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview} </p>
              <c.MainButton>
                <Button  red >Assista Agora</Button>
                <Button  onClick={()=>setShwoModal(true)}>Assista o Trailer</Button>
              </c.MainButton>
            </c.Info>
            <c.Publi><img src={getimages(movie.poster_path)} alt="" /></c.Publi>
          </c.Container>
        </c.Background>

        </>
      )}
    {topMovies && <Slider info={topMovies} title={'Top Filmes'}/>}
    {topSeries && <Slider info ={topSeries} title={'Top Series'}/>}
    {person && <SliderMenor info ={person} title={'Artistas Populares'}/>}
    {popularSeries && <Slider info ={popularSeries} title={'Serie popular'}/>}
    {movieForComing && <Slider info ={movieForComing} title={'Filmes que Estão por vir'}/>}


    </>
  )
}

export default Home
