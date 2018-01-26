import React, { Component } from 'react'
import { Input, Button, Divider, Alert } from 'antd';

const { TextArea } = Input;

export default class MD5 extends Component {
    render() {
        return (
            <div>
                <TextArea rows={4} />
                <div style={{ paddingTop: 15, paddingBottom: 15 }}>
                    <Button type="primary" icon="user" size='default'>加密</Button>
                </div>
                <Alert message="Success Text" type="success" />
                {/* <p>Card content</p>
                    <p>Card content</p> */}
            </div >
        )
    }
}
