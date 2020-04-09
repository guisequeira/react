import React, { FunctionComponent } from 'react'
import { ReactComponent as IconPlus } from '../../assets/images/icon-plus.svg'
import { ReactComponent as IconArrowDown } from '../../assets/images/icon-arrow-down.svg'
import { ReactComponent as IconMore } from '../../assets/images/icon-more.svg'
import { Icon, Col, Dropdown } from 'antd';
import SingleCard from '../card/SingleCard';
import CustonContent from '../content/CustonContent';
import CustonHeader from '../header/CustonHeader';
import CustonTitle from '../text/CustonTitle';
import CustonButton from '../button/CustonButton'
import ExtraHeader from '../header/ExtraHeader'
import TextCard from '../text/TextCard'
import MenuTemplate from '../menu/SubMenuTemplate';
import Toolbar from '../shared/Toolbar';
import StyledRow from '../themes/StyledRow';
import { withRouter } from 'react-router';

const RulesPage: React.SFC<{}> = (props) => {
  return (
    <CustonContent fullSize={true}>
      <Toolbar name="User name" />

      <CustonContent>
        <CustonHeader>
          <CustonTitle>
            Regras
        </CustonTitle>
          <ExtraHeader>
            <Dropdown overlay={MenuTemplate} trigger={['click']} placement="bottomRight">
              <CustonButton size="small">Criar nova regra<Icon component={IconPlus as FunctionComponent} /></CustonButton>
            </Dropdown>
            <Dropdown overlay={MenuTemplate} trigger={['click']} placement="bottomRight">
              <CustonButton size="small">Período<Icon component={IconArrowDown as FunctionComponent} /></CustonButton>
            </Dropdown>
            <Dropdown overlay={MenuTemplate} trigger={['click']} placement="bottomRight">
              <CustonButton size="small">Filtrar por<Icon component={IconArrowDown as FunctionComponent} /></CustonButton>
            </Dropdown>
          </ExtraHeader>
        </CustonHeader>
        <StyledRow gutter={16}>
          <Col xl={8} lg={12} md={12}>
            <SingleCard
              type="hover"
              backgroundColor="#647279"
              header="Regra automática 1"
              headerExtra={
                <Dropdown overlay={MenuTemplate} trigger={['click']} placement="bottomRight">
                  <CustonButton type="icon">
                    <Icon component={IconMore as FunctionComponent} />
                  </CustonButton>
                </Dropdown>
              }>

              <TextCard>28 usuários com similaridade abaixo de 5%</TextCard>
            </SingleCard>
          </Col>
          <Col xl={8} lg={12} md={12}>
            <SingleCard
              type="hover"
              backgroundColor="#647279"
              header="Regra automática 2"
              headerExtra={
                <Dropdown overlay={MenuTemplate} trigger={['click']} placement="bottomRight">
                  <CustonButton type="icon">
                    <Icon component={IconMore as FunctionComponent} />
                  </CustonButton>
                </Dropdown>
              }>

              <TextCard>28 usuários com similaridade abaixo de 5%</TextCard>
            </SingleCard>
          </Col>
          <Col xl={8} lg={12} md={12}>
            <SingleCard
              type="hover"
              backgroundColor="#647279"
              header="Regra automática 3"
              headerExtra={
                <Dropdown overlay={MenuTemplate} trigger={['click']} placement="bottomRight">
                  <CustonButton type="icon">
                    <Icon component={IconMore as FunctionComponent} />
                  </CustonButton>
                </Dropdown>
              }>

              <TextCard>28 usuários com similaridade abaixo de 5%</TextCard>
            </SingleCard>
          </Col>

          <Col xl={8} lg={12} md={12}>
            <SingleCard
              type="hover"
              backgroundColor="#647279"
              header="Regra automática 4"
              headerExtra={
                <Dropdown overlay={MenuTemplate} trigger={['click']} placement="bottomRight">
                  <CustonButton type="icon">
                    <Icon component={IconMore as FunctionComponent} />
                  </CustonButton>
                </Dropdown>
              }>

              <TextCard>28 usuários com similaridade abaixo de 5%</TextCard>
            </SingleCard>
          </Col>
          <Col xl={8} lg={12} md={12}>
            <SingleCard
              type="hover"
              backgroundColor="#647279"
              header="Regra automática 5"
              headerExtra={
                <Dropdown overlay={MenuTemplate} trigger={['click']} placement="bottomRight">
                  <CustonButton type="icon">
                    <Icon component={IconMore as FunctionComponent} />
                  </CustonButton>
                </Dropdown>
              }>

              <TextCard>28 usuários com similaridade abaixo de 5%</TextCard>
            </SingleCard>
          </Col>
          <Col xl={8} lg={12} md={12}>
            <SingleCard
              type="hover"
              backgroundColor="#647279"
              header="Regra automática 6"
              headerExtra={
                <Dropdown overlay={MenuTemplate} trigger={['click']} placement="bottomRight">
                  <CustonButton type="icon">
                    <Icon component={IconMore as FunctionComponent} />
                  </CustonButton>
                </Dropdown>
              }>

              <TextCard>28 usuários com similaridade abaixo de 5%</TextCard>
            </SingleCard>
          </Col>
        </StyledRow>
      </CustonContent>
    </CustonContent>
  )
}

export default withRouter(RulesPage)