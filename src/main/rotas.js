import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom"

import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";
import Navbar from "../components/navbar";
import Home from "../views/home";

function Rotas(){
    return(
        
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/cadastro-usuarios" element={<CadastroUsuario/>}/>  
            </Routes>
        </HashRouter>
    )
}

export default Rotas