import axios from "axios";
const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    params:{
        api_key:'23ed6582f10e72d44bceafa44c698596',
        language:'pt-BR',
        page: 1,
    }


})

export default api