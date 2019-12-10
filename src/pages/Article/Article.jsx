import React, { Component } from 'react';
import LifeCycle from './../../components/LifeCycle';
import ReactDOMRender from './../../components/ReactDOMRender';

class Article extends Component {
  renderPart() {
    const { part = '' } = this.props;
    console.log('part', part)
    switch (part) {
      case 'part1':
        return <LifeCycle />;
      case 'part2':
        return <ReactDOMRender />;
      default:
        return <ReactDOMRender />;
    }
  }
  render() {
    return (
      <div className="mi-article">
        { this.renderPart() }
        {/*<LifeCycle />*/}
        {/*<ReactDOMRender />*/}
      </div>
    )
  }
}

export default Article;
