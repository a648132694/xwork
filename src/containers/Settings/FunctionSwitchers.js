import React, { Component } from 'react';
import { Switch, Row, Col, Icon } from 'antd';

export default class FunctionSwitchers extends Component {
  render() {
    const handleSwitch = (check, parentKey, childKey) => {
      this.props.actions.handleSaveFunctionSwitchStatus(parentKey, childKey, check);
    };
    const temp = this.props.functions.map((item, parentKey) => {
      return item.canSwitch ?
        (
          <div key={item.name}>
            <Row>
              <Col span={8} style={{ display: 'flex', alignItems: 'center' }}>
                <Icon type={item.iconType} />
                <b>&nbsp;{item.name}</b>
              </Col>
              <Col span={16} />
            </Row>
            <hr />
            <Row>
              {item.children.map((child, childKey) => {
              return (
                <Col key={childKey} span={8} style={{ display: 'flex', alignItems: 'center' }}>
                  {child.name}
                  <Switch
                    style={{ marginLeft: 5 }}
                    defaultChecked={child.status}
                    size="small"
                    onChange={check => handleSwitch(check, parentKey, childKey)}
                  />
                </Col>
              );
            })}
            </Row>
            <br />
          </div>
        ) : null;
    });

    return (
      <div style={{ height: 345, overflow: 'scroll' }}>
        {temp}
      </div>
    );
  }
}
