import React, { Component } from 'react';
import { Input, Button, Alert } from 'antd';
import utils from 'utility';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as encryptionActions from '../../actions/encryption';

const { TextArea } = Input;

class MD5 extends Component {

  MD5Handle() {
    const result = utils.md5(this.props.MD5Input);
    this.props.actions.handleSaveMD5Result(result);
  }

  handleTextAreaValueChange(e) {
    this.props.actions.handleSaveMD5Input(e.target.value);
  }

  render() {
    return (
      <div>
        <TextArea
          value={this.props.MD5Input}
          rows={4}
          ref={(textArea) => { this.textArea = textArea; }}
          onChange={this.handleTextAreaValueChange.bind(this)}
        />
        <div style={{ padding: '15px 0 15px 0' }}>
          <Button
            type="primary"
            icon="user"
            size="default"
            onClick={this.MD5Handle.bind(this)}
          >
            加密
          </Button>
        </div>
        <Alert message={this.props.MD5Result} type="success" />
      </div >
    );
  }
}

function mapStateToProps(state) {
  return {
    MD5Input: state.encryption.MD5.input,
    MD5Result: state.encryption.MD5.result,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(encryptionActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MD5);

