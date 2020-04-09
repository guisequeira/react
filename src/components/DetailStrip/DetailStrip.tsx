import React, { Component } from 'react'
import { Row, Col, Button, Icon } from 'antd';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import './DetailStrip.scss'

class DetailStrip extends Component {
  render() {
    return (
      <div className="detail-strip">
        <div className="content-view">
          <Row type="flex" gutter={16} align="middle" justify="space-between">
            <Col span={16}>
              <Text type="secondary">Transações do usuário do</Text>
              <Title level={2}>Carlos Manuel  Souza</Title>
              <Text type="secondary">Avenida Lavandisca 777 - Moema São Paulo Brasil - 041110 11</Text>
            </Col>
              <Button>
                <span>Saúde Alta</span>
                <Icon type="arrow-right" />
              </Button>
          </Row>
        </div>
      </div>
    );
  }
}

export default DetailStrip;