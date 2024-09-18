import { Avatar, Button, Divider, List, Menu, Modal } from 'antd';

export const NotificationModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  items,
}) => {
  return (
    <Modal
      title="Notification"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Divider />
      <List
        itemLayout="horizontal"
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar>PP</Avatar>}
              description={
                <div>
                  <p>{item.description}</p>
                  <p>{item.time}</p>
                  <Button>Go to the mngt list</Button>
                </div>
              }
            ></List.Item.Meta>
          </List.Item>
        )}
      />
    </Modal>
  );
};
