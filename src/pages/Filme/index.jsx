import React, { StrictMode } from "react";
import { Component } from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import api from '../../services/api'

import './Filme-info.css'

export default props => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState({})

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: '52371e1dde50d5341d233e1404f16427',
                    language: 'pt-BR'
                }
            })
                .then((response) => {
                    setFilme(response.data)
                    setLoading(false)
                })

                .catch(() => {
                    toast.warn('Filme não encontrado')
                    navigate("/", { replace:true })
                    return;
                })


        }

        loadFilme()

        return () => {
            
        }
    }, [navigate, id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem('@PrimeFlix')

        let filmesSalvos = JSON.parse(minhaLista) || []
        let hasFilm = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id)

        if(hasFilm){
            toast.info('Esse filme já está na lista!')
            return
        }

        filmesSalvos.push(filme)
        localStorage.setItem('@PrimeFlix', JSON.stringify(filmesSalvos))
        toast.success('Filme salvo com sucesso')
    }

    if (loading) {
        return (
            <div className="Filme-info">
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return (
        <div className="Filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {Number(filme.vote_average).toFixed(1)} /10</strong>

            <div className="Area-buttons">
                <button onClick={() => salvarFilme()}>Salvar</button>
                <button><a target={'blank'} rel={'external'} href={`https://youtube.com/results?search_query=${filme.title} trailer`}>Trailer</a></button>
            </div>
        </div>
    )
}