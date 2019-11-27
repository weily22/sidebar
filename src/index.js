import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './route/routes';

ReactDOM.render(<App />, document.getElementById('root'), () => {
  console.log('app节点已挂载')
});
