import React, { SFC } from 'react';
import { Card, Icon, Col } from 'antd';
import SmallCard from '../../card/SmallCard';
import TextCard from '../../text/TextCard';
import Graph2d from '../Graph2d';
import styled from 'styled-components';
import { RemCalc } from '../../../utils/RemCalc';
import StyledRow from '../../themes/StyledRow';

const StyledCardGraph = styled(Card)`
  &.ant-card{
    min-height: ${RemCalc(340)};
    margin-bottom: ${RemCalc(16)}
  }
`

const DashboardContextualGraph: SFC<{}> = () => {
  
    return (
      <StyledRow gutter={16}>
        <Col xs={24} md={16}>
          <StyledCardGraph title="Card title" extra={<Icon type="more" />} bordered={false}>
            <Graph2d />
          </StyledCardGraph>
        </Col>
        <Col xs={24} md={8}>
          <StyledRow>
            <Col xs={24}>
              <SmallCard
                color="#384b54">
                <TextCard size="small">Dia da semana com mais bloqueado</TextCard>
                <TextCard justify={'true'}>Sexta-feira <Icon type="calendar" /></TextCard>
              </SmallCard>
            </Col>
            <Col xs={24}>
              <SmallCard color="#384b54">
                <TextCard size="small">Range de horário mais bloqueado</TextCard>
                <TextCard justify={'true'}>Das 22:12 até 03:40 <Icon type="clock-circle" /></TextCard>
              </SmallCard>
            </Col>
            <Col xs={24}>
              <SmallCard color="#384b54">
                <TextCard size="small">Região mais bloqueada</TextCard>
                <TextCard justify={'true'}>Capela do Socorro <Icon type="pushpin" /></TextCard>
              </SmallCard>
            </Col>
          </StyledRow>

        </Col>
      </StyledRow>
    )
}

export default DashboardContextualGraph;