import { Button, Col, Layout, Row } from 'antd';
import Search from 'antd/es/transfer/search';

const { Content } = Layout;

export const SiteContent = () => {
  return (
    <Content>
      <Row className="content-row-1">All Feilds</Row>
      <Row className="content-row-2">
        <Col span={10}>
          <Row>
            <Search placeholder="input search text" style={{ width: 200 }} />
          </Row>
          <Row style={{ display: 'flex' }}>
            <Button type="primary">Primary</Button>
            <Button type="primary">Primary</Button>
          </Row>
        </Col>
        <Col span={14}>
          <div id="map"></div>
        </Col>
      </Row>
    </Content>
  );
};
