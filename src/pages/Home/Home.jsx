import React, { Component } from 'react';
import ReactVersion from './../ReactVersion';
import Article from './../Article';

class Home extends Component {
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
  render() {
    const { year, md, time } = this.dateFormat();
    return (
      <div className="sidebar">
        <div className="topNav">
          <a href="">小米江</a>
        </div>
        <div className="content">
          <div className="left-stick">
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
          <div className="content_article">
            <Article/>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;

