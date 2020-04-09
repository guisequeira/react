
import React, { FunctionComponent, SFC } from 'react';
import { Icon, Col } from 'antd';
import DoubleCard from '../../card/DoubleCard';
import SingleCard from '../../card/SingleCard';
import Text from 'antd/lib/typography/Text';
import { ReactComponent as IconUser } from '../../../assets/images/icon-user.svg'
import { ReactComponent as IconUnlock } from '../../../assets/images/icon-unlock.svg'
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

const DashboardContextualLast: SFC = () => {
    
    return (
      <StyledRow gutter={16}>
        <Col sm={24} md={12} lg={8}>
          <DoubleCard
            compare={compareDevice}
            header="Bloqueios por tipo de dipositivo"
          />
        </Col>
        <Col sm={24} md={12} lg={8}>
          <DoubleCard
            compare={compareSystem}
            header="Bloqueios por tipo de dipositivo"
          />
        </Col>
        <Col sm={24} md={12} lg={8} >
          <SingleCard
            color="#384b54"
            type="single"
            header="Browsers mais bloqueados">

            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
              <g fill="none" fillRule="nonzero">
                <path fill="#F44336" d="M3.615 5.217c6.96-8.1 19.864-6.501 24.687 2.96-3.397.002-8.713-.002-11.593 0-2.089 0-3.438-.047-4.897.722-1.716.904-3.013 2.58-3.464 4.548l-4.733-8.23z" />
                <path fill="#2196F3" d="M9.99 14.972a4.982 4.982 0 0 0 4.977 4.978 4.982 4.982 0 0 0 4.976-4.978 4.982 4.982 0 0 0-4.976-4.978 4.98 4.98 0 0 0-4.976 4.978z" />
                <path fill="#4CAF50" d="M16.896 21.488c-2.792.829-6.061-.09-7.85-3.181a4175.116 4175.116 0 0 1-6.617-11.51c-5.75 8.811-.796 20.816 9.639 22.865l4.828-8.174z" />
                <path fill="#FFC107" d="M19.587 9.992c2.326 2.164 2.833 5.667 1.258 8.382-1.187 2.047-4.976 8.442-6.812 11.537 10.75.662 18.588-9.873 15.047-19.92l-9.493.001z" />
              </g>
            </svg>

            <Text>  Google Crhome </Text>
          </SingleCard>
        </Col>
        <Col sm={24} md={12} lg={8}>
          <SingleCard
            backgroundColor="#50b7d8"
            type="cover">
            <TextCard>Desde a instalação, conseguimos: <strong>82% menos fraudes</strong> </TextCard>
          </SingleCard>
        </Col>
        <Col sm={24} md={12} lg={8}>
          <SingleCard
            color="#384b54"
            type="single"
            header="Novos Usuários">
            <TextCard size='xlarge' justify={'true'}>64 <Icon component={IconUser as FunctionComponent} /></TextCard>
          </SingleCard>
        </Col>
        <Col sm={24} md={12} lg={8}>
          <SingleCard
            color="#384b54"
            type="single"
            header="Erros de autenticação">
            <TextCard size='xlarge' justify={'true'}>128 <Icon component={IconUnlock as FunctionComponent} /></TextCard>
          </SingleCard>
        </Col>
      </StyledRow>
    )
}

export default DashboardContextualLast;