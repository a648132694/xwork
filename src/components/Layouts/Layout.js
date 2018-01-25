import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './Layout.css';
import logo from './logo.png';

const { Header, Content, Footer, Sider } = Layout;

export default class MainLayout extends Component {
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
                    <img src={logo} className="logo" />
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1">
                            <Icon type="code-o" style={{ fontSize: 20 }} />
                            <span className="nav-text">转码</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" style={{ fontSize: 20 }} />
                            <span className="nav-text">格式化</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" style={{ fontSize: 20 }} />
                            <span className="nav-text">转换</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="user" style={{ fontSize: 20 }} />
                            <span className="nav-text">文字处理</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff' }}>
                            content
        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
      </Footer>
                </Layout>
            </Layout>
        )
    }
}
