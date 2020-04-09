import React, { SFC } from 'react';
import { Card, Icon, Row, Col, List } from 'antd';
import TextCard from '../../text/TextCard';
import Graph2d from '../Graph2d';
import styled from 'styled-components';
import { RemCalc } from '../../../utils/RemCalc';
import SingleCard from '../../card/SingleCard';
import StyledRow from '../../themes/StyledRow';

const StyledCardGraph = styled(Card)`
  &.ant-card{
    min-height: ${RemCalc(340)};
    margin-bottom: ${RemCalc(16)}
  }
`

const DashboardAuthenticateGraph: SFC<{}> = () => {
  const data = [{ "label": "SMS", "value": 12 },
  { "label": "Push", "value": 21 },
  { "label": "OTP", "value": 45 },
  { "label": "Mensagem de voz", "value": 32 },
  { "label": "Ligação residência", "value": 16 },
  { "label": "Ligação celular", "value": 20 },
  { "label": "SMS Tempest", "value": 26 }];

  return (
    <StyledRow gutter={16}>
      <Col xs={24} md={16}>
        <StyledCardGraph title="Endereços válidos vs. inválidos" extra={<Icon type="more" />} bordered={false}>
          <Graph2d />
        </StyledCardGraph>
      </Col>
      <Col xs={24} md={8}>
        <Row gutter={16}>
          <Col xs={24}>
            <SingleCard
              color="#384b54"
              type="list"
              header="Origem das transações">
              <List
                dataSource={data}
                renderItem={item => (
                  <TextCard justify="true" size="small">                  
                    {item.label}
                    <span>{item.value}</span>
                  </TextCard>
                )}
              />
            </SingleCard>
          </Col>
        </Row>
      </Col>
    </StyledRow>
  )
}

export default DashboardAuthenticateGraph;