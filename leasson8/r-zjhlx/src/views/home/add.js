import React, { Component } from 'react'
import { Form, Input } from 'antd';
class add extends Component {
    render() {
        // const { visible, onCancel, onCreate, form } = this.props;
        const { getFieldDecorator } = this.props.form;

        return <Form layout="vertical">
            <Form.Item label="用户名">
                {getFieldDecorator('username', {
                    initialValue:"",
                    rules: [{ required: true, message: '请输入用户名' }],
                })
                
                (<Input  />)

                }
                
            </Form.Item>
            <Form.Item label="密码">
                {getFieldDecorator('password', {
                    
                    rules: [{ required: true, message: '请输入密码' }],
                })(<Input type="password" />)}
            </Form.Item>
            <Form.Item label="地址">
                {getFieldDecorator('address', {
                    rules: [{ required: true, message: '请输入地址' }],
                })(<Input />)}
            </Form.Item>

        </Form>

    }
}

export default Form.create({ name: 'add' })(add)
