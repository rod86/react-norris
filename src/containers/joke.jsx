import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJoke } from '../actions/index';

class Joke extends Component {

    componentWillMount() {
        const options = {
            firstName: this.props.firstName || null,
            lastName: this.props.lastName || null,
            limitTo: (this.props.categories) ? `[${this.props.categories}]` : null
        };

        this.props.fetchJoke(options);
    }

    render() {
        const { currentJoke } = this.props;

        if (!currentJoke) {
            return <div>Loading...</div>;
        }

        return (
            <div className="joke">
                {currentJoke.joke}
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
