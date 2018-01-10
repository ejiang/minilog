import React, { Component } from 'react';
import QueryBar from './query_bar';
import LogContent from './log_content';

export default class App extends Component {
  render() {
    return (
      <div>
        <LogContent />
        <QueryBar />
      </div>
    );
  }
}
