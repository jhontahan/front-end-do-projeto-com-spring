import React from "react";
import { Route, BrowserRouter, Routes, HashRouter } from "react-router-dom"

import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";
import Navbar from "../components/navbar";

function Rotas(){
    return(
        
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/cadastro-usuarios" element={<CadastroUsuario/>}/>  
            </Routes>
        </HashRouter>
    )
}

export default Rotas