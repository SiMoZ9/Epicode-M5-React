import React, { Component } from 'react';
import fantasyBooks from "../../data/fantasy.json"
import LatestRelese from '../latestRelease/LatestRelease';

/*
MODO SBAGLIATO
Sto ritorndando un'intera sezione che può essere atomicizzata a livello di componento
Posso spacchettare la card in un altro componente
*/

class Main extends Component {
    render() {
        return (
            <div>
                <LatestRelese fantasyBooks={fantasyBooks}/>
            </div>
        )
    }
}

export default Main