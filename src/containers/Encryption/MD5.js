import React, { Component } from 'react';
import { Input, Button, Alert, Row, Col } from 'antd';
import utils from 'utility';
import _ from 'lodash';
import * as helper from '../../utils/helper';
import HistoryButton from '../../components/HistoryButton/index';
import ClipboardButton from '../../components/ClipboardButton/index';
import FavouriteButton from '../../components/FavouriteButton/index';

const { TextArea } = Input;
const FUNCTION_NAME = 'MD5';

class MD5Container extends Component {
  handleTextAreaValueChange = (e) => {
    const input = e.target.value;
    this.props.actions.handleSaveMD5Input(input);
  }

  handleMD5 = () => {
    const { input, history } = this.props.encryption.MD5;
    // 判断如果不需要存进历史记录,也就代表着不需要重复操作相同的值
    if (!helper.checkNeedSaveToHistory(input, history)) return;
    const result = utils.md5(input);
    this.props.actions.handleSaveMD5Result(result);
    this.props.actions.saveMD5RecordToHistory(input, result);
  }

  handleSaveFavouriteFunction = (isFavourite) => {
    this.props.settingsActions.handleSaveFavouriteFunction(FUNCTION_NAME, isFavourite);
  }

  render() {
    const { encryption, favouriteFunctions } = this.props;
    const data = encryption.MD5.history;
    const isFavourite = (_.indexOf(favouriteFunctions, 'MD5') >= 0);
    return (
      <div>
        <div style={{ minHeight: 270 }}>
          <TextArea
            ref={(input) => { this.input = input; }}
            value={encryption.MD5.input}
            rows={6}
            onChange={this.handleTextAreaValueChange}
          />
          <Row
            style={{ paddingTop: 15 }}
            type="flex"
            justify="space-around"
            align="middle"
          >
            <Col span={7}>
              <Button
                type="primary"
                icon="copy"
                onClick={this.handleMD5}
              >
            进行加密
              </Button>
            </Col>
            <Col span={7}>
              <ClipboardButton text={encryption.MD5.result} />
            </Col>
            <Col span={7}>
              <HistoryButton data={data} />
            </Col>
            <Col span={1} />
            <Col span={2}>
              <FavouriteButton
                isFavourite={isFavourite}
                handleFavourite={this.handleSaveFavouriteFunction}
              />
            </Col>
          </Row>
          <Alert
            style={{ marginTop: 15 }}
            message={encryption.MD5.result}
            type="info"
          />
        </div>
      </div >
    );
  }
}

export default MD5Container;
