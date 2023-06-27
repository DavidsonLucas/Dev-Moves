import api from "./api";

// começo da apis de filmes

export async function getMovies (){
    const {
        data: { results }
      } = await api.get('/movie/popular')

      return results[0]
}

export async function getMovie (){
    const {
        data: { results }
      } = await api.get('/movie/popular')

      return results
}

export async function getTopMoveis (){
    const {
        data: { results }
      } = await api.get('/movie/top_rated')

      return results
}

export async function getDescover() {
    const {
      data: { results }
    } = await api.get('/discover/movie')
  
    return results
  }

  export async function getMovieForComing (){
    const {
        data: { results }
      } = await api.get('/movie/upcoming')

      return results
}

//   final de api de filmes

// inicil da api de seres

export async function getTopSeries (){
    const {
        data: { results }
      } = await api.get('/tv/top_rated')

      return results
}

export async function getPopularSeries (){
    const {
        data: { results }
      } = await api.get('/tv/popular')

      return results
}

export async function getPerson (){
    const {
        data: { results }
      } = await api.get('/person/popular')

      return results
}

// final de api series 

// Busca os filmes triler pelo ID
export async function getMovieVideos(movieId){
    const {
        data: { results }
    } = await api.get(`/movie/${movieId}/videos`)

    return results[0]

}
// pasta detalhe
export async function getMovieVideo(movieId){
    const {
        data: { results }
    } = await api.get(`/movie/${movieId}/videos`)

    return results

}

export async function getCredit(movieId){
    const  { data : {cast}
        } = await api.get(`/movie/${movieId}/credits`)

    return cast

}

export async function getSimilar(movieId){
    const {
        data: { results }
    } = await api.get(`/movie/${movieId}/similar`)

    return results

}

export async function getDetali(movieId){
    const { data }= await api.get(`/movie/${movieId}`)

    return data

}

