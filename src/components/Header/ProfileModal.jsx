import { MailOutlined } from "@ant-design/icons";
import {
  Alert,
  Avatar,
  Col,
  Divider,
  Dropdown,
  Modal,
  Row,
  Space,
  Typography,
} from "antd";
import { useState } from "react";
const { Text } = Typography;

export const ProfileModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  items,
}) => {

  const [selected, setSelected] = useState('');
  const selectedItem = items.find(({key}) => key === selected)
  
  
  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      width={280}
      className="profileModal"
    >
      <Row>
        <Col>
          <Space>
            <Space.Compact direction="vertical">
              <Row>
                <Avatar>MA</Avatar>
                <div style={{ marginLeft: "1em" }}>Manish Andodariya</div>
              </Row>
              <Divider />
              <Row>
                <Alert
                  message="Confirm your e-mail"
                  description={
                    <>
                      <span>
                        Additional description and information about
                        copywriting.
                      </span>
                      <br /> <a style={{ color: "gray" }}>resend mail</a>
                    </>
                  }
                  type="info"
                  showIcon
                  icon={
                    <MailOutlined
                      style={{ fontSize: "1.3em", marginTop: "1px" }}
                    />
                  }
                />
              </Row>
              <Row>
                <Text>Edit Profile</Text>
              </Row>
              <Divider />
              <Row>
                <Text type="secondary">Preferences</Text>
              </Row>
              <Row>
                <Dropdown
                  menu={{
                    items,
                    defaultSelectedKeys: ['1'],
                    onClick: ({key}) => setSelected(key)
                  }}
                  trigger={["click"]}   
                >
                  <Text>Language {selectedItem && selectedItem.label}</Text>
                </Dropdown>
              </Row>
            </Space.Compact>
          </Space>
        </Col>
      </Row>
    </Modal>
  );
};
