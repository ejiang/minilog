import React, { Component } from 'react';
import QueryBar from '../containers/query_bar';
import LogContent from '../containers/log_content';
import SampleButtons from '../containers/sample_buttons';

export default class App extends Component {
  render() {
    return (
      <div>
        <LogContent />
        <QueryBar />
        <SampleButtons />
      </div>
    );
  }
}
