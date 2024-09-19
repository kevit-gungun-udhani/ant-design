import { SaveOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Image, Layout, Row } from 'antd';
import Search from 'antd/es/transfer/search';
import image from '../../assets/map.jpg'
const { Content } = Layout;

export const SiteContent = () => {
  
  return (
    <Content>
      <Row className="content-row-1">All Feilds</Row>
      <Row className="content-row-2">
        <Col span={10} className='content-col-1'>
          <Row>
            <Search placeholder="input search text" style={{ width: 200 }} />
          </Row>
          <Row className='content-col-1-row-1' gutter={8}>
            <Col span={12}><Button  block ><SaveOutlined/> Share Recommendation</Button></Col>
            <Col span={12}><Button className='createZoneButton' block>Create Management zone</Button></Col>
          </Row>
          <Row className='content-col-1-row-2' gutter={8}>
            <Col><Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar></Col>
            <Col>
              <Row>Field 1</Row>
              <Row>920.53 ha</Row>
            </Col>
          </Row>
        </Col>
        <Col span={14}>
          <Image src={image} className='map' width='100%'/>
        </Col>
      </Row>
    </Content>
  );
};
