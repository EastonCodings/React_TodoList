import React, { Component } from 'react';

class TodoItem extends Component {

    constructor(props){
        super(props);
        // handleClick 里面的 this，永远指向啦 TodoItem
        // 在复杂的组件开发之中，它会节约一些性能
        this.handleClick = this.handleClick.bind(this);
    }

    // React 当中，组件是一种树形的结构
    render(){
        // 父组件向子组件传递内容，通过属性的形式来传递，子组件通过 this.props.XX 来接收对应的属性及内容
        // 既可以传递数据，又可以传递方法
        return (
            // <div onClick={this.handleClick.bind(this)}>
            // 不推荐这么写，这么写在功能上是没问题的，但在后续可能会有代码性能上的损耗
            <div onClick={this.handleClick}>
                    {this.props.content}
            </div>
        )
    }

    // 删除
    handleClick(){
        this.props.deleteItem(this.props.index);
    }
}

export default TodoItem;