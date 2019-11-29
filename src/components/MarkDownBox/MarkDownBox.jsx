import React, { Component, createRef, createElement } from 'react';
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
      html: false,          // Enable HTML tags in source
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
  render() {
    const { children = '' } = this.props;
    const content = children.toString();
      return (
        <div className="markdown_box"
          dangerouslySetInnerHTML={this.getRawMarkup(content)}>
        </div>
      )
  }
}

export default MarkDownBox;


