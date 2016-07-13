import React, { Component } from 'react';

const JokeView = ({ joke }) => {
    return (
        <div className="jumbotron">
            {(joke) ? joke.joke : ''}
        </div>
    )
};

export default JokeView;
