import { ProductFilled } from "@ant-design/icons";
import { Col, Layout, Row } from "antd";
import { HeaderDropdown } from "./HeaderDropdown";
const { Header } = Layout;

// const items1 = ['1', '2', '3'].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));

export const SiteHeader = () => {
  return (
    <Header id="siteHeader">
      <Row>
        <Col>
          <Row className="col-1-row">
            <Col span={3}>
              <ProductFilled />
            </Col>
            <Col span={2}>
              <HeaderDropdown />
            </Col>
            <Col span={3}>
              <HeaderDropdown />
            </Col>
            <Col span={2}>
              <HeaderDropdown />
            </Col>
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Header>
  );
};
