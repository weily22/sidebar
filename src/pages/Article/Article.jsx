import React, { Component } from 'react';
import LifeCycle from './../../components/LifeCycle';
import ReactDOMRender from './../../components/ReactDOMRender';
import APureComponent from './../../components/APureComponent';
import VirtualDOM from './../../components/VirtualDOM';

class Article extends Component {
  renderPart() {
    const { part = '' } = this.props;
    console.log('part', part)
    switch (part) {
      case 'part1':
        return <LifeCycle />;
      case 'part2':
        return <ReactDOMRender />;
      case 'part3':
        return <APureComponent />;
      case 'part4':
        return <VirtualDOM />;
      default:
        return <VirtualDOM />;
    }
  }
  render() {
    return (
      <div className="mi-article">
        { this.renderPart() }
      </div>
    )
  }
}

export default Article;
