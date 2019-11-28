import React, { Component } from 'react';
import LifeCycle from './../../components/LifeCycle';
import ReactDOMRender from './../../components/ReactDOMRender';

class Article extends Component {
  render() {
    return (
      <div className="mi-article">
        {/*<LifeCycle />*/}
        <ReactDOMRender />
      </div>
    )
  }
}

export default Article;
