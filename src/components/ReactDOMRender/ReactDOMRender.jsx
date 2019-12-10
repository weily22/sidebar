import React, { Component } from 'react';
import MarkDownBox from './../MarkDownBox';

class ReactDOMRender extends Component {
  state = {
    value: 'Type some *markdown* here!',
  };
  render() {
    return (
      <div className="react_dom_render">
        <h2>ReactDOM.render 干了什么?</h2>
        <code>
          <b>例如:</b> ReactDOM.render(&lt;App />, document.getElementById('root'))
        </code>
        <p>下面用 <span style={{color: 'red'}}>Root</span> 代表document.getElementById('root')</p>
        <ul className="my_table">
          <li>
            render(element, container, callback) <span className="annotate">//参数：(&lt;App />, Root, undefined)</span>
            <p className="th">这个函数干的事:</p>
            <p>return legacyRenderSubtreeIntoContainer()</p>
          </li>
          <li>
            <i className="iconfont gh_arrow_r" />
            legacyRenderSubtreeIntoContainer(parentComponent, children, container, forceHydrate, callback)
            <span className="annotate">//参数：null, (&lt;App />, Root, false, undefined)</span>
            <p className="th">这个函数干了两件事：(针对于初始化的时候，!root的条件下)</p>
            <p>1. 创建fiberRoot</p>
            <p>2. return getPublicRootInstance(fiberRoot);</p>
          </li>
          <li>
            <i className="iconfont gh_arrow_r" />
            创建fiberRoot
            <p className="th">这个过程中，</p>
            <p>首先设置一个变量root = <b>container</b>._reactRootContainer = legacyCreateRootFromDOMContainer()
              <span className="annotate">// container即上面的 Root</span>
            </p>
            <p>接着 fiberRoot = root._internalRoot;</p>
            <p>那么重点就在于legacyCreateRootFromDOMContainer()这个函数干了什么</p>
            <p>
              <i className="iconfont gh_jiantou_yemian_xiangyou"/>
              legacyCreateRootFromDOMContainer(container, forceHydrate) <span className="annotate">// 参数：Root, false</span></p>
            <p className="th">legacyCreateRootFromDOMContainer 这个函数呢干了两件事</p>
            <p>1. 判断shouldHydrate <span className="annotate">// 是否是服务端渲染 ，本节不做详细讲解</span></p>
            <p>2. return createLegacyRoot() </p>
            <p>
              <i className="iconfont gh_jiantou_yemian_xiangyou"/>
              createLegacyRoot(container, options?) <span className="annotate">// 参数：Root, undefined</span>
            </p>
            <p className="th">createLegacyRoot干的事</p>
            <p>return new ReactDOMBlockingRoot(container, LegacyRoot, options);</p>
          </li>
          {/*<li></li>*/}
          {/*<li></li>*/}
        </ul>
      </div>
    )
  }
}

export default ReactDOMRender;
