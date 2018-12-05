import React, { Component, Fragment } from 'react';

// React 响应式设计思想
class TodoList extends Component {

    // 构造函数(固定写法)
    constructor(props) {
        // super 指的是父类 Component
        // 调用一次父类的构造函数
        super(props);
        // 负责存储组件里面的数据
        this.state = {
            // 存放的是input框里面的内容
            inputValue: '',
            // 数组存储列表中的每一项
            list:[]
        }
    }

    render(){
        return(
            // JSX 必须将标签整体包括
            // Fragment，React 16 版本中，提供使用的占位符，来替代最外层的 div
            <Fragment>
                <div>
                    <input
                        // JSX 里面，{} 对 js 表达式，进行包裹
                        value={this.state.inputValue}
                        // bind(this) this 指的是组件，组件的 this 去改变函数的 this 的指向
                        // 事件绑定的时候，需要通过 bind(this) 对函数的作用域进行变更
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button>提交</button>
                </div>
                <ul>
                    <li>学英语</li>
                    <li>Learning React</li>
                </ul>
            </Fragment>
        )
    }

    // e: event 对象
    handleInputChange(e) {
        // 改变数据项里面的内容，不能直接去改它，需要通过 setState 函数，
        // 向里面传入对象的形式，来对 State 里面具体的数据项进行变更
        this.setState({
            // 事件对象 target 属性
            // input 框对应的 Dom 节点
            // console.log(e.target.value);
            inputValue: e.target.value
        })
    }
}

export default TodoList;