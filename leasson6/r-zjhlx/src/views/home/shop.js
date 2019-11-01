import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import Addform from './add'
import { addlist } from '../../api/home'
export default class shop extends Component {
  state = {
    visible: false,
    confirmLoading: false,
    title: '添加商品'
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    const { form } = this.formRef.props;

    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      ////////////////////////////////////////////
      /////
      addlist(values).then(res => {      /////
        console.log(res)               /////
      })                               /////
      /////
      ////////////////////////////////////////////
      form.resetFields();
      this.setState({ visible: false });
    });

    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };
  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };
  render() {
    const { visible, confirmLoading, title } = this.state;
    return (
      <div>
        这是商品管理页面
                <div>
          <Button type="primary" onClick={this.showModal}>
            添加商品
        </Button>
          <Modal
            title={title}
            visible={visible}
            onOk={this.handleOk}
            confirmLoading={confirmLoading}
            onCancel={this.handleCancel}>
            <Addform wrappedComponentRef={this.saveFormRef}></Addform>
          </Modal>
        </div>
      </div>
    )
  }
}
