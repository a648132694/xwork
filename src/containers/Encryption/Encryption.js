import React, { Component } from 'react';
import { Tabs, Card } from 'antd';
import { withRouter } from 'react-router-dom';
import LayoutContainer from '../Layouts/Layout';
import MD5 from './MD5';

const { TabPane } = Tabs;

class EncryptionContainer extends Component {
  render() {
    return (
      <div>
        <LayoutContainer>
          <Card
            title="加密处理"
            bordered={false}
            bodyStyle={{ padding: '15px 15px 15px 0' }}
            style={{ width: '100%' }}
          >
            <Tabs tabPosition="left">
              <TabPane tab="MD5" key="1"><MD5 /></TabPane>
              <TabPane tab="SHA1" key="2">Content of tab 2</TabPane>
              <TabPane tab="XIAN" key="3">Content of tab 3</TabPane>
              <TabPane tab="AES" key="4">Content of tab 4</TabPane>
            </Tabs>
          </Card>
        </LayoutContainer>
      </div>
    );
  }
}

export default withRouter(EncryptionContainer);
