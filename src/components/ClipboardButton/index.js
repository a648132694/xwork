import React from 'react';
import copy from 'copy-to-clipboard';
import { message, Button } from 'antd';

const ClickBoardButton = ({ text }) => {
  const handleCopyToClipboard = () => {
    if (copy(text)) {
      message.success('已复制到剪贴板!');
    }
  };

  return (
    <Button
      icon="copy"
      size="default"
      onClick={handleCopyToClipboard}
    >
  复制结果
    </Button>
  );
};

export default ClickBoardButton;
