import React from 'react'
import * as c from './styled'
import { useEffect, useState } from 'react'
import {  getMovieVideos } from '../../services/getData'
import { getVideos } from '../../utils/getVideos'

const Modal = ({ movieId, setShwoModal }) => {
    const [movie, setMovie] = useState()
    useEffect(() => {
        async function getMoveis() {
         setMovie(await getMovieVideos(movieId))
        }
        getMoveis()
      
    }, [])

    const flec = () => {
        const modal = document.getElementById("moda")
        modal.style.display = 'none'
    }

    return (
        <c.Container id='moda' onClick={()=> setShwoModal(false)}>

            {movie && (
                
                    <c.Modal >
                        <c.Fechar onClick={flec}/>
                        <iframe src={getVideos( movie.key)}
                        title='youtube Videos Player'
                        height='500px'
                        width='100%' 
                        SameSite='none'></iframe>
                    </c.Modal>
            
            )}
        </c.Container>
    )
}

export default Modal
