import React, { Component } from 'react';
import LifeCycle from './../../components/LifeCycle';

class Article extends Component {
  render() {
    return (
      <div className="mi-article">
        <LifeCycle />
        {/*<div className="pagination_right">分页</div>*/}
      </div>
    )
  }
}

export default Article;
