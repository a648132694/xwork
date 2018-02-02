import React, { Component } from 'react';
import { Tabs, Card } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LayoutContainer from '../Layouts/Layout';
import FunctionSwitchers from './FunctionSwitchers';
import * as settingActions from '../../actions/settings';

const { TabPane } = Tabs;

class SettingsContainer extends Component {
  render() {
    const { functions } = this.props.settings;
    const { actions } = this.props;
    return (
      <LayoutContainer>
        <Card
          title="设置"
          bordered={false}
          bodyStyle={{ paddingBottom: 0, paddingLeft: 0 }}
          style={{ width: '100%' }}
        >
          <Tabs defaultActiveKey="1" tabPosition="left">
            <TabPane tab="功能模块" key="1"><FunctionSwitchers functions={functions} actions={actions} /></TabPane>
            <TabPane tab="测试项目" key="2">Content of Tab Pane 2</TabPane>
          </Tabs>
        </Card>

      </LayoutContainer>

    );
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(settingActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
