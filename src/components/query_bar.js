import React, {Component} from 'react';

class QueryBar extends Component {
    constructor(props) {
        super(props);
        // merely component state, not redux state
        this.state = {query: ''};

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({query: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        let query = event.target.value;
        this.setState({query: ''}); // clear the query
    }

    render() {
        return (
            <form 
            onSubmit={this.onFormSubmit}
            className="input-group">
                <input
                    placeholder="your query here"
                    className="form-control"
                    value={this.state.query}
                    onChange={this.onInputChange}
                    type="text"
                    />
                <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit!</button>
                </span>
            </form>
        );
    }
}

export default QueryBar;
