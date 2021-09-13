//Importar as dependências
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
//Importar as páginas
import Welcome from '../Welcome/index';
import Home from '../Home/index';
import Login from '../Login/index';
import Shop from '../Contas/index';
import PageNotFoud from '../Page404/index';
function Routes() {
    return (
        <BrowserRouter variant="contained">
       <div class='container-fluid'>
                <Switch>
                    <Route path="/" exact component={Welcome} />
                    <Route path="/Home" exact component={Home} />
                    <Route path="/Login" exact component={Login} />
                    <Route path="/shop" component={Shop} />
                    <Route path="*" component={PageNotFoud}/>
                </Switch>
                </div>
        </BrowserRouter>
    );
}
export default Routes;