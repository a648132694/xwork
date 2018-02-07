import React, { Component } from 'react';
import { Input, Button, Alert, Row, Col, message, Modal, List, Icon, Divider } from 'antd';
import utils from 'utility';
import copy from 'copy-to-clipboard';
import * as helper from '../../utils/helper';

const { TextArea } = Input;

class MD5Container extends Component {
  state = { visible: false };
  handleTextAreaValueChange = (e) => {
    const input = e.target.value;
    this.props.actions.handleSaveMD5Input(input);
  }

  handleMD5 = () => {
    const { input, history } = this.props.encryption.MD5;
    if (!helper.checkNeedSaveToHistory(input, history)) return;
    const result = utils.md5(input);
    this.props.actions.handleSaveMD5Result(result);
    this.props.actions.saveMD5RecordToHistory(input, result);
  }

  handleCopyToClipboard = () => {
    if (copy(this.props.encryption.MD5.result)) {
      message.success('已复制到剪贴板!');
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { encryption } = this.props;
    const data = encryption.MD5.history;
    return (
      <div>
        <div style={{ minHeight: 270 }}>
          <TextArea
            ref={(input) => { this.input = input; }}
            value={encryption.MD5.input}
            rows={4}
            onChange={this.handleTextAreaValueChange}
          />
          <Button style={{ marginTop: 15 }} type="primary" icon="copy" onClick={this.handleMD5}>加密</Button>
          <Alert style={{ marginTop: 15 }} message={encryption.MD5.result} type="info" />
        </div>
        <Divider />
        <Row style={{ marginTop: 15 }}>
          <Col span={8}>
            <Button
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
              onClick={this.showModal}
            >
            历史记录
            </Button>
            <Modal
              width={568}
              style={{ position: 'absolute', right: 16, top: 16 }}
              bodyStyle={{ paddingTop: 0, minHeight: 393 }}
              footer={null}
              title="历史记录"
              mask={false}
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      title={`输入 : ${item.input}`}
                      description={`结果 : ${item.result}`}
                    />
                  </List.Item>
    )}
              />
            </Modal>
          </Col>
          <Col span={8} />
        </Row>
      </div >
    );
  }
}

export default MD5Container;
