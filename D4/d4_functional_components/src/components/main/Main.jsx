import React, { Component } from 'react';
import fantasyBooks from "../../data/fantasy.json"
import LatestRelese from '../latestRelease/LatestRelease';

const Main = () => {
    return (
        <div>
            <LatestRelese fantasyBooks={fantasyBooks}/>
        </div>
    )
}

export default Main;