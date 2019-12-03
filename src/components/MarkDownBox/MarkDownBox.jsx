import React, { Component, createRef, createElement, Children } from 'react';
import { Remarkable } from 'remarkable';
import HighLG from 'highlight.js';
class MarkDownBox extends Component {
  state = {
    content: 'Type some *markdown* here!'
  };
  componentDidMount () {
  }
  getRawMarkup(content) {
    const md = new Remarkable('full', {
      html: true,          // Enable HTML tags in source
      xhtmlOut: true,
      breaks: false,
      langPrefix: 'language-',
      linkify: true,
      linkTarget: '',
      typographer:  false,
      quotes: '“”‘’',
      highlight: function (str, lang) {
        if (lang && HighLG.getLanguage(lang)) {
          try {
            return HighLG.highlight(lang, str).value;
          } catch (__) {}
        }
        try {
          return HighLG.highlightAuto(str).value;
        } catch (__) {}
        return ''; // use external default escaping
      }
    });

    return {
      __html: md.render(content)
    };
  }

  getChildren() {
    const { children = '' } = this.props;
    console.log('children', this.props.children)
    const childArr = [];
    Children.map(children, function (child, index) {
      if (typeof child === 'object') {
        const { type } = child;
        if (['br'].indexOf(type)) {
          childArr.push(`<${type}/>`)
        }
      } else {
        childArr.push(child)
      }
      console.log('child', child)
      console.log('index', index)
    })

  }
  render() {
    const { children = '' } = this.props;
    const content = children.toString();
    this.getChildren()
      return (
        <div className="markdown_box"
          dangerouslySetInnerHTML={this.getRawMarkup(content)}>
        </div>
      )
  }
}

export default MarkDownBox;


