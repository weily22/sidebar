import React, { Component } from 'react';

class LifeCycle extends Component {
  render() {
    return (
      <div className="life_cycle">
        <h2 className="article_title fz-24">
          <i className="iconfont gh_titleicon fz-18"/>React生命周期有哪些?
        </h2>
        <div style={{marginTop: '50px'}}/>
        <p className="fz-18">15生命周期:</p>
        <div className="cycle_15">
          <div>
            <p className="t">初始化阶段</p>
            <div className="box">constructor</div>
            <div className="box">getDefaultProps</div>
            <div className="box">getInitialState</div>
          </div>
          <div>
            <p className="t">挂载阶段</p>
            <div className="box">componentWillMount</div>
            <div className="box">render</div>
            <div className="box">componentDidMount</div>
          </div>
          <div>
            <p className="t">更新阶段</p>
            <div className="both_div">
              <div className="left">
                <div className="t">props</div>
                <div className="box">componentWillReceiveProps</div>
                <div className="box">shouldComponentUpdate</div>
                <div className="box">componentWillUpdate</div>
                <div className="box">render</div>
                <div className="box">componentDidUpdate</div>
              </div>
              <div className="right">
                <div className="t">state</div>
                <div className="ph"/>
                <div className="box">shouldComponentUpdate</div>
                <div className="box">componentWillUpdate</div>
                <div className="box">render</div>
                <div className="box">componentDidUpdate</div>
              </div>
            </div>
          </div>
          <div>
            <p className="t">卸载阶段</p>
            <div className="box">componentWillUnmount</div>
          </div>
        </div>
        <div style={{marginTop: '50px'}}/>
        <p className="fz-18">16生命周期:</p>
        <div className="cycle_16">
          <div>
            <p className="t">初始化阶段</p>
            <div className="box">constructor</div>
            <div className="box">getDefaultProps</div>
            <div className="box">getInitialState</div>
          </div>
          <div>
            <p className="t">挂载阶段</p>
            <div className="box">getDerivedStateFromProps</div>
            <div className="box">render</div>
            <div className="box">componentDidMount</div>
          </div>
          <div>
            <p className="t">更新阶段</p>
            <div className="box">getDerivedStateFromProps</div>
            <div className="box">shouldComponentUpdate</div>
            <div className="box">render</div>
            <div className="box">getSnapshotBeforeUpdate</div>
            <div className="box">componentDidUpdate</div>
          </div>
          <div>
            <p className="t">卸载阶段</p>
            <div className="box">componentWillUnmount</div>
          </div>
          <div>
            <p className="t">错误处理</p>
            <div className="box">componentDidCatch</div>
          </div>
        </div>
      </div>
    )
  }
}

export default LifeCycle;

