import React from 'react';
import ReactDOM from 'react-dom';
// 整体引入
import modules from './modules.css'
// 按需引入
import {color} from './modules.css'

// 引入less文件
import lessModules from './less-modules.less'
import sassModules from './sass-modules.scss'

class Cssmodules extends React.Component {
  render() {
    return (
      <div>
        <h1>基本用法</h1>
        <p className={modules.color}>这是整体引入的红色文字</p>
        <p className={color}>这是通过按需引入红色文字</p>
        <hr/>

        <h1>显示的通过:local定义</h1>
        <p className={modules['local-color']}>这是通过:local定义的蓝色文字</p>
        <hr/>

        <h1>通过:global定义</h1>
        <p className="global-color">这是通过:global定义的绿色文字</p>
        <hr/>

        <h1>组合——Composition</h1>
        <p className={modules.composes}>这通过composes设置的:local的背景颜色、字体类型和字体大小以及:global的字体粗细</p>
        <hr/>

        <h1>通过less定义</h1>
        <p className="less-color">这是通过less设置的:global字体颜色为粉色</p>
        <p className={lessModules['less-font-size']}>这是通过less设置的:local字体大小为20px</p>
        <hr/>

        <h1>通过sass定义</h1>
        <p className="sass-color">这是通过sass设置的:global字体颜色为紫色</p>
        <p className={sassModules['sass-font-size']}>这是通过sass设置的:local字体大小为24px</p>
      </div>
    )
  }
}
export default Cssmodules;
