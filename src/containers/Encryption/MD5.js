import React, { Component } from 'react';
import { Input, Button, Alert, Row, Col, message } from 'antd';
import utils from 'utility';
import copy from 'copy-to-clipboard';

const { TextArea } = Input;

class MD5Container extends Component {
  handleTextAreaValueChange = (e) => {
    this.props.actions.handleSaveMD5Input(e.target.value);
    const result = utils.md5(this.props.encryption.MD5.input);
    this.props.actions.handleSaveMD5Result(result);
  }

  handleCopyToClipboard = () => {
    if (copy(this.props.encryption.MD5.result)) {
      message.success('已复制到剪贴板!');
    }
  }
  render() {
    const { encryption } = this.props;
    return (
      <div>
        <TextArea
          value={encryption.MD5.input}
          rows={4}
          onChange={this.handleTextAreaValueChange}
        />

        <Alert style={{ marginTop: 15 }} message={encryption.MD5.result} type="info" />
        <Row style={{ marginTop: 15 }}>
          <Col span={8}>
            <Button
              type="primary"
              icon="copy"
              size="default"
              onClick={this.handleCopyToClipboard}
            >
            复制结果
            </Button>
          </Col>
          <Col span={8}>
            <Button
              icon="profile"
              size="default"
            >
            记录
            </Button>
          </Col>
          <Col span={8} />
        </Row>
      </div >
    );
  }
}

export default MD5Container;
