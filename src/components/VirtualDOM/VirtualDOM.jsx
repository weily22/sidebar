import React, { Component } from 'react';

class VirtualDOM extends Component {
  render() {
    return (
      <div className="virtual_dom">
        <h2 className="article_title"><i className="iconfont gh_titleicon fz-18"/> Virtual DOM 模型</h2>
        <div className="con">
          <div className="concept">
            Virtual DOM 是一种编程概念。在这个概念里， UI 以一种理想化的，或者说“虚拟的”表现形式被保存于内存中，并通过如 ReactDOM 等类库使之与“真实的” DOM 同步。这一过程叫做协调。
          </div>
          <p>
            Virtual DOM 之于 React, 就好比一个虚拟空间, React 的所有工作几乎都是基于 Virtual DOM 完成的。
          </p>
          <p>Virtual DOM 中的节点称为 ReactNode, 它分为5种类型：</p>
          <code>React$Element&lt;any&gt;、 ReactPortal、ReactText、ReactFragment、ReactProvider&lt;any&gt;、ReactConsumer&lt;any&gt;</code>
        </div>
      </div>
    )
  }
}

export default VirtualDOM;
