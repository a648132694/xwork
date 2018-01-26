import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter } from "react-router-dom";
import './Layout.css';
import logo from './logo.png';

const { Content, Sider } = Layout;

class MainLayout extends Component {

    // constructor(){

    // }
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedKeys: ['index'],
        };
    }

    componentWillMount() {
        this.setSelectItem()
    }


    setSelectItem() {
        const pathName = this.props.location.pathname.split('/');
        let key;
        key = (pathName[1] === '' ? 'index' : pathName[1]);
        this.setState({
            selectedKeys: [key]
        });
    }

    handleSelect(item) {
        this.setState({
            selectedKeys: [item.key],
        });
    }


    render() {
        return (
            <Layout style={{ height: 480, fontSize: 14 }}>
                <Sider
                    style={{ background: '#fff' }}
                    breakpoint="sm"
                    collapsed={false}
                    collapsedWidth="0"
                    onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                >
                    <img src={logo} className="logo" alt="logo" />
                    <Menu theme="light" mode="inline" defaultSelectedKeys={this.state.selectedKeys}
                        selectedKeys={this.state.selectedKeys} onClick={this.handleSelect.bind(this)}>

                        <Menu.Item key="index">
                            <Icon type="code-o" style={{ fontSize: 20 }} />
                            <span className="nav-text">主页</span>
                            <Link to='/' />
                        </Menu.Item>
                        <Menu.Item key="formatting">
                            <Icon type="video-camera" style={{ fontSize: 20 }} />
                            <span className="nav-text">格式化</span>
                            <Link to='/formatting/' />
                        </Menu.Item>
                        <Menu.Item key="encryptions">
                            <Icon type="upload" style={{ fontSize: 20 }} />
                            <span className="nav-text">加密</span>
                            <Link to='/encryptions/' />
                        </Menu.Item>
                        <Menu.Item key="text_progressing">
                            <Icon type="user" style={{ fontSize: 20 }} />
                            <span className="nav-text">文字处理</span>
                            <Link to='/text_progressing' />
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: '12px 24px 24px 24px', background: '#fff', minHeight: 430 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    {/* <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
      </Footer> */}
                </Layout>
            </Layout>
        )
    }
}

export default withRouter(MainLayout)
