import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import './Layout.css';
import logo from './logo.png';

const { Content, Sider } = Layout;

class MainLayout extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedKeys: ['index'],
    };
  }

  componentWillMount() {
    this.setSelectItem();
  }

  setSelectItem() {
    const pathName = this.props.location.pathname.split('/');
    const key = (pathName[1] === '' ? 'index' : pathName[1]);
    this.setState({
      selectedKeys: [key],
    });
  }

  handleSelect(item) {
    this.setState({
      selectedKeys: [item.key],
    });
  }

  render() {
    return (
      <Layout className="layout">
        <Sider
          style={{ background: '#fff' }}
          breakpoint="sm"
          collapsed={false}
          collapsedWidth="0"
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <img src={logo} className="logo" alt="logo" />
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={this.state.selectedKeys}
            selectedKeys={this.state.selectedKeys}
            onClick={this.handleSelect.bind(this)}
          >

            <Menu.Item key="index">
              <Icon type="code-o" style={{ fontSize: 20 }} />
              <span className="nav-text"><b>主页</b></span>
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="formatting">
              <Icon type="video-camera" style={{ fontSize: 20 }} />
              <span className="nav-text"><b>格式化</b></span>
              <Link to="/formatting/" />
            </Menu.Item>
            <Menu.Item key="encryption">
              <Icon type="upload" style={{ fontSize: 20 }} />
              <span className="nav-text"><b>加密</b></span>
              <Link to="/encryption/" />
            </Menu.Item>
            <Menu.Item key="text_progressing">
              <Icon type="user" style={{ fontSize: 20 }} />
              <span className="nav-text"><b>文字处理</b></span>
              <Link to="/text_progressing" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content className="content">
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(MainLayout);
