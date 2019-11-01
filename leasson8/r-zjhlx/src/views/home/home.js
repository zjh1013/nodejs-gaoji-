import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import {NavLink, Switch,Route,Redirect} from 'react-router-dom'
import Guan from './guan'
import Jiao from './jiao'
export default class home extends Component {

    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
    };
    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };
    render() {
        const { SubMenu } = Menu;
        return (
            <div className='da'>
                <div className='left'>
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
                                    <span>Navigation One</span>
                                </span>
                            }
                        >
                            <Menu.Item key="1"><NavLink to="/home/guan">学生管理</NavLink></Menu.Item>
                            <Menu.Item key="2"><NavLink to="/home/jiao">教室管理</NavLink></Menu.Item>
                            <Menu.Item key="3">Option 3</Menu.Item>
                        </SubMenu>
                        
                    </Menu>
                </div>
                <div className='right'>
                            <Switch>
                                <Route path="/home/guan" component={Guan} />
                                <Route path="/home/jiao" component={Jiao} />
                                <Redirect from="/" to="/home/guan" />
                            </Switch>
                </div>
            </div>
        )
    }
}
