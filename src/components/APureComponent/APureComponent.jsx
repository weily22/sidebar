import React, { Component } from 'react';

const symArr = ['{', '}', '{}'];
class APureComponent extends Component {
  render() {
    return (
        <div className="a_pure_component">
          <h2 className="article_title fz-24">
            <i className="iconfont gh_titleicon fz-18"/>Component 和 PureComponent 源码分析
          </h2>
          <div className="my_table">
            <code>
            <p>function Component(props, context, updater) {symArr[0]}</p>
            <p className="em-2">this.props = props;</p>
            <p className="em-2">this.context = context;</p>
            <p className="em-2">this.refs = emptyObject; <span className="annotate">// emptyObject为{symArr[2]}</span>  </p>
            <p className="em-2">this.updater = updater || ReactNoopUpdateQueue;</p>
            <p>{symArr[1]}</p>
            </code>
            <div className="li">
              <p>Component的属性如上，主要看的是 this.updater = updater || ReactNoopUpdateQueue;</p>
              <i className="iconfont gh_arrow_r" />ReactNoopUpdateQueue
              <p>ReactNoopUpdateQueue是一个对象，它包含了这4个方法：</p>
              <p><span className="code"> isMounted: function (publicInstance) {symArr[0]} return false; {symArr[1]}</span></p>
              <p><span className="code">enqueueForceUpdate: function(publicInstance, callback, callerName) {symArr[0]} warnNoop(publicInstance, 'forceUpdate') }</span></p>
              <p><span className="code">enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {symArr[0]} warnNoop(publicInstance, 'replaceState') }</span></p>
              <p><span className="code">enqueueSetState: function(publicInstance, partialState, callback, callerName) {symArr[0]} warnNoop(publicInstance, 'setState') }</span></p>
              <p>warnNoop是react的警告机制</p>
            </div>
            <code>
              <p>Component.prototype.isReactComponent = {symArr[2]};</p>
            </code>
            <code>
              <p>Component.prototype.setState = function(partialState, callback) {symArr[0]}</p>
              <p className="em-2">invariant( </p>
              <p className="em-3">typeof partialState === 'object' || </p>
              <p className="em-3">typeof partialState === 'function' ||</p>
              <p className="em-3">partialState == null,</p>
              <p className="em-3">'setState(...): takes an object of state variables to update or a ' + </p>
              <p className="em-3">'function which returns an object of state variables.',</p>
              <p className="em-2">);</p>
              <p className="em-2">this.updater.enqueueSetState(this, partialState, callback, 'setState');</p>
              <p>};</p>
            </code>
            <div className="li">invariant是react的警告机制</div>
            <code>
              <p>Component.prototype.forceUpdate = function(callback) {symArr[0]}</p>
              <p className="em-2">this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');</p>
              <p>};</p>
            </code>
            <div className="li">
              <p>PureComponent 继承至 Component</p>
              <p>唯一的区别：PureComponent多设置了一个属性为true, 用于后面不做更新的判断</p>
              <p>pureComponentPrototype.isPureReactComponent = true;</p>
            </div>


          </div>
        </div>
    );
  }
}

export default APureComponent;
