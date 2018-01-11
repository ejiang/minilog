import React, {Component} from 'react';
import { connect } from 'react-redux';
import { apache_log } from './sample_buttons';

class LogContent extends Component {
    constructor(props) {
        super(props);
    }

    renderContent() {
        // requires the log and the query

        let term = this.props.currentQuery;
        let al = this.props.logContent;
        // the default
        if (!term) {
            return al;
        }
        let lines = al.split('\n');
        let filtered = lines.filter((line) => {
            return line.indexOf(term) >= 0;
        });
        let formatted = filtered.map((line) => {
            let spl = line.split(term);
            let res = [];
            res.push(spl[0]);
            spl.shift();
            while (spl.length != 0) {
                res.push(<span className="highlight">{term}</span>);
                res.push(spl.shift());
            }
            res.push('\n');
            return res;
        });
    
        // add the slices together
        return formatted;
    }

    render() {
        let sty = {'height': '400px', 'overflowY': 'scroll', 'overflowX': 'scroll',
                    'fontFamily': 'monospace', 'whiteSpace': 'pre'};

        return <div style={sty}>
            {this.renderContent()}
        </div>
    }
}

function mapStateToProps(state) {
    return {
        logContent: state.logContent,
        currentQuery: state.currentQuery
    };
}

export default connect(mapStateToProps)(LogContent);
