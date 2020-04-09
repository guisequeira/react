
import React, { FunctionComponent, SFC } from 'react';
import { Icon, Col } from 'antd';
import DoubleCard from '../../card/DoubleCard';
import SingleCard from '../../card/SingleCard';
import { ReactComponent as IconUserPlus } from '../../../assets/images/icon-user-plus.svg'
import TextCard from '../../text/TextCard';
import StyledRow from '../../themes/StyledRow';


const compareDevice = {
  a: {
    label: 'Celular',
    value: '112'
  },
  b: {
    label: 'Desktop',
    value: '43'
  }
}

const compareSystem = {
  a: {
    label: 'Android',
    value: '68'
  },
  b: {
    label: 'iOS',
    value: '34'
  }
}


const DashboardAdressLast: SFC<{}> = () => {
  return (
    <StyledRow gutter={{ sm: 16 }}>
      <Col sm={24} md={12} lg={8}>
        <DoubleCard
          compare={compareDevice}
          header="Endereços invalidos por dispositivo"
        />
      </Col>
      <Col sm={24} md={12} lg={8}>
        <DoubleCard
          compare={compareSystem}
          header="Endereços invalidos por sistema"
        />
      </Col>
      <Col sm={24} md={12} lg={8} >
        <SingleCard
          color="#384b54"
          type="single"
          header="Novos usuários">
          <TextCard size='xlarge' justify={'true'}>128 <Icon component={IconUserPlus as FunctionComponent} /></TextCard>

        </SingleCard>
      </Col>
    </StyledRow>
  )
}

export default DashboardAdressLast;