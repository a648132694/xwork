import React, { Component } from 'react';
import { Tabs, Card } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import LayoutContainer from '../Layouts/Layout';
import MD5 from '../../components/Encryption/MD5';
import SHA from '../../components/Encryption/SHA';
import * as encryptionActions from '../../actions/encryption';

const { TabPane } = Tabs;

class EncryptionContainer extends Component {
  saveTabPosition(key) {
    this.props.actions.handleSaveTabPosition(key);
  }

  render() {
    // 字符串形式动态引入组件
    const containersList = {
      MD5,
      SHA,
    };
    const tabContents = this.props.settings.encryption.map((item, key) => {
      const ComponentName = containersList[item];
      return (
        <TabPane tab={item} key={key}>
          <ComponentName encryption={this.props.encryption} actions={this.props.actions} />
        </TabPane>);
    });
    return (
      <div>
        <LayoutContainer>
          <Card
            title="加密处理"
            bordered={false}
            bodyStyle={{ padding: '15px 15px 15px 0' }}
            style={{ width: '100%' }}
          >
            <Tabs
              defaultActiveKey={this.props.tabPosition}
              activeKey={this.props.tabPosition}
              tabPosition="left"
              onTabClick={this.saveTabPosition.bind(this)}
            >
              {tabContents}
            </Tabs>
          </Card>
        </LayoutContainer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tabPosition: state.encryption.tabPosition,
    settings: state.settings,
    encryption: state.encryption,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(encryptionActions, dispatch),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EncryptionContainer));
