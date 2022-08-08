import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom"

import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";

function Rotas(){
    return(
        
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/cadastro-usuarios" component={CadastroUsuario}/>  
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas