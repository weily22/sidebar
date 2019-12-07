import React, { Component } from 'react';
import MarkDownBox from './../MarkDownBox';

class ReactDOMRender extends Component {
  state = {
    value: 'Type some *markdown* here!',
  };
  render() {
    return (
      <div className="react_dom_render">
        <h2>ReactDOM.render 干了什么</h2>
        <MarkDownBox>
          > *来源于ReactDOMLegacy.js*<br/>
          `render(element, container, callback) ` <br/>
        </MarkDownBox>
        <p>主要目的：创建ReactRoot</p>
        <p>调用render 返回一个legacyRenderSubtreeIntoContainer</p>
      </div>
    )
  }
}

export default ReactDOMRender;
