import React, { Component } from 'react';
import Form from './form';
import Joke from '../containers/joke';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { form: {} };
    }

    getJoke(data) {
        this.setState({ form: data });
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-static-top">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">React Joke</a>
                        </div>
                    </div>
                </nav>

                <div className="container">
                    <div className="jumbotron">
                        <Joke
                            firstName={this.state.form.firstName}
                            lastName={this.state.form.lastName}
                            categories={this.state.form.category}
                            />
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Form onGetJoke={this.getJoke.bind(this)} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
