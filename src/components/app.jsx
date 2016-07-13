import React, { Component } from 'react';
import Joke from '../containers/joke';

const App = (props) => {
    return (
        <div>
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">React Norris</a>
                    </div>
                </div>
            </nav>

            <div className="container">
                <Joke />
            </div>
        </div>
    )    
};

export default App;
