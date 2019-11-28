import React, { Component } from 'react';
import Markdown from 'react-remarkable';

class ReactDOMRender extends Component {
  render() {
    return (
      <div className="react_dom_render">
        <Markdown>{`
          ## Reasons React is great


          1. Server-side rendering
          2. This totally works:

          <SomeOtherAmazingComponent />

          Pretty neat!
        `}</Markdown>
      </div>
    )
  }
}

export default ReactDOMRender;
