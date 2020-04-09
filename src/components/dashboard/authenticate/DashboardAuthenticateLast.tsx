
import React, { FunctionComponent, SFC } from 'react';
import { Icon, Col } from 'antd';
import DoubleCard from '../../card/DoubleCard';
import SingleCard from '../../card/SingleCard';
import TextCard from '../../text/TextCard';
import { ReactComponent as IconUserPlus } from '../../../assets/images/icon-user-plus.svg'
import StyledRow from '../../themes/StyledRow';

const compareEffective = {
  a: {
    label: 'SMS',
    value: '68'
  },
  b: {
    label: 'Transações',
    value: '34'
  }
}


const DashboardAuthenticateLast: SFC = () => {  
    return (
      <StyledRow gutter={16}>
        <Col sm={24} md={12} lg={8}>
          <SingleCard
            backgroundColor="#50b7d8"
            type="cover">
            <TextCard>Diminuimos a fricção de <strong>40% dos usuarios.</strong></TextCard>
          </SingleCard>
        </Col>
        <Col sm={24} md={12} lg={8}>
        <SingleCard
          color="#384b54"
          type="single"
          header="Novos usuários">
          <TextCard size='xlarge' justify={'true'}>128 <Icon component={IconUserPlus as FunctionComponent} /></TextCard>

        </SingleCard>
        </Col>
        <Col sm={24} md={12} lg={8}>
        <DoubleCard
            compare={compareEffective}
            header="Efetividade de SMS vs Transação"
          />
        </Col>
      </StyledRow>
    )
}

export default DashboardAuthenticateLast;