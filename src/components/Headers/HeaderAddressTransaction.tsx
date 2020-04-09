import React, { Component } from 'react'
import { Icon, Row, Col, Typography, Button } from 'antd';
const { Title } = Typography;

class HeaderAddressTransaction extends Component {
  render() {
    return (
      <Row className="header-address">
        <Col className="header-address-infos" span={12}>
          <Button type="link" >
            <Icon type="arrow-left" />
            Voltar para transação de endereço
          </Button>
          <Title level={4}>
            Avenida Lavandisca 777 <br />
            Moema São Paulo Brasil 04111011<br />
          </Title>

        </Col>
        <Col className="header-address-buttons" span={12}>
          <Button>Default</Button>
          <Button type="primary">Primary</Button>
          <Button type="danger">Danger</Button>
        </Col>
      </Row>
    );
  }
}

export default HeaderAddressTransaction;