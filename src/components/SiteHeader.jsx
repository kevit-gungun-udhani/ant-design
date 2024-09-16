import { ProductFilled } from "@ant-design/icons";
import { Col, Layout, Row } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const { Header } = Layout;


const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

export const SiteHeader = () => {
  return (
    <Header id="siteHeader">
      <Row>
        <Col>
          <Row>
            <Col>
              <ProductFilled />
            </Col>
            <Col>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Click me
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </Col>
            <Col>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Click me
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </Col>
            <Col>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Click me
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </Col>
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Header>
  );
};
