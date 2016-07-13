import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJoke } from '../actions/index';
import Form from '../components/form';
import JokeView from '../components/JokeView';

class Joke extends Component {

    getJoke(data) {
        const params = {
            firstName: data.firstName || null,
            lastName: data.lastName || null,
            limitTo: (data.category) ? `[${data.category}]` : null
        };

        this.props.fetchJoke(params);
    }

    render() {
        return (
            <div className="joke-component">
                <JokeView joke={this.props.currentJoke} />
                <div className="row">
                    <div className="col-md-12">
                        <Form onGetJoke={this.getJoke.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentJoke: state.joke.currentJoke
    }
}

export default connect(mapStateToProps, { fetchJoke })(Joke);
