import React from "react";
import {Route, Routes, Router, BrowserRouter} from 'react-router-dom'
import Home from "../Home";
import Filme from "../Filme";
import Erro from "../Erro";
import Favoritos from "../Favoritos";

import Header from "../../components/Header";

export default props => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/filme/:id" element={<Filme/>}/>
                <Route path="*" element={<Erro/>}/>
                <Route path="/favoritos" element={<Favoritos/>} />
            </Routes>
        </BrowserRouter>
    )
}