import React, { Component } from 'react';
import { Input, Button, Alert, Row, Col, Divider } from 'antd';
import utils from 'utility';
import * as helper from '../../utils/helper';
import HistoryButton from '../../components/HistoryButton/index';
import ClipboardButton from '../../components/ClipboardButton/index';

const { TextArea } = Input;

class MD5Container extends Component {
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
            <ClipboardButton text={encryption.MD5.result} />
          </Col>
          <Col span={8}>
            <HistoryButton data={data} />
          </Col>
          <Col span={8} />
        </Row>
      </div >
    );
  }
}

export default MD5Container;
