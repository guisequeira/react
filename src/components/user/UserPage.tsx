import React, { FunctionComponent } from 'react'
import { withRouter } from 'react-router-dom'
import SingleCard from '../card/SingleCard'
import { Row, Col, Icon, Dropdown } from 'antd'
import { ReactComponent as IconSecurity } from '../../assets/images/icon-security.svg'
import { ReactComponent as IconLike } from '../../assets/images/icon-like.svg'
import { ReactComponent as IconStop } from '../../assets/images/icon-stop.svg'
import { ReactComponent as IconUser } from '../../assets/images/icon-user.svg'
import { ReactComponent as IconFolder } from '../../assets/images/icon-folder.svg'
import { ReactComponent as IconArrowDown } from '../../assets/images/icon-arrow-down.svg'
import { ReactComponent as IconCheck } from '../../assets/images/icon-check.svg'
import { ReactComponent as IconArrowRight } from '../../assets/images/icon-arrow-rigth.svg'
import { ReactComponent as IconPlus } from '../../assets/images/icon-plus.svg'

import mockUser from '../../data/user.json'
import CustonContent from '../content/CustonContent'
import CustonHeader from '../header/CustonHeader'
import CustonButton from '../button/CustonButton'
import CustonTitle from '../text/CustonTitle'
import TextCard from '../text/TextCard'
import CustonTable from '../table/CustonTable'
import ExtraHeader from '../header/ExtraHeader'
import IconCircle from '../icon/IconCircle'
import CustonText from '../text/CustonText'
import MenuTemplate from '../menu/SubMenuTemplate'
import Toolbar from '../shared/Toolbar'
import StyledTableRow from '../themes/StyledTableRow'
import TableFooter from '../table/TableFooter'


const columnsUser = [
  {
    width: '250px',
    title: 'Usuário',
    dataIndex: 'user',
    key: 'user'
  },
  {
    width: '130px',
    title: 'Endereço de IP',
    dataIndex: 'ip_address',
    key: 'ip_address'

  },
  {
    width: '150px',
    title: 'Última transação',
    dataIndex: 'last_transaction',
    key: 'last_transaction',
    render: (last_transaction: any) => {
      return <CustonText size="small">{`${last_transaction} minutos atrás`}</CustonText>
    }
  },
  {
    width: '150px',
    title: 'Saúde',
    dataIndex: 'health',
    key: 'health',
    render: (health: any) => <CustonText size="small">{`${health}%`}</CustonText>
  },
  {
    width: '150px',
    title: 'Device novo',
    dataIndex: 'new_device',
    key: 'new_device',
    render: (device: any) => {
      return device ? 'Sim' : 'Não'
    }
  },
  {
    width: '100px',
    title: 'Autorizado',
    dataIndex: 'authorized',
    key: 'authorized',
    render: (authorized: any) => {
      const icon = authorized ? IconCheck : IconStop
      const color = authorized ? '#384b54' : '#e73e6f'
      const bg = authorized ? '#f1f4f5' : '#ffd6e2'

      return (
        <IconCircle size="small" bg={bg} color={color} component={icon as FunctionComponent} />
      )
    },
  },
  {
    width: '100px',
    title: '',
    dataIndex: 'has_warning',
    key: 'has_warning',
    render: (has_warning: any) => {
      const color = has_warning ? '#384b54' : '#e73e6f'
      const bg = has_warning ? '#f1f4f5' : '#ffd6e2'

      return (
        <IconCircle size="small" bg={bg} color={color} component={IconArrowRight as FunctionComponent} />
      )
    },
  }
];

interface UserPageProps {
  history?: any;
}

const UserPage: React.SFC<UserPageProps> = (props) => {
  return (
    <CustonContent fullSize={true}>
      <Toolbar name="User name" />

      <CustonContent>
        <CustonHeader>
          <CustonTitle>
            Usuários
          </CustonTitle>
          <CustonButton type="primary" size="small"><Icon component={IconFolder as FunctionComponent} />Exportar</CustonButton>
        </CustonHeader>
        <Row gutter={16} style={{ width: '100%' }}>
          <Col xs={12} md={6}>
            <SingleCard
              type="square"
              header="Sua empresa já foi protegida"
              headerExtra={<Icon component={IconSecurity as FunctionComponent} />}
              backgroundColor="#576870"
              color="#bcc3c6">
              <TextCard size="large" color="#ffffff">23.570x </TextCard>
            </SingleCard>
          </Col>
          <Col xs={12} md={6}>
            <SingleCard
              type="square"
              header="Usuários autorizados"
              headerExtra={<Icon component={IconLike as FunctionComponent} />}
              backgroundColor="#576870"
              color="#bcc3c6">
              <TextCard size="large" color="#ffffff">1.459 </TextCard>
            </SingleCard>
          </Col>
          <Col xs={12} md={6}>
            <SingleCard
              header="Usuários bloqueados"
              headerExtra={<Icon component={IconStop as FunctionComponent} />}
              type="square"
              backgroundColor="#576870"
              color="#bcc3c6">
              <TextCard size="large" color="#ffffff">261 </TextCard>
            </SingleCard>
          </Col>
          <Col xs={12} md={6}>
            <SingleCard
              header="Usuários autorizados"
              headerExtra={<Icon component={IconUser as FunctionComponent} />}
              type="square"
              backgroundColor="#576870"
              color="#bcc3c6">
              <TextCard size="large" color="#ffffff">+34 </TextCard>
            </SingleCard>
          </Col>
        </Row>
        <StyledTableRow>
          <CustonHeader type="table">
            <CustonTitle type="table">
              Transações por usuários
            </CustonTitle>
            <ExtraHeader>
              <Dropdown overlay={MenuTemplate} placement="bottomRight" trigger={['click']}>
                <CustonButton size="small">Período <Icon component={IconArrowDown as FunctionComponent} /></CustonButton>
              </Dropdown>
              <Dropdown overlay={MenuTemplate} placement="bottomRight" trigger={['click']}>
                <CustonButton size="small">Filtrar por <Icon component={IconArrowDown as FunctionComponent} /></CustonButton>
              </Dropdown>
            </ExtraHeader>
          </CustonHeader>
          <CustonTable
            key='table-1'
            dataSource={mockUser}
            columns={columnsUser}
            scroll={{ x: 970 }}
            expandIconAsCell
            pagination={false}
            onRow={(record: any, rowIndex: any) => {
              return {
                onClick: (e: Event) => {
                  if (mockUser[rowIndex].authorized) {
                    props.history.push('/detalhe-usuario')
                  } else {
                    props.history.push('/detalhe-endereco')
                  }
                }
              }
            }}>
            
          </CustonTable>

          <TableFooter>
            <CustonButton>
              Carregar mais
              <Icon component={IconPlus as FunctionComponent} />
            </CustonButton>
          </TableFooter>
        </StyledTableRow>
      </CustonContent>
    </CustonContent>
  )
}

export default withRouter(UserPage); 