import React, { FunctionComponent } from 'react'
import { Row, Col, Icon } from 'antd';
import { ReactComponent as IconFolder } from '../../assets/images/icon-folder.svg'
import { ReactComponent as IconArrowLeft } from '../../assets/images/icon-arrow-left.svg'
import { ReactComponent as IconHandStop } from '../../assets/images/icon-hand-stop.svg'
import { ReactComponent as IconCheck } from '../../assets/images/icon-check.svg'
import { ReactComponent as IconStop } from '../../assets/images/icon-stop.svg'
import CustonContent from '../content/CustonContent';
import CustonHeader from '../header/CustonHeader';
import CustonButton from '../button/CustonButton';
import ContentHeader from '../header/ContentHeader';
import CustonTitle from '../text/CustonTitle';
import ExtraHeader from '../header/ExtraHeader';
import DisplayCard from '../card/DisplayCard';
import DisplayText from '../text/DisplayText';
import CustonTable from '../table/CustonTable';
import Toolbar from '../shared/Toolbar';
import StyledRow from '../themes/StyledRow';
import IconCircle from '../icon/IconCircle';

const dataSource = [
  {
    key: '1',
    name: 'Análise de GPS (4 pontos em um raio de 100m)',
    date: '19/12/2017 - 21:05:53',
    validAddress: true,
  },
  {
    key: '2',
    name: 'Análise com a base histórica da Tempest de 30 dias (raio de 100m)',
    date: '19/12/2017 - 21:05:53',
    validAddress: false,
  },
  {
    key: '3',
    name: 'Análise com a base histórica da Tempest de 7 dias (raio de 100m)',
    date: '19/12/2017 - 21:05:53',
    validAddress: false,
  },
  {
    key: '4',
    name: 'Análise de GPS (1ponto em um raio de 100m)',
    date: '19/12/2017 - 21:05:53',
    validAddress: true,
  },
];
const columns = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Endereço válido',
    dataIndex: 'validAddress',
    key: 'validAddress',
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
    title: 'Data',
    dataIndex: 'date',
    key: 'date',
  },
];
const AddressTransactionDetailPage: React.SFC<{}> = (props) => {
  return (
    <CustonContent fullSize={true}>


      <Toolbar name="User name" />
      <CustonContent>
        <CustonHeader>
          <ContentHeader>
            <CustonButton size="small" type="link">
              <Icon component={IconArrowLeft as FunctionComponent} />
              Voltar para transação de endereço
          </CustonButton>
            <CustonTitle level={2}>
              Avenida Lavandisca 777 <br />
              Moema São Paulo Brasil 04111011
          </CustonTitle>
          </ContentHeader>
          <ExtraHeader>
            <CustonButton type="flat" size="small">Corrigir endereço</CustonButton>
            <CustonButton type="primary" size="small"><Icon component={IconFolder as FunctionComponent} />Exportar</CustonButton>
            <CustonButton type="danger" size="small"><Icon component={IconHandStop as FunctionComponent} />Sinalizar como Fraude</CustonButton>
          </ExtraHeader>
        </CustonHeader>
        <StyledRow gutter={16}>
          <Col span={12}>
            <DisplayCard title="Detalhes">
              <Row gutter={16}>
                <DisplayText span={8} label="Nome" text="Paulo Silva" />
                <DisplayText span={16} label="CPF" text="456.534.223-94" />
              </Row>
              <Row gutter={16}>
                <DisplayText span={8} label="Está com histórico" text="Não" />
                <DisplayText span={16} label="Dispositivo com root" text="Não" />
              </Row>
              <Row gutter={16}>
                <DisplayText span={24} label="Endereço válido" text="Avenida Lavandisca 777, Moema São Paulo Brasil 04111011" />
              </Row>
              <Row gutter={16}>
                <DisplayText span={24} label="Análise heurísticas" text="Passou" />
              </Row>
            </DisplayCard>
          </Col>
          <Col span={12}>
            <DisplayCard>
              mapa
          </DisplayCard>
          </Col>
        </StyledRow>
        <StyledRow>
          <CustonTable dataSource={dataSource} columns={columns} pagination={false} />
        </StyledRow>

      </CustonContent>
    </CustonContent>

  )
}

export default AddressTransactionDetailPage;