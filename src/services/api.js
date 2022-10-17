import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

// Base da url: https://api.themoviedb.org/3/
// url da API: /movie/now_playing?api_key=52371e1dde50d5341d233e1404f16427

export default api