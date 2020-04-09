import React, { FunctionComponent, SFC } from 'react';
import { Icon, Col, Dropdown } from 'antd';
import SingleCard from '../../card/SingleCard';
import { ReactComponent as IconStop } from '../../../assets/images/icon-stop.svg'
import { ReactComponent as IconMore } from '../../../assets/images/icon-more.svg'
import data from '../../../data/dashboard.json'
import TextCard from '../../text/TextCard';
import MenuTemplate from '../../menu/SubMenuTemplate';
import CustonButton from '../../button/CustonButton';
import StyledRow from '../../themes/StyledRow';

const DashboardContextualAlerts: SFC <{}>  = (ß) => {
  return (
    <StyledRow gutter={16}>
      <Col xs={12} md={8}>
        <SingleCard
          backgroundColor="#ccd139"
          header={data.alerts[0].title}>
          <TextCard size='xlarge' justify={'true'}>{data.alerts[0].value} <Icon type="like" /></TextCard>
        </SingleCard>
      </Col>
      <Col xs={12} md={8}>
        <SingleCard
          backgroundColor="#e54170"
          header={data.alerts[1].title}>
          <TextCard size='xlarge' justify={'true'}>{data.alerts[1].value} <Icon component={IconStop as FunctionComponent} /></TextCard>
        </SingleCard>
      </Col>
      <Col xs={24} md={8}>
        <SingleCard
          backgroundColor="#647279"
          header={data.alerts[2].title}
          headerExtra={
            <Dropdown overlay={MenuTemplate} trigger={['click']} placement="bottomRight">
              <CustonButton type="icon">
                <Icon component={IconMore as FunctionComponent} />
              </CustonButton>
            </Dropdown>
          }>
          <TextCard >{data.alerts[2].value}</TextCard>
        </SingleCard>
      </Col>
    </StyledRow>
  )
}

export default DashboardContextualAlerts;