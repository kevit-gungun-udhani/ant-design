import { BellOutlined, ProductFilled, SaveOutlined } from "@ant-design/icons";
import { Avatar, Col, Divider, Image, Layout, Row,  } from "antd";
import { HeaderDropdown } from "./HeaderDropdown";
import image from '../assets/download.png';
const { Header } = Layout;
const items = [
  {
    key: '1',
    icon: <Avatar>0</Avatar>,
    label: '02217192',
  },
  {
    key: '2',
    icon: <Avatar>AU</Avatar>,
    label: 'Agro CWPLA-UA',
  },

  {
    key: '3',
    icon: <Avatar>BO</Avatar>,
    label: 'Brazil Org',
  },

  {
    key: '4',
    icon: <Avatar>GO</Avatar>,
    label: 'Germany Org',
  },
  {
    key: '5',
    icon: <Avatar>AO</Avatar>,
    label: 'Argentina Org',
  },
];

const items1 = [
  {
    label: '2025/2026',
    key: '1',
  },
  {
    label: '2025/2026',
    key: '2',
  },
  {
    label: '2025/2026',
    key: '3',
  },
  {
    label: '2025/2026',
    key: '4',
  },
  {
    label: '2025/2026',
    key: '5',
  },
  {
    label: '2025/2026',
    key: '6',
  },
];

export const SiteHeader = () => {
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
              <BellOutlined />
            </Col>
            <Divider type="vertical" />
            <Col span={5}>
              <Avatar>MA</Avatar>
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};
