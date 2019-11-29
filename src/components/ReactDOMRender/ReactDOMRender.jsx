import React, { Component } from 'react';
import MarkDownBox from './../MarkDownBox';

class ReactDOMRender extends Component {
  state = {
    value: 'Type some *markdown* here!',
  };
  render() {
    return (
      <div className="react_dom_render">
        <MarkDownBox>
          > Experience real-time editing with Remarkable!
          ```js
          function a() {
            console.log('a')
          }
          ```
        </MarkDownBox>
      </div>
    )
  }
}

export default ReactDOMRender;
