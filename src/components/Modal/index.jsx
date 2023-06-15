import React from 'react'
import * as c from './styled'
import { useEffect, useState } from 'react'
import Button from '../Button'
import api from '../../services/api'

const Modal = ({ movieId, setShwoModal }) => {
    const [movie, setMovie] = useState()
    useEffect(() => {
        async function getMoveis() {
            const {
                data: { results }
            } = await api.get(`/movie/${movieId}/videos`)

            setMovie(results[0])
            console.log(results[0])
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
                        <iframe src={`https://www.youtube.com/embed/${movie.key}`}
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
