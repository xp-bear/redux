import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from "./actionTypes";
import axios from "axios";

// 创建多个actions
export const changeInputAction = (value) => ({ type: CHANGE_INPUT, value });
export const addItemAction = () => ({ type: ADD_ITEM });
export const deleteItemAction = (index) => ({ type: DELETE_ITEM, index });
export const getListAction = (data) => ({ type: GET_LIST, data });

// redux-thunk的里面编写请求的后台数据 (里面可以返回是一个函数)
export const getTodoListAction = () => {
  return (dispatch) => {
    axios.get(`http://123.207.32.32:9001/toplist/detail`).then((res) => {
      const data = res.data.list;
      const action = getListAction(data);
      dispatch(action);
      //   console.log(data);
    });
  };
};
