import React, { Component } from 'react';
import marked from 'marked';
import rawText from './rawText';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {rawText, markdown: ''};
    this.handleInput = this.handleInput.bind(this);
  }

  createMarkup() {
    return {
      __html: marked(this.state.rawText)
    };
  }

  handleInput(event) {
    this.setState({rawText: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <h1 className="page-title"><span># Markdown Previewer</span></h1>
        <div className="flex-container">
          <div className="full-page left">
            <textarea onChange={this.handleInput} value={this.state.rawText}>
            </textarea>
          </div>
          <div dangerouslySetInnerHTML={this.createMarkup()} className="full-page right">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
