import React, { Component, FunctionComponent } from 'react'
import SingleCard from '../card/SingleCard'
import { Row, Col, Icon } from 'antd'
import { ReactComponent as IconArrowRigth } from '../../assets/images/icon-arrow-rigth.svg'
import { ReactComponent as IconStop } from '../../assets/images/icon-stop.svg'
import { ReactComponent as IconCheck } from '../../assets/images/icon-check.svg'
import { ReactComponent as IconPlus } from '../../assets/images/icon-plus.svg'
import { ReactComponent as IconArrowRight } from '../../assets/images/icon-arrow-rigth.svg'
import UserDeviceSource from '../../data/user-device.json'
import UserHeader from '../user/UserHeader';
import CustonContent from '../content/CustonContent';
import TextCard from '../text/TextCard';
import CustonHeader from '../header/CustonHeader';
import CustonTitle from '../text/CustonTitle';
import ExtraHeader from '../header/ExtraHeader';
import CustonButton from '../button/CustonButton';
import CustonTable from '../table/CustonTable';
import CompareModal from './CompareModal';
import Toolbar from '../shared/Toolbar';
import StyledRow from '../themes/StyledRow';
import StyledTableRow from '../themes/StyledTableRow';
import IconCircle from '../icon/IconCircle';
import styled from 'styled-components'
import { RemCalc } from '../../utils/RemCalc'
import CustonText from '../text/CustonText'
import CustonTag from '../tag/CustonTag'
import UserTransactionSource from '../../data/user-last-transaction.json'
import TableFooter from '../table/TableFooter'

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

class ComparePage extends Component {
  modal1Visible!: boolean
  modal2Visible!: boolean
  state = {
    modal1Visible: false,
    modal2Visible: false,
  };


  setModal1Visible(modal1Visible: boolean) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible: boolean) {
    this.setState({ modal2Visible });
  }

  render() {

    const columns = [
      {
        width: '500px',
        title: 'Transação',
        dataIndex: 'transaction',
        key: 'transaction',
        render: (record: any, text: any) => {
          return (
            <StyledRowText>
              <StyledWrapper>
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
    ];

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

    return (
      <CustonContent fullSize={true}>
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
                <TextCard size="large">30 dias</TextCard>
              </SingleCard>
            </Col>
            <Col xs={12} md={6}>
              <SingleCard
                type="square"
                header="Similaridade na transação"
                backgroundColor="#576870"
                color="#bcc3c6">
                <TextCard size="large">100% </TextCard>
              </SingleCard>
            </Col>
            <Col xs={12} md={6}>
              <SingleCard
                type="square"
                header="Idade total da conta"
                backgroundColor="#576870"
                color="#bcc3c6">
                <TextCard size="large">482 dias</TextCard>
              </SingleCard>

            </Col>
            <Col xs={12} md={6}>
              <SingleCard
                type="square"
                header="Logins com sucesso"
                backgroundColor="#576870"
                color="#bcc3c6">
                <TextCard size="large">93% </TextCard>
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
            <CustonHeader type="table" backgroundColor="#576870" color="#ffffff">
              <CustonTitle type="table">
                Dispositivos desse usuário
              </CustonTitle>
              <ExtraHeader>
                <CustonButton
                  onClick={() => this.setModal1Visible(true)}
                  type="primary"
                  size="small">
                  Fazer Comparação
                  <Icon component={IconArrowRigth as FunctionComponent} />
                </CustonButton>
              </ExtraHeader>
            </CustonHeader>

            <CustonTable rowSelection={{}} dataSource={UserTransactionSource} columns={columns} pagination={false} />

            <Row>
              <CompareModal visible={this.state.modal1Visible} onCancel={() => this.setModal1Visible(false)} />
            </Row>
            <TableFooter>
              <CustonButton>
                Carregar mais
              <Icon component={IconPlus as FunctionComponent} />
              </CustonButton>
            </TableFooter>
          </StyledTableRow>

        </CustonContent>
      </CustonContent>
    );
  }
}

export default ComparePage; 