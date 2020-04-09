import React, { Component } from 'react'
import { Typography, Row, Col } from 'antd'
import DeviceItem from './AddressDeviceItem'
import DisplayCard from '../card/DisplayCard';
const { Title, Text } = Typography;

const AddressDeviceDetail: React.SFC<{}> = (props) => {

  return (
    <DisplayCard title="Dispositivos desse usuário">
      <div className="display-full">
        <div className="display-header">
          <Title level={4}>
            Dispositivos desse usuário
            <Text>2 dispositivos</Text>
          </Title>
        </div>
        <div className="display-content">
          <Row>
            <Col span={4}>
              <DeviceItem />
            </Col>
            <Col span={4}>
              <DeviceItem />
            </Col>
          </Row>
        </div>
      </div>
    </DisplayCard>
  )

}

export default AddressDeviceDetail;