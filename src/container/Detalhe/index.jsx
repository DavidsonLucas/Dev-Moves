import React from 'react'
import { useState, useEffect } from 'react'
import { getCredit, getDetali, getMovieVideo, getSimilar } from '../../services/getData'
import { useParams } from 'react-router-dom'
import * as c from './styled'
import { getimages } from '../../utils/getImages'
import SpanGeneres from '../../components/SpanGeneres'
import Credtis from '../../components/Credtis'
import { getVideos } from '../../utils/getVideos'
import Slider from '../../components/Slider'


const Detalhe = () => {
  const { id } = useParams()
  const [movieDetali, setMovieDetali] = useState()
  const [movieVIdeos, setMovieVideos] = useState()
  const [movieSimilar, setMovieSimilar] = useState()
  const [movieCredit, setMovieCredit] = useState()

  useEffect(() => {

    async function getAllData() {
      Promise.all([
        getDetali(id),
        getMovieVideo(id),
        getCredit(id),
        getSimilar(id),

      ])
        .then(([movie, movieVideos, movieCredit, movieSimilar,]) => {
          setMovieDetali(movie)
          setMovieVideos(movieVideos)
          setMovieCredit(movieCredit)
          setMovieSimilar(movieSimilar)

        })
        .catch((error) => console.error(error))

    }
    getAllData()
  }, [])

  return (
    <>
      {movieDetali && (
        <>
          <c.Background imagem={getimages(movieDetali.backdrop_path)} />
          <c.Container>
            <c.Couver>
              <img src={getimages(movieDetali.poster_path)} alt="" />
            </c.Couver>
            <c.Info>
              <h2>{movieDetali.title}</h2>
              <SpanGeneres generes={movieDetali.genres} />
              <p>{movieDetali.overview}</p>
              <div>
                <Credtis credtis={movieCredit} />
              </div>
            </c.Info>
          </c.Container>
          <c.ContainerMovies>
            {movieVIdeos &&
              movieVIdeos.map((videos) => (
                <div key={videos.id}>
                  <h4>{videos.name}</h4>

                  <iframe src={getVideos(videos.key)}
                    title='youtube Videos Player'
                    height='500px'
                    width='100%'
                  >
                  </iframe>
                </div>
              ))}
          </c.ContainerMovies>
    {movieSimilar && <Slider info={movieSimilar} title={'filmes similares'}/>}

        </>
      )}
    </>

  )
}

export default Detalhe
