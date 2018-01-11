import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeLiveness} from '../actions/index';
import {bindActionCreators} from 'redux';

class LiveCheckbox extends Component {
    constructor(props) {
        super(props);

        this.state = {isChecked: false};
        this.onCheckChange = this.onCheckChange.bind(this);
    }

    onCheckChange(event) {
        this.setState({isChecked: event.target.checked});
        this.props.changeLiveness(event.target.checked); // b/c state change is yet to occur
    }

    render() {
        return (
            <form>
                Live query: 
                <input type="checkbox" checked={this.state.isChecked} onChange={this.onCheckChange}/>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeLiveness: changeLiveness
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(LiveCheckbox);
