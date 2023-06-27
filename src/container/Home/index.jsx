import React from 'react'

import { Navigate, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Button from '../../components/Button'
import * as c from './styled'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import { getimages } from '../../utils/getImages'
import SliderMenor from '../../components/SliderMenor'
import { getMovieForComing, getMovies, getPerson, getPopularSeries, getTopMoveis, getTopSeries } from '../../services/getData'


const Home = () => {
  const [shwoModal, setShwoModal] = useState(false)
  const [movie, setMovie] = useState(0)
  const [topMovies, setTopMovies] = useState(0)
  const [topSeries, setTopSeries] = useState(0)
  const [popularSeries, setPopularSeries] = useState(0)
  const [person, setPerson] = useState(0)
  const [movieForComing, setMovieForComing] = useState(0)
  const navigaite = useNavigate(0)

  useEffect(() => {

    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopMoveis(),
        getTopSeries(),
        getPopularSeries(),
        getPerson(),
        getMovieForComing()
      ])
        .then(([movie, topMovies, topSeries, popularSeries, person, forcomig]) => {
          setMovie(movie)
          setTopMovies(topMovies)
          setTopSeries(topSeries)
          setPopularSeries(popularSeries)
          setPerson(person)
          setMovieForComing(forcomig)
        })
        .catch((error) => console.error(error))

    }
    getAllData()
  }, [])

  return (
    <>
      {movie && (

        <>
          <c.Background imagem={getimages(movie.backdrop_path)}>
            {shwoModal && (<Modal movieId={movie.id} setShwoModal={setShwoModal} />)}
            <c.Container >
              <c.Info>
                <div id='lind'>
                  <h1>{movie.title}</h1>
                  <p>{movie.overview} </p>
                </div>
                  <c.MainButton>
                    <Button red onClick={() => navigaite(`/detalhe/${movie.id}`)}>Assista Agora</Button>
                    <Button onClick={() => setShwoModal(true)}>Assista o Trailer</Button>
                  </c.MainButton>
              </c.Info>
              <c.Publi><img src={getimages(movie.poster_path)} alt="" /></c.Publi>
            </c.Container>
          </c.Background>

        </>
      )}
      {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
      {topSeries && <Slider info={topSeries} title={'Top Series'} />}
      {person && <SliderMenor info={person} title={'Artistas Populares'} />}
      {popularSeries && <Slider info={popularSeries} title={'Serie popular'} />}
      {movieForComing && <Slider info={movieForComing} title={'Filmes que Estão por vir'} />}


    </>
  )
}

export default Home
