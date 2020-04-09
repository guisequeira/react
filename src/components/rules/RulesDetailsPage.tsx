import React, { FunctionComponent } from 'react'
import { ReactComponent as IconFolder } from '../../assets/images/icon-folder.svg'
import { ReactComponent as IconArrowDown } from '../../assets/images/icon-arrow-down.svg'
import { Icon } from 'antd';
import { ReactComponent as IconArrowLeft } from '../../assets/images/icon-arrow-left.svg'
import { ReactComponent as IconArrowRight } from '../../assets/images/icon-arrow-rigth.svg'
import CustonContent from '../content/CustonContent';
import CustonHeader from '../header/CustonHeader';
import CustonTitle from '../text/CustonTitle';
import CustonButton from '../button/CustonButton'
import ExtraHeader from '../header/ExtraHeader'
import ContentHeader from '../header/ContentHeader';
import CustonTable from '../table/CustonTable';
import Toolbar from '../shared/Toolbar';
import StyledRow from '../themes/StyledRow';

import RulesData from '../../data/rules.json'
import CustonTag from '../tag/CustonTag';
import IconCircle from '../icon/IconCircle';

const columns = [
  {
    width: '400px',
    title: 'Usuário',
    dataIndex: 'user',
    key: 'user'
  },
  {
    width: '400px',
    title: 'Regra que gerou a notificação',
    dataIndex: 'rules',
    key: 'rules',
  },
  {
    width: '100px',
    title: 'Cliente',
    dataIndex: 'user',
    key: 'user',
    render: () => 'Tempest'
  },
  {
    width: '300px',
    title: 'Última transação',
    dataIndex: 'user',
    key: 'user',
    render: () => 'Dois minutos atrás'
  },
  {
    width: '200px',
    title: 'Tipo',
    dataIndex: 'type',
    key: 'type',
    render: (type: any) => {
      return (
        <CustonTag type="rounded"> {type}</CustonTag>
      )
    }
  },
  {
    width: '100px',
    title: '',
    dataIndex: 'has_warning',
    key: 'has_warning',
    render: () => {
      return (
        <IconCircle size="small" component={IconArrowRight as FunctionComponent} />
      )
    },
  }
];

const RulesDetailsPage: React.SFC<{}> = (props) => {
  return (
    <CustonContent fullSize={true}>
      <Toolbar name="User name" />
      <CustonContent>
        <CustonHeader>
          <ContentHeader>
            <CustonButton size="small" type="link">
              <Icon component={IconArrowLeft as FunctionComponent} />
              Voltar para Regras
          </CustonButton>
            <CustonTitle>
              Regra automática 1 - Alertas
          </CustonTitle>
          </ContentHeader>
          <ExtraHeader>
            <CustonButton size="small">Marcar como lida</CustonButton>
            <CustonButton size="small">Filtrar por<Icon component={IconArrowDown as FunctionComponent} /></CustonButton>
            <CustonButton size="small" type="primary"><Icon component={IconFolder as FunctionComponent} />Exportar</CustonButton>
          </ExtraHeader>
        </CustonHeader>
        <StyledRow>
          <CustonTable 
            dataSource={RulesData} 
            columns={columns} pagination={false} />
        </StyledRow>
      </CustonContent>
    </CustonContent>

  )
}

export default RulesDetailsPage