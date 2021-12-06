import React from "react";
import { Input, Button, List } from "antd";

// 使用无状态组件来实现UI组件的展示

const TodoListUl = (props) => {
  return (
    <div style={{ margin: "10px" }}>
      <div>
        <Input value={props.inputValue} onChange={(e) => props.changeInputValue(e)} placeholder={props.inputValue} style={{ width: "250px", marginRight: "10px" }} />
        <Button type="primary" onClick={props.clickBtn}>
          增加
        </Button>
      </div>
      <div style={{ margin: "10px", width: "300px" }}>
        <List bordered dataSource={props.list} renderItem={(item, index) => <List.Item onClick={() => props.deleteltem(index)}>{item.description}</List.Item>}></List>
      </div>
    </div>
  );
};

export default TodoListUl;

// export default class TodoListUl extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div style={{ margin: "10px" }}>
//         <div>
//           <Input value={this.props.inputValue} onChange={(e) => this.props.changeInputValue(e)} placeholder={this.props.inputValue} style={{ width: "250px", marginRight: "10px" }} />
//           <Button type="primary" onClick={this.props.clickBtn}>
//             增加
//           </Button>
//         </div>
//         <div style={{ margin: "10px", width: "300px" }}>
//           <List bordered dataSource={this.props.list} renderItem={(item, index) => <List.Item onClick={() => this.props.deleteltem(index)}>{item}</List.Item>}></List>
//         </div>
//       </div>
//     );
//   }
// }
