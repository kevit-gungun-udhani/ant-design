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
      footer={null}
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
                <>
                  <span>{item.description}</span>
                  <p>{item.time}</p>
                  <Button className='createZoneButton'>Go to the mngt list</Button>
                </>
              }
            ></List.Item.Meta>
          </List.Item>
        )}
      />
    </Modal>
  );
};
