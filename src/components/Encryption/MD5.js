import React, { Component } from 'react';
import { Input, Button, Alert } from 'antd';
import utils from 'utility';

const {TextArea} = Input;

export default class MD5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textAreaValue: '',
      encryptionResult: '暂无结果',
    };
  }

  MD5Handle() {
    this.setState({
      encryptionResult: utils.md5(this.state.textAreaValue),
    });
  }

  handleTextAreaValueChange(e) {
    this.setState({
      textAreaValue: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <TextArea rows={4} onChange={this.handleTextAreaValueChange.bind(this)} />
        <div style={{padding: '15px 0 15px 0'}}>
          <Button type="primary" icon="user" size="default" onClick={this.MD5Handle.bind(this)}>加密</Button>
        </div>
        <Alert message={this.state.encryptionResult} type="success" />
      </div >
    );
  }
}
