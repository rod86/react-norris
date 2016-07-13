import React, { Component, PropTypes } from 'react';

class Form extends Component {

    static propTypes = {
        onGetJoke: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            catogory: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange(event) {
        let change = {};
        change[event.target.id] = event.target.value;
        this.setState(change);
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onGetJoke(this.state);
    }

    render() {
        return (
            <form className="form-inline" id="joke-options" onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="Chuck"
                        value={this.state.firstName}
                        onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Norris"
                        value={this.state.lastName}
                        onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="catogory">Category</label>
                    <select className="form-control" id="catogory" onChange={this.handleChange}>
                        <option value="">All</option>
                        <option value="nerdy">Nerdy</option>
                        <option value="explicit">Explicit</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Get Joke</button>
            </form>
        )
    }
}

export default Form;
