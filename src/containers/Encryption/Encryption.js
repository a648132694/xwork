import React, { Component } from 'react';
import { Tabs, Card } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import LayoutContainer from '../Layouts/Layout';
import MD5Container from './MD5';
import * as encryptionActions from '../../actions/encryption';
import * as settingsActions from '../../actions/settings';
import * as helper from '../../utils/helper';
import SHAContainer from './SHA';

const { TabPane } = Tabs;

class EncryptionContainer extends Component {
  saveTabPosition(key) {
    this.props.actions.handleSaveTabPosition(key);
  }

  render() {
    // 字符串形式动态引入组件
    const containersList = {
      MD5: MD5Container,
      SHA: SHAContainer,
    };
    const { children } = this.props.encryptionFunctions;
    const tabContents = children.map((item) => {
      if (item.status) {
        const ComponentName = containersList[item.name];
        return (
          <TabPane tab={item.name} key={item.name}>
            <ComponentName {...this.props} />
          </TabPane>
        );
      }
      return null;
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
  // 获取属于encryption的属性
  const encryptionFunctions = helper.getArrayObjectByObjectKey(state.settings.functions, 'encryption');
  return {
    tabPosition: state.encryption.tabPosition,
    encryption: state.encryption,
    encryptionFunctions,
    favouriteFunctions: state.settings.favouriteFunctions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(encryptionActions, dispatch),
    settingsActions: bindActionCreators(settingsActions, dispatch),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EncryptionContainer));
