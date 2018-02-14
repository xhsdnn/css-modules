import React from 'react';
import ReactDOM from 'react-dom';
import Cssmodules from '../cssmodules/index.jsx';
import homeStyle from './home.less'

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="logo-group">
          <img src="static/images/logo.svg" alt="" />
          <span className="split">&</span>
          <img src="static/images/css-modules-logo.png" alt="" />
        </div>
        <Cssmodules />
        <h1>参考资料</h1>
        <p>
          <a href="https://reactjs.org/">React官网</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://webpack.js.org/">Webpack官网</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://github.com/css-modules/css-modules">CSS Modules官方文档</a>
        </p>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById('root'));