import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify'

import './Favoritos.css'

export default props => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const minhaLista = JSON.parse(localStorage.getItem('@PrimeFlix')) || []
        setFilmes(minhaLista)
    }, [])

    function ExcluirFav(id){
        let filtered = filmes.filter((filme) => {
            return (filme.id !== id)
        })
        localStorage.setItem('@PrimeFlix', JSON.stringify(filtered))
        setFilmes(filtered)
        toast.success('Filme excluido com sucesso')
    }

    return (
        <div className="Favoritos">
            <h1>Meus Filmes</h1>

            {filmes.length === 0 && <span>Você não possui filmes salvos :(</span>}

            <ul>
                {filmes.map((filme) => {

                    return (
                        <li key={filme.id}>
                            <span>{filme.title}</span>
                            <div>
                                <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                                <button onClick={() => ExcluirFav(filme.id)}>Excluir</button>
                            </div>
                        </li>
                    )

                })}
            </ul>
        </div>
    )
}