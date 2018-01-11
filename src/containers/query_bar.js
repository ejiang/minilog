import React, {Component} from 'react';
import {connect} from 'react-redux';
import {queryUpdate} from '../actions/index';
import {bindActionCreators} from 'redux';

class QueryBar extends Component {
    constructor(props) {
        super(props);
        // merely component state, not redux state
        this.state = {query: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({query: event.target.value});
        if (this.props.live) {
            let q = event.target.value;
            this.props.queryUpdate(q);
        }
    }

    onFormSubmit(event) {
        event.preventDefault();

        let q = this.state.query;
        
        this.setState({query: ''}); // clear the component query
        this.props.queryUpdate(q);
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({queryUpdate: queryUpdate},
        dispatch);
}

function mapStateToProps(state) {
    return {
        live: state.live
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryBar);
