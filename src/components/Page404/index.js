import React from 'react';
import { Button } from '@material-ui/core';


function PageNotFoud() {

    return (
        <div align='center' width='100%'>
            <img src='404.png' width='80%'/>
            <h1>Página não encontrada</h1>
            <Button href="/" color="primary" type="submit">Voltar</Button>
        </div>


    );
}
export default PageNotFoud;