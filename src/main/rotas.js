import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom"

import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";
import Navbar from "../components/navbar";
import Home from "../views/home";
import ConsultaLancamentos from "../views/lancamentos/consulta-lancamentos";
import CadastroLancamentos from "../views/lancamentos/cadastro-lancamentos";

function Rotas(){
    return(
        
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/cadastro-usuarios" element={<CadastroUsuario/>}/>  
                <Route path="/consulta-lancamentos" element={<ConsultaLancamentos/>}/>
                <Route path="/cadastro-lancamentos" element={<CadastroLancamentos/>}/>
            </Routes>
        </HashRouter>
    )
}

export default Rotas