import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { NavLink, Switch, Route } from 'react-router-dom'

import Myshop from '../views/home/shop'
import Guang from '../views/home/guang'
import Nav from '../views/home/nav'
const { SubMenu } = Menu;

class slide extends Component {


    state = {
        openKeys: ['sub1'],
    };

    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(
            key => this.state.openKeys.indexOf(key) === -1
        );
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : []
            });
        }
    };

    render() {

        return (
            <div className='slide-big'>
                <div className="slide-left">
                    <Menu
                        mode="inline"
                        openKeys={this.state.openKeys}
                        onOpenChange={this.onOpenChange}
                        style={{ width: 256 }}
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="mail" />
                                    <span>商品管理</span>
                                </span>
                            }
                        >
                            <Menu.Item key="1"><NavLink to="/home/shop">商品管理</NavLink></Menu.Item>
                            <Menu.Item key="2"><NavLink to="/home/guang">广告管理</NavLink></Menu.Item>
                            <Menu.Item key="3"><NavLink to="/home/nav">导航管理</NavLink></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="appstore" />
                                    <span>用户管理</span>
                                </span>
                            }
                        >
                            <Menu.Item key="5">查看用户</Menu.Item>
                            <Menu.Item key="6">添加用户</Menu.Item>

                        </SubMenu>

                    </Menu>
                </div>
                <div className="slide-right">
                    <Switch>
                        <Route path="/home/shop" component={Myshop}></Route>
                        <Route path="/home/guang" component={Guang}></Route>
                        <Route path="/home/nav" component={Nav}></Route>
                    </Switch>

                </div>
            </div>
        )
    }
}

export default slide
