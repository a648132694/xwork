import React from 'react';
import { Input, Button, Alert } from 'antd';
import utils from 'utility';

const { TextArea } = Input;

export default function MD5({ encryption, actions }) {
  const MD5Handle = () => {
    const result = utils.md5(encryption.MD5.input);
    actions.handleSaveMD5Result(result);
  };
  const handleTextAreaValueChange = (e) => {
    actions.handleSaveMD5Input(e.target.value);
  };

  return (
    <div>
      <TextArea
        value={encryption.MD5.input}
        rows={4}
        onChange={e => handleTextAreaValueChange(e)}
      />
      <div style={{ padding: '15px 0 15px 0' }}>
        <Button
          type="primary"
          icon="user"
          size="default"
          onClick={MD5Handle}
        >
            加密
        </Button>
      </div>
      <Alert message={encryption.MD5.result} type="success" />
    </div >
  );
}

