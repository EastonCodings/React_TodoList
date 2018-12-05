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
            list: []
            // list: ['1', '2', '3']
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
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        // 在 ES5 里面，数组有一个 map 方法，通过 map 方法，对 list 进行循环
                        // 方法里面，接收一个回调，回调函数接收两个参数，一个是具体每一项的内容，一个是每一项对应的下标
                        this.state.list.map((item, index) => {
                            // 在 React 里面，做循环渲染的时候，需要给渲染出的每一项，增加一个 key 值
                            // key 值是唯一标识符，用 index 做 key 值，是一个不好的习惯
                            return (
                                <li
                                    key={index}
                                    onClick={this.handleItemDelete.bind(this, index)}
                                >
                                    {item}
                                </li>
                            )
                        })
                    }
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

    // 提交(新增)
    handleBtnClick() {
        this.setState({
            // 在 ES6 里面，...是一个展开运算符
            // 写于此的作用，将之前数组里面的内容，全部展开，生成一个新的数组

            // input 框里面的内容，和之前 list 里面的内容，相当于做一个合并，生成一个新的数组
            // 再将新的数组，赋值给 list 数据项，对数据项里面的内容进行变更
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleItemDelete(index){
        // console.log(index);

        // immutable 特性
        // state 不允许我们直接对它做任何的改变  this.state.list.splice(index, 1);
        // 不利于今后项目的性能优化
        // 拷贝一个副本，修改副本

        // [...this.state.list], 也相当于一份拷贝
        const list = [...this.state.list];
        // 删除一个，下标为 index
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
}

export default TodoList;