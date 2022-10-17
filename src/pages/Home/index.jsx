import React from "react";
import { useEffect, useState } from "react";
import api from "../../services/api";
import './Home.css'
import {Link} from 'react-router-dom'

// url da API: movie/now_playing?api_key=52371e1dde50d5341d233e1404f16427

export default props => {
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadFilmes(){
            const response = await api.get('movie/now_playing', {
                params:{
                    api_key:'52371e1dde50d5341d233e1404f16427',
                    language:'pt-BR',
                    page: 1
                }
            })

            //console.log(response.data.results.slice(0, 10))
            setFilmes(response.data.results.slice(0, 10))
            setLoading(false)
        }
        
        loadFilmes()
    }, [])

    if(loading){
        return(
            <div className="Loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return(
        <div className="Container">
            <div className="Lista-filmes">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}