import React, { Component } from "react";
import axios from "axios";
import { Modal, Button } from "antd";
import From from "./add";
import Edit from "./edit";
import { addlist } from "../../api/api";
export default class guan extends Component {
  state = {
    UserList: [],
    ModalText: "Content of the modal",
    visible: false,
    confirmLoading: false,
    title: "学生管理",
    flag: false,
    userName: "",
    passWord: "",
    addRess: "",
    sea: "",
    pageSize: 0,
    pageCount: 2
  };

  render() {
    let {
      UserList,
      visible,
      confirmLoading,
      title,
      userName,
      sea
    } = this.state;

    return (
      <div id="aaa">
        <div>
          <Button type="primary" onClick={this.showModal}>
            添加列表数据
          </Button>
          <Modal
            title={title}
            visible={visible}
            onOk={this.handleOk}
            confirmLoading={confirmLoading}
            onCancel={this.handleCancel}
          >
            <From
              wrappedComponentRef={this.saveFormRef}
              userName={userName}
            ></From>
          </Modal>
        </div>
        <div className="sea">
          <input
            placeholder="请搜索"
            value={sea}
            onChange={this.ceaChange.bind(this)}
          />
        </div>
        <div className="lists">
          <div className="address">
            <span>序号</span>
            <span>用户名</span>
            <span>密码</span>
            <span>地址</span>
            <span>操作</span>
          </div>
          {UserList.map((item, index) => (
            <div key={index} className="address">
              <span>{item.id}</span>
              <span>{item.username}</span>
              <span>●●●●●●●●</span>
              <span>{item.address}</span>
              <span>
                <b onClick={this.editClick.bind(this)}>编辑</b>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <b onClick={this.delList.bind(this, item.id)}>删除</b>
              </span>
            </div>
          ))}
        </div>
        <button onClick={this.xiaClick.bind(this)}>下一页</button>
        {/* <Edit></Edit>  */}
      </div>
    );
  }

  xiaClick() {
    this.state.pageSize += this.state.pageCount;
    this.getUserList();
  }
  getUserList() {
    const url = `/zsgc/fenye?pageSize=${this.state.pageSize}&pageCount=${this.state.pageCount}`;
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          UserList: [...this.state.UserList, ...res.result]
        });
      });
  }
  ceaChange(e) {
    this.setState({
      sea: e.target.value
    });
    axios
      .post("/zsgc/search", {
        sea: e.target.value
      })
      .then(res => {
        this.setState({
          UserList: res.data.result
        });
      });
  }
  editClick() {
    console.log(this.state.userName);
    this.setState({
      visible: true
    });
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log("Received values of form: ", values);
      this.state.userName = values.username;

      addlist(values).then(res => {
        this.updata();
      });
      form.resetFields();
      this.setState({ visible: false });
    });
    this.setState({
      ModalText: "The modal will be closed after two seconds",
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }, 2000);
  };
  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  handleCancel = () => {
    this.setState({
      visible: false
    });
  };
  delList(id) {
    axios
      .post("/zsgc/delUser", {
        id
      })
      .then(res => {
        if (res.data.code == 1) {
          this.updata();
        }
      });
  }

  updata() {
    axios.get("/zsgc/getUserlist").then(res => {
      this.setState({
        UserList: res.data.result
      });
    });
  }

  componentDidMount() {
    this.updata();
    this.getUserList();
  }
}
