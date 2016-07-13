import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJoke } from '../actions/index';

class Joke extends Component {

    componentDidMount() {
        const options = {
            firstName: this.props.firstName || null,
            lastName: this.props.lastName || null,
            limitTo: (this.props.categories) ? `[${this.props.categories}]` : null
        };

        this.props.fetchJoke(options);
    }

    componentWillReceiveProps(nextProps) {
        const options = {
            firstName: nextProps.firstName || null,
            lastName: nextProps.lastName || null,
            limitTo: (nextProps.categories) ? `[${nextProps.categories}]` : null
        };

        //this.props.fetchJoke(options);
    }

    render() {
        const joke = this.props.current;
        console.log(joke);

        if (!joke) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                {joke.joke}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        current: state.joke.current
    }
}

export default connect(mapStateToProps, { fetchJoke })(Joke);
