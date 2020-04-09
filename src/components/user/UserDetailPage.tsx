import React, { FunctionComponent } from 'react'
import SingleCard from '../card/SingleCard'
import UserHeader from './UserHeader'
import { Layout, Col, Icon, Row } from 'antd'
import { ReactComponent as IconHandStop } from '../../assets/images/icon-hand-stop.svg'
import { ReactComponent as IconArrowDown } from '../../assets/images/icon-arrow-down.svg'
import { ReactComponent as IconArrowRight } from '../../assets/images/icon-arrow-rigth.svg'
import { ReactComponent as IconStop } from '../../assets/images/icon-stop.svg'
import { ReactComponent as IconPlus } from '../../assets/images/icon-plus.svg'
// 
import { ReactComponent as IconCheck } from '../../assets/images/icon-check.svg'
import UserDeviceSource from '../../data/user-device.json'
import UserLastTransactionSource from '../../data/user-last-transaction.json'
import CustonContent from '../content/CustonContent'
import TextCard from '../text/TextCard'
import CustonHeader from '../header/CustonHeader'
import CustonTitle from '../text/CustonTitle'
import ExtraHeader from '../header/ExtraHeader'
import CustonText from '../text/CustonText'
import CustonTable from '../table/CustonTable'
import CustonButton from '../button/CustonButton'
import IconCircle from '../icon/IconCircle'
import Toolbar from '../shared/Toolbar'
import SidebarUserDetails from '../sidebar/SidebarUserDetails'
import StyledRow from '../themes/StyledRow'
import CustonTag from '../tag/CustonTag'
import DisplayCard from '../card/DisplayCard'
import DisplayText from '../text/DisplayText'
import styled from 'styled-components'
import { RemCalc } from '../../utils/RemCalc'
import { Link } from 'react-router-dom'
import StyledTableRow from '../themes/StyledTableRow'
import CircleButton from '../button/CircleButton'
import TableFooter from '../table/TableFooter'

const columnsDevice = [
  {
    width: '350px',
    title: 'Dispositivo',
    dataIndex: 'device',
    key: 'device',
    render: (record: any, text: any) => {
      let type: string = 'mobile'
      if (text.device.toLowerCase() === 'desktop') {
        type = 'desktop'
      }
      return <CustonText size="small"><Icon type={type} />{text.device} de {text.name}</CustonText>
    }
  },
  {
    width: '350px',
    title: 'Dispositivo novo',
    dataIndex: 'new_device',
    key: 'new_device',
    render: (new_device: any) => new_device ? 'sim' : 'não'
  },
  {
    width: '350px',
    title: 'Blacklist',
    dataIndex: 'blacklist',
    key: 'blacklist',
    render: (blacklist: any) => blacklist ? 'sim' : 'não'
  },
  {
    width: '100px',
    title: '',
    dataIndex: 'has_warning',
    key: 'has_warning',
    render: (has_warning: any) => {
      return (
        <IconCircle size="small" component={IconArrowRight as FunctionComponent} />
      )
    },
  }
];

const CustomExpandIcon = (props: any) => {
  const color = props.expanded ? '#ffffff' : props.record.autorized ? '#e54170' : '#384b54'
  const bg = props.expanded ? '#576870' : props.record.autorized ? '#ffd6e2' : '#f1f4f5'
  const deg = props.expanded ? '180deg' : 0
  const flip = {
    transform: `rotate(${deg})`,
    marginTop: props.expanded ? RemCalc(-4) : 0
  }

  return (
    <CircleButton bg={bg} color={color} size="small"
      onClick={(e: any) => props.onExpand(props.record, e)}>
      <Icon component={IconArrowDown as FunctionComponent} style={flip} />
    </CircleButton>
  )
}

const rulesUser = [
  {
    label: 'Regra número 1',
  },
  {
    label: 'Regra número 2',
  },
  {
    label: 'Regra número 3',
  }
]

const StyledBullet = styled.span`
  border-radius: 50%;
  width: ${RemCalc(10)};
  height: ${RemCalc(10)};
  background-color: #d6db41;
  display: inline-flex;
  margin-right: ${RemCalc(10)};
`

const StyledTime = styled.span`
  margin-left: ${RemCalc(20)};
`

const StyledRowText = styled(CustonText)`
  padding-right: ${RemCalc(100)};
  &.ant-typography{
    font-size: ${RemCalc(10)};
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`
const StyledWrapper = styled.span`
  justify-content: flex-start;
  
`

const columnsLastTransaction = [
  {
    width: '500px',
    title: 'Transação',
    dataIndex: 'transaction',
    key: 'transaction',
    render: (record: any, text: any) => {

      const bgBullet = {
        backgroundColor: text.autorized ? '#e54170' : '#d6db41'
      }

      return (
        <StyledRowText>
          <StyledWrapper>
            <StyledBullet style={bgBullet} />
            {text.transaction}
          </StyledWrapper>
          <StyledTime>Há 2 horas</StyledTime>
        </StyledRowText>
      )
    }
  },
  {
    width: '100px',
    title: 'Device',
    dataIndex: 'device',
    key: 'device',
    render: (device: any) => {
      return <Icon type={device} />
    }
  },
  {
    width: '100px',
    title: 'Browser',
    dataIndex: 'browser',
    key: 'browser',
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
    title: 'SO',
    dataIndex: 'so',
    key: 'so',
    render: (authorized: any) => {
      const icon = authorized ? IconCheck : IconStop
      const color = authorized ? '#384b54' : '#e73e6f'
      const bg = authorized ? '#f1f4f5' : '#ffd6e2'

      return (
        <IconCircle size="small" bg={bg} color={color} component={icon as FunctionComponent} />
      )
    }
  },
  {
    width: '100px',
    title: 'Tipo',
    dataIndex: 'type',
    key: 'type',
    render: (type: any) => {
      return (
        <CustonTag type="rounded"> {type}</CustonTag>
      )
    }
  }
]

const UserDetailPage: React.SFC<{}> = (props) => {

  return (
    <CustonContent direction="row" fullSize={true}>
      <SidebarUserDetails />
      <Layout>
        <Toolbar name="User name" />
        <UserHeader rules={rulesUser} />
        <CustonContent>
          <StyledRow gutter={16}>
            <Col xs={12} md={6}>
              <SingleCard
                type="square"
                header="Não caiu em nenhuma regra nos últimos"
                backgroundColor="#576870"
                color="#bcc3c6">
                <TextCard size="large" color="#ffffff">30 dias</TextCard>
              </SingleCard>
            </Col>
            <Col xs={12} md={6}>
              <SingleCard
                type="square"
                header="Similaridade na transação"
                backgroundColor="#576870"
                color="#bcc3c6">
                <TextCard size="large" color="#ffffff">100% </TextCard>
              </SingleCard>
            </Col>
            <Col xs={12} md={6}>
              <SingleCard
                type="square"
                header="Idade total da conta"
                backgroundColor="#576870"
                color="#bcc3c6">
                <TextCard size="large" color="#ffffff">482 dias</TextCard>
              </SingleCard>
            </Col>
            <Col xs={12} md={6}>
              <SingleCard
                type="square"
                header="Logins com sucesso"
                backgroundColor="#576870"
                color="#bcc3c6">
                <TextCard size="large" color="#ffffff">93% </TextCard>
              </SingleCard>
            </Col>
          </StyledRow>
          <StyledTableRow>
            <CustonHeader type="table">
              <CustonTitle type="table">
                Dispositivos desse usuário
              </CustonTitle>
              <ExtraHeader>
                <CustonText>
                  4 dispositivos
                </CustonText>
              </ExtraHeader>
            </CustonHeader>
            <CustonTable
              key='table-1'
              dataSource={UserDeviceSource}
              columns={columnsDevice}
              pagination={false}
            ></CustonTable>
          </StyledTableRow>
          <StyledTableRow>
            <CustonHeader type="table">
              <CustonTitle type="table">
                Últimas transações
            </CustonTitle>
              <ExtraHeader>
                <CustonText>
                  120 transações
              </CustonText>
              </ExtraHeader>
            </CustonHeader>
            <CustonHeader type="table">
              <CustonTitle type="table">
                <CustonButton size="small" type="danger">
                  <Icon component={IconHandStop as FunctionComponent} />
                  Sinalizar como Fraude
              </CustonButton>
                <Link to="/comparar">
                  <CustonButton size="small" type="primary">
                    Comparar
                  </CustonButton>
                </Link>
              </CustonTitle>
              <ExtraHeader>
                <CustonButton size="small">
                  Período <Icon component={IconArrowDown as FunctionComponent} />
                </CustonButton>
                <CustonButton size="small">
                  Filtrar por <Icon component={IconArrowDown as FunctionComponent} />
                </CustonButton>
              </ExtraHeader>
            </CustonHeader>
            <CustonTable
              key='table-2'
              dataSource={UserLastTransactionSource}
              columns={columnsLastTransaction}
              pagination={false}
              scroll={{ x: 900 }}
              expandIcon={CustomExpandIcon}
              expandRowByClick={true}
              expandedRowRender={(record: any) =>

                <DisplayCard style={{ border: 'solid 1px #f1f4f5' }}>
                  <Row gutter={16}>
                    <DisplayText
                      span={8}
                      label="autorizado"
                      text={record.autorized ? 'Sim' : 'Não'} />
                    <DisplayText
                      span={4}
                      label="Novo Device"
                      text={record.new_device ? 'Sim' : 'Não'} />
                    <DisplayText
                      span={4}
                      label="Similaridade"
                      text={`${record.similarity}%`} />
                    <DisplayText
                      span={8}
                      label="Caiu em regra"
                      text={record.has_rules ? 'Sim' : 'Não'} />
                  </Row>
                  <Row gutter={16}>
                    <DisplayText
                      span={8}
                      label="Browser"
                      text={record.browser_msg} />
                    <DisplayText
                      span={8}
                      label="Sistema Operacional"
                      text={record.so_msg} />
                    <DisplayText
                      span={8}
                      label="Rede"
                      text={record.network_msg} />
                  </Row>
                  <Row gutter={16}>
                    <DisplayText
                      span={8}
                      label="Device"
                      text={record.device_uid} />
                    <DisplayText
                      span={8}
                      label="Fingerprint"
                      text={record.fingerprint} />
                    <DisplayText
                      span={8}
                      label="Geolocalização:"
                      text={`Latitude: ${record.lat}/ Longitude: ${record.long}`} />
                  </Row>
                  <Row gutter={16} style={{ justifyContent: 'flex-end', marginRight: RemCalc(20) }} >
                    <Link to='/detalhe-transacao'>
                      <CustonButton type="primary">
                        Ver mais detalhes
                      </CustonButton>
                    </Link>
                  </Row>
                </DisplayCard>
              }
            ></CustonTable>
            <TableFooter>
              <CustonButton>
                Carregar mais
              <Icon component={IconPlus as FunctionComponent} />
              </CustonButton>
            </TableFooter>


          </StyledTableRow>
        </CustonContent>
      </Layout>
    </CustonContent>
  )
}

export default UserDetailPage; 