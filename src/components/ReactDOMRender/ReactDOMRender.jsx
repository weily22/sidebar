import React, { Component } from 'react';
import MarkDownBox from './../MarkDownBox';
import aImg from './../../assets/a.jpg';
import bImg from './../../assets/b.jpg';
import b2Img from './../../assets/b2.jpg';

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
            <p className="th">createLegacyRoot干的事：</p>
            <p>return new ReactDOMBlockingRoot(container, tag, options); <span className="annotate">// 参数：Root, LegacyRoot = 0, undefined</span></p>
            <p className="th">ReactDOMBlockingRoot内部做的事：</p>
            <p>
              <i className="iconfont gh_jiantou_yemian_xiangyou"/>
              this._internalRoot = createRootImpl(container, tag, options);
            </p>
            <p>这里的 <span className="red">_internalRoot</span> 就是最终的fiberRoot</p>
            <p>
              <i className="iconfont gh_jiantou_yemian_xiangyou"/>
              createRootImpl(container, tag, options)
              <span className="annotate">// 参数：Root, LegacyRoot = 0, undefined</span>
            </p>
            <p className="th">createRootImpl做的事：</p>
            <p>1. 判断hydrate <span className="annotate">// 判断条件：options != null && options.hydrate === true;</span></p>
            <p>2. 判断hydrationCallbacks <span className="annotate">// 判断条件：(options != null && options.hydrationOptions) || null</span></p>
            <p>3. 创建root并markContainerAsRoot</p>
            <p>4. return root</p>
            <p>创建root：</p>
            <p>createContainer(containerInfo, tag, hydrate, hydrationCallbacks)<span className="annotate">// 参数：Root, LegacyRoot = 0, false, null</span></p>
            <p>
              <i className="iconfont gh_jiantou_yemian_xiangyou"/>
              return createFiberRoot(containerInfo, tag, hydrate, hydrationCallbacks)
              <span className="annotate">// 参数：Root, LegacyRoot = 0, false, null</span>
            </p>
            <p>createFiberRoot内部做的事：</p>
            <p>①. const root: FiberRoot = new FiberRootNode(containerInfo, tag, hydrate)<span className="annotate">// 参数：Root, LegacyRoot = 0, false</span></p>
            <p>②. const uninitializedFiber = createHostRootFiber(tag); <span className="annotate">// 参数：LegacyRoot = 0</span><br/>
               &nbsp;&nbsp;&nbsp;&nbsp;root.current = uninitializedFiber; <br/>
               &nbsp;&nbsp;&nbsp;&nbsp;uninitializedFiber.stateNode = root;
            </p>
            <p>③ return root; <span className="annotate">// 最终的fiberRoot</span></p>
            <p>再回过来看①中的：<b className="red">FiberRootNode</b></p>
            <p><img className="fiber_root_node_img" src={aImg} alt=""/></p>
            <p>再回过来看②中的: createHostRootFiber(tag) <span className="annotate">// 参数：LegacyRoot = 0</span></p>
            <p>先，let mode; 判断 tag是否等于 ConcurrentRoot = 2，是否等于 BlockingRoot = 1， 否则 mode = NoMode; <span className="annotate">// React定义的NoMode = 0b0000;</span></p>
            <p>然后，return createFiber(tag, pendingProps, key, mode); <span className="annotate">// 参数： React定义的HostRoot = 3，null, null, 0b0000</span></p>
            <p>最后，在createFiber内部： return new FiberNode(tag, pendingProps, key, mode);</p>
            <p>看一下 <b className="red">FiberNode</b>的内部：</p>
            <p><img className="fiber_node_img" src={bImg} alt=""/></p>
            <p><img className="fiber_root_node_img" src={b2Img} alt=""/></p>
            <p>综上：</p>
            <p>最终得到的fiberRoot：</p>
            <p>包含FiberRootNode的所有属性，fiberRoot.current 包含FiberNode的所有属性， fiberRoot.current.stateNode = FiberRootNode</p>
            <p>markContainerAsRoot(hostRoot, node): <span className="annotate">// 参数： fiberRoot.current，Root;</span></p>
            <p><i className="iconfont gh_jiantou_yemian_xiangyou"/>node[internalContainerInstanceKey] = hostRoot;</p>
            <p>const internalContainerInstanceKey = '__reactContainere$' + randomKey;</p>
          </li>
          <li>①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳</li>
          {/*<li></li>*/}
        </ul>
      </div>
    )
  }
}

export default ReactDOMRender;
