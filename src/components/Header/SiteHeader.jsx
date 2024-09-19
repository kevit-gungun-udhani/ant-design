import { BellOutlined, ProductFilled, SaveOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Divider, Image, Layout, Row } from "antd";
import { HeaderDropdown } from "./HeaderDropdown";
import image from "../../assets/download.png";
import { NotificationModal } from "./NotificationModal";
import { useState } from "react";
import { ProfileModal } from "./ProfileModal";

const { Header } = Layout;
const items = [
  {
    key: "1",
    icon: <Avatar>0</Avatar>,
    label: "02217192",
  },
  {
    key: "2",
    icon: <Avatar>AU</Avatar>,
    label: "Agro CWPLA-UA",
  },

  {
    key: "3",
    icon: <Avatar>BO</Avatar>,
    label: "Brazil Org",
  },

  {
    key: "4",
    icon: <Avatar>GO</Avatar>,
    label: "Germany Org",
  },
  {
    key: "5",
    icon: <Avatar>AO</Avatar>,
    label: "Argentina Org",
  },
];

const items1 = [
  {
    label: "2025/2026",
    key: "1",
  },
  {
    label: "2025/2026",
    key: "2",
  },
  {
    label: "2025/2026",
    key: "3",
  },
  {
    label: "2025/2026",
    key: "4",
  },
  {
    label: "2025/2026",
    key: "5",
  },
  {
    label: "2025/2026",
    key: "6",
  },
];

const item3 = [
  {
    description:
      "The Manual 79da9784 management zones have been created for field 1.  You can now check it and create for prescription",
    time: "2 days ago(Sep-30, 2024, 3:49PM)",
  },
  {
    description:
      "The Manual 79da9784 management zones have been created for field 1.  You can now check it and create for prescription",
    time: "2 days ago(Sep-30, 2024, 3:49PM)",
  },
  {
    description:
      "The Manual 79da9784 management zones have been created for field 1.  You can now check it and create for prescription",
    time: "2 days ago(Sep-30, 2024, 3:49PM)",
  },
];

const item4 = [
  {
    key: '1',
    label: 'English(USA)'
  },
  {
    key: '2',
    label: 'Portugal'
  },
  {
    key: '3',
    label: 'Polski'
  },
  {
    key: '4',
    label: 'Mangyar'
  },
  {
    key: '5',
    label: 'Italiano'
  }
]

export const SiteHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const showProfileModal = () => {
    setIsProfileModalOpen(true);
  };
  const handleProfileOk = () => {
    setIsProfileModalOpen(false);
  };
  const handleProfileCancel = () => {
    setIsProfileModalOpen(false);
  };

  return (
    <Header id="siteHeader">
      <Row className="row-1">
        <Col className="main-col-1">
          <Row>
            <Col span={2} className="menu">
              <ProductFilled />
            </Col>
            <Col span={5}>
              <Image src={image} width={110} />
            </Col>
            <Col span={8}>
              <HeaderDropdown title="Organization" items={items} />
            </Col>
            <Col span={6}>
              <HeaderDropdown title="Farm" />
            </Col>
            <Col span={2}>
              <HeaderDropdown title="Season" items={items1} />
            </Col>
          </Row>
        </Col>
        <Col className="col-2">
          <Row>
            <Col span={4}>
              <SaveOutlined />
            </Col>
            <Col>
              <BellOutlined onClick={showModal} />

              <NotificationModal
                isModalOpen={isModalOpen}
                handleOk={handleOk}
                handleCancel={handleCancel}
                items={item3}
              />
            </Col>
            <Divider type="vertical" />
            <Col span={5}>
              <Avatar onClick={showProfileModal}>MA</Avatar>
              <ProfileModal isModalOpen={isProfileModalOpen} handleOk={handleProfileOk} handleCancel={handleProfileCancel} items={item4}/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};
