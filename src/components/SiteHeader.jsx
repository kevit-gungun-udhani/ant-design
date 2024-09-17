import { BellOutlined, ProductFilled, SaveOutlined } from "@ant-design/icons";
import { Avatar, Col, Divider, Flex, Layout, Row, Space } from "antd";
import { HeaderDropdown } from "./HeaderDropdown";
const { Header } = Layout;


export const SiteHeader = () => {
  return (
    <Header id="siteHeader">
      <Row className="row-1">
        <Col className="main-col-1">
          <Row>
            <Col span={2}>
              <ProductFilled />
            </Col>
            <Col span={8}>
              <HeaderDropdown />
            </Col>
            <Col span={8}>
              <HeaderDropdown />
            </Col>
            <Col span={6}>
              <HeaderDropdown />
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
