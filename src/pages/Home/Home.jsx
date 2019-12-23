import React, { Component } from 'react';
import ReactVersion from './../ReactVersion';
import Article from './../Article';

class Home extends Component {
  state = {
    activePart: 'part4',
    titleArr: [
      { title: 'React生命周期有哪些？', type: 'part1' },
      { title: 'ReactDOM.render 干了什么？', type: 'part2' },
      { title: 'Component 与 PureComponent源码分析', type: 'part3' },
      { title: 'Virtual DOM 模型', type: 'part4' },
    ],
  };
  dateFormat = () => {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    return {
      year: date.getFullYear(),
      md: `${date.getMonth() + 1}/${date.getDate()}`,
      time: `${h < 10 ? '0' + h : h}: ${m < 10 ? '0' + m : m}`
    }
  };
  waiting() {
    alert('待开发')
  }
  JumpTo(where) {
    this.setState({ activePart: where });
  }
  render() {
    const { year, md, time } = this.dateFormat();
    const { titleArr, activePart } = this.state;
    return (
      <div className="source">
        <div className="topNav">
          <div><a href="https://github.com/weily22/sidebar">小米江</a></div>
          <div className="menu">
            {
              titleArr.map(({ title, type }, index) => (
                <span className={activePart === type ? 'active' : ''} key={index} onClick={() => this.JumpTo(type)}>{title}</span>
              ))
            }
          </div>
        </div>
        <div className="content">
          <div className="left_bar">
            <div className="left-stick">
              <div className="doc"><a target="_blank" href="https://reactjs.org/docs/getting-started.html">React 文档</a></div>
              <div className="year through"><span>{year}</span></div>
              <div className="md"><span>{md}</span></div>
              <div className="time"><span>{time}</span></div>
              <div className="react through"><span>React版本</span></div>
              <div className="version"><span>{ReactVersion}</span></div>
              <div className="share through"><span>分享</span></div>
              <div className="share_bar">
                <a href=""><i className="iconfont gh_wechat"/></a>
                <a href=""><i className="iconfont gh_qq"/></a>
                <a href=""><i className="iconfont gh_pengyouquan"/></a>
                <a href=""><i className="iconfont gh_sina"/></a>
              </div>
              <div className="comment through"><span>评论</span></div>
              <div><i className="iconfont gh_comment"/></div>
            </div>
          </div>
          <div className="content_article">
            <Article part={activePart}/>
          </div>
          <div className="heart-beat"/>
        </div>
        <footer>
          <div className="foot_in">
            <textarea className="in_area" placeholder="写下你的评论..."/>
            <i onClick={this.waiting} className="iconfont gh_zan"/>
          </div>
        </footer>
      </div>
    )
  }
}

export default Home;

