import React, { PureComponent } from "react";
import "antd/dist/antd.css";
import store from "./store";
import { changeInputAction, addItemAction, deleteItemAction, getTodoListAction } from "./store/actionCreators";
import TodoListUl from "./TodoListUl";

export class TodoList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = store.getState();
    // 绑定this
    this.storeChange = this.storeChange.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
    // this.deleteltem = this.deleteltem.bind(this);
    // 订阅store

    store.subscribe(this.storeChange);
    // store.subscribe((e) => this.storeChange);
  }

  render() {
    return <TodoListUl inputValue={this.state.inputValue} changeInputValue={this.changeInputValue} clickBtn={this.clickBtn} list={this.state.list} deleteltem={this.deleteltem}></TodoListUl>;
  }
  componentDidMount() {
    // 发起请求
    // axios.get(`http://123.207.32.32:9001/toplist/detail`).then((res) => {
    //   console.log(res.data);
    // });

    const action = getTodoListAction();
    store.dispatch(action); // 请求数据
  }

  // 表达值的改变
  changeInputValue(e) {
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }
  // 订阅store函数
  storeChange() {
    this.setState(store.getState());
  }
  // 点击按钮
  clickBtn() {
    const action = addItemAction();
    store.dispatch(action);
  }
  // 列表点击的时候删除
  deleteltem(index) {
    console.log(index);
    const action = deleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;
