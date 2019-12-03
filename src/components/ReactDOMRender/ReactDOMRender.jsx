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
          # this is one comment <br/>
          ## 32
          ==Marked text==
        </MarkDownBox>
      </div>
    )
  }
}

export default ReactDOMRender;
