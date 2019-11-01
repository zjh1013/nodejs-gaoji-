import React, { Component } from 'react'
import { Form, Input, Select } from 'antd';

class add extends Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        const { Option } = Select;

        return <Form layout="vertical">
            <Form.Item label="商品名称">
                {getFieldDecorator('pname', {
                    rules: [{ required: true, message: '请您输入商品名称' }],
                })(<Input />)}
            </Form.Item>
            <Form.Item label="商品图片">
                {getFieldDecorator('pimage', {
                    rules: [{ required: true, message: '请您输入商品图片地址' }],
                })(<Input />)}
            </Form.Item>
            <Form.Item label="商品描述">
                {getFieldDecorator('desc', {
                    rules: [{ required: true, message: '请您输入商品描述' }],
                })(<Input />)}
            </Form.Item>
            <Form.Item label="商品价格">
                {getFieldDecorator('price', {
                    rules: [{ required: true, message: '请您输入商品价格' }],
                })(<Input type="number" />)}
            </Form.Item>
            <Form.Item label="商品类型">
                {getFieldDecorator('types', {
                    rules: [{ required: true, message: '请您输入商品类型' }],
                })(
                    <Select style={{ width: 120 }} onChange={this.handleChange}>
                        <Option value="1">水果</Option>
                        <Option value="2">蔬菜</Option>
                        <Option value="3">饮料</Option>
                    </Select>
                )}
            </Form.Item>


        </Form>



    }
    handleChange(value) {
        console.log(`selected ${value}`);
    }
}

export default Form.create({ name: 'add' })(add)

