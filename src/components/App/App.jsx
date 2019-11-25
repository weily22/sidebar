import React, { Component } from 'react';

class App extends Component {
  render() {
    return (<div className="app-mi">{this.props.children}</div>)
  }
}

export default App;
