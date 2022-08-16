import React from "react";
import { Route, Routes, HashRouter, Navigate } from "react-router-dom"

import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";
import Navbar from "../components/navbar";
import Home from "../views/home";
import ConsultaLancamentos from "../views/lancamentos/consulta-lancamentos";
// import CadastroLancamentos from "../views/lancamentos/cadastro-lancamentos";
import RotasId from "../componentsFuncionais/rotas";
import CadastroLancamentos from "../views/lancamentos/cadastro-lancamentos";

import { AuthConsumer } from "./provedorAutenticacao";


const RotasAutenticadas = ({children, redirectTo, isUsuarioAutenticado}) =>{
    return(
        isUsuarioAutenticado ? children : <Navigate to={redirectTo}/> 
    )

}

function Rotas(props){
    return(
        
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/cadastro-usuarios" element={<CadastroUsuario/>}/>  

                {/* <RotasAutenticadas path="/" element={<Home />}/> */}
                <Route path="/" 
                       element={<RotasAutenticadas redirectTo="/login" isUsuarioAutenticado={props.isUsuarioAutenticado}> 
                            <Home/>
                        </RotasAutenticadas>}>
                </Route>
                <Route path="/consulta-lancamentos" 
                       element={<RotasAutenticadas redirectTo="/login" isUsuarioAutenticado={props.isUsuarioAutenticado}>
                            <ConsultaLancamentos />
                        </RotasAutenticadas>}>
                </Route>
                
                <Route path="/cadastro-lancamentos" 
                       element={<RotasAutenticadas redirectTo="/login" isUsuarioAutenticado={props.isUsuarioAutenticado}>
                            <CadastroLancamentos />
                        </RotasAutenticadas>}>
                </Route>

                {/* <Route path="/cadastro-lancamentos/:id" element={<RotasId/>}/> */}

                <Route path="/cadastro-lancamentos/:id" 
                       element={<RotasAutenticadas redirectTo="/login" isUsuarioAutenticado={props.isUsuarioAutenticado}>
                            <RotasId />
                        </RotasAutenticadas>}>
                </Route>
                
            </Routes>
        </HashRouter>
    )
}

const RotaAuthProvedor = () => (
    <AuthConsumer>
        {(context)=> (<Rotas isUsuarioAutenticado={context.isAutenticado}/>)}
    </AuthConsumer>
)

export default RotaAuthProvedor