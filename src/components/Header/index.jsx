import React from "react";
import {Link} from 'react-router-dom'
import './header.css'

export default props => {
    return(
        <header>
            <Link className="Logo" to='/'>Prime Flix</Link>
            <Link className="Favoritos" to='/favoritos'>Meus Filmes</Link>
        </header>
    )
}