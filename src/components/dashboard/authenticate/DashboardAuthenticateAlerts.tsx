import React, { FunctionComponent, SFC } from 'react';
import { Icon, Col } from 'antd';
import SingleCard from '../../card/SingleCard';
import { ReactComponent as IconStop } from '../../../assets/images/icon-stop.svg'
import { ReactComponent as IconUser } from '../../../assets/images/icon-user.svg'
import { ReactComponent as IconLike } from '../../../assets/images/icon-like.svg'
import TextCard from '../../text/TextCard';
import StyledRow from '../../themes/StyledRow';

const DashboardAuthenticateAlerts: SFC <{}>  = () => {
  return (
    <StyledRow gutter={16}>
      <Col xs={12} md={8}>
        <SingleCard
          backgroundColor="#ccd139"
          header="Usuários autorizados">
          <TextCard size='xlarge' justify={'true'}>625 <Icon component={IconLike as FunctionComponent} /></TextCard>
        </SingleCard>
      </Col>
      <Col xs={12} md={8}>
        <SingleCard
          backgroundColor="#e54170"
          header="Não autorizados">
          <TextCard size='xlarge' justify={'true'}>64 <Icon component={IconStop as FunctionComponent} /></TextCard>
        </SingleCard>
      </Col>
      <Col xs={24} md={8}>
        <SingleCard
          backgroundColor="#647279"
          header="Pendentes">
          <TextCard size="xlarge" justify={'true'}>12 <Icon component={IconUser as FunctionComponent} /></TextCard>
        </SingleCard>
      </Col>
    </StyledRow>
  )
}

export default DashboardAuthenticateAlerts;