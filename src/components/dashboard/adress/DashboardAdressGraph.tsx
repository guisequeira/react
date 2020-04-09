import React, { SFC } from 'react';
import { Card, Icon, Row, Col } from 'antd';
import TextCard from '../../text/TextCard';
import Graph2d from '../Graph2d';
import styled from 'styled-components';
import { RemCalc } from '../../../utils/RemCalc';
import SingleCard from '../../card/SingleCard';
import SmallCard from '../../card/SmallCard';
import StyledRow from '../../themes/StyledRow';
import { device } from '../../themes/device';

const StyledCardGraph = styled(Card)`
  &.ant-card{
    height: ${RemCalc(305)};
    margin-bottom: ${RemCalc(16)};

    @media ${device.lg}{
      height: ${RemCalc(345)};
    }
  }
`

const DashboardAdressGraph: SFC<{}> = () => {
  
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
              <SmallCard
                backgroundColor="#50b7d8"
                type="cover"
                >
                <TextCard>Desde a instalação, conseguimos: <strong>63% menos fraudes</strong> </TextCard>
              </SmallCard>
            </Col>
            <Col xs={24}>
              <SingleCard
              color="#384b54"
              type="single"
              header="Endereços invalidos mais bloqueados">
              <TextCard justify={'true'}>
                Rua Engenheiro José Salles Vila LisboaSão Paulo - SP, 04776-100
              </TextCard>
            </SingleCard>
            </Col>
          </Row>

        </Col>
      </StyledRow>
    )
}

export default DashboardAdressGraph;