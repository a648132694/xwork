import React, { Component } from 'react';
import { Button, Modal, List } from 'antd';

class HistoryButton extends Component {
   state = { visible: false };
   showModal = () => {
     this.setState({
       visible: true,
     });
   };

   handleCancel = () => {
     this.setState({
       visible: false,
     });
   };
   render() {
     return (
       <div>
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
             dataSource={this.props.data}
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
       </div>
     );
   }
}

export default HistoryButton;
