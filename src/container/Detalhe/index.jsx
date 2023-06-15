import React from 'react'
import { useState, useEffect } from 'react'
import api from '../../services/api'
import Button_Menor from '../../components/Button-Menor'
import Home from '../Home'
import * as c from './styled'
import Quadrado from '../../components/Qadra-Dos-Altores'

const Detalhe = () => {
    const [movie, setMovie] = useState()
    useEffect(() => {
        async function getMoveis() {
            const {
                data: { results }
            } = await api.get('/movie/popular')

            setMovie(results[0])

        }
        getMoveis()
    }, [])

    return (
        <>
            {movie && (
                <>
                    <c.Background imagem={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}> </c.Background>

                    <c.Background0>
                        <c.Container >
                            <c.Publi><img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" /></c.Publi>
                            <c.Info>
                                <h1>{movie.title}</h1>
                                <c.Info_Button>
                                    <Button_Menor>iqwgdq</Button_Menor>
                                    <Button_Menor>ad</Button_Menor>
                                    <Button_Menor>jkbad</Button_Menor>
                                    <Button_Menor>kbd</Button_Menor>
                                </c.Info_Button>
                                <p>{movie.overview} </p>
                                <c.Info_Button>
                                    <Quadrado>asks</Quadrado>
                                    <Quadrado>kasd</Quadrado>
                                    <Quadrado>nkas</Quadrado>
                                    <Quadrado>knas</Quadrado>
                                </c.Info_Button>
                            </c.Info>

                        </c.Container>
                    </c.Background0>
                </>
            )}

        </>

    )
}

export default Detalhe
