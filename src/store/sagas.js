import { takeEvery, put } from "redux-saga/effects";
import { GET_MY_LIST } from "./actionTypes";
import axios from "axios";
import { getListAction } from "./actionCreators";

//generator 函数的使用
function* mySaga() {
  yield takeEvery(GET_MY_LIST, getlist);
}

function* getlist() {
  // 发起请求的代码
  const res = yield axios.get(`http://123.207.32.32:9001/toplist/detail`);
  const action = getListAction(res.data.list);
  yield put(action);
}

export default mySaga;
