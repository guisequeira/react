import React, { FunctionComponent, SFC } from 'react';
import { Icon, Col } from 'antd';
import SingleCard from '../../card/SingleCard';
import { ReactComponent as IconStop } from '../../../assets/images/icon-stop.svg'
import { ReactComponent as IconUser } from '../../../assets/images/icon-user.svg'
import { ReactComponent as IconLike } from '../../../assets/images/icon-like.svg'
import data from '../../../data/dashboard.json'
import TextCard from '../../text/TextCard';
import StyledRow from '../../themes/StyledRow';

const DashboardAdressAlerts: SFC <{}>  = () => {
  return (
    <StyledRow gutter={16}>
      <Col xs={12} md={8}>
        <SingleCard
          backgroundColor="#ccd139"
          header={data.adress.alerts[0].title}>
          <TextCard size='xlarge' justify={'true'}>{data.adress.alerts[0].value} <Icon component={IconLike as FunctionComponent} /></TextCard>
        </SingleCard>
      </Col>
      <Col xs={12} md={8}>
        <SingleCard
          backgroundColor="#e54170"
          header={data.adress.alerts[1].title}>
          <TextCard size='xlarge' justify={'true'}>{data['adress'].alerts[1].value} <Icon component={IconStop as FunctionComponent} /></TextCard>
        </SingleCard>
      </Col>
      <Col xs={24} md={8}>
        <SingleCard
          backgroundColor="#647279"
          header={data.adress.alerts[2].title}>
          <TextCard size="xlarge" justify={'true'}>{data.adress.alerts[2].value} <Icon component={IconUser as FunctionComponent} /></TextCard>
        </SingleCard>
      </Col>
    </StyledRow>
  )
}

export default DashboardAdressAlerts;