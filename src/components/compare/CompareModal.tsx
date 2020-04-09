import React, { FunctionComponent } from 'react';
import { Typography, Row, Col, List, Icon } from 'antd';
import CustonModal from '../modal/CustonModal';
import styled from 'styled-components';
import CustonTitle from '../text/CustonTitle';
import DisplayCard from '../card/DisplayCard';
import DisplayText from '../text/DisplayText';
import { RemCalc } from '../../utils/RemCalc';
import CustonButton from '../button/CustonButton';

import { ReactComponent as IconFolder } from '../../assets/images/icon-folder.svg'
import { ReactComponent as IconCheck } from '../../assets/images/icon-check.svg'
import IconCircle from '../icon/IconCircle';
const { Text } = Typography;

interface CompareModalProps {
  onCancel?: any;
  visible?: boolean
}

const StyledWrapper = styled(Row)`
  &.ant-row  {
    width: 100%;
    margin: 0;
    color: #ffffff;
    // padding:0 ${RemCalc(45)}
    .ant-col{
      padding-left:${RemCalc(24)}
    }
  }
`

const StyledStrip = styled(List.Item)`
  &.ant-list-item{
    background-color: #4f6068;
    border: none;
    padding: 0;
    &:nth-child(odd){
      background-color: #52646d;
      color: #fff;
    }
  }
`

const StyledColItem = styled(Col)`
  &.ant-col{
    border-bottom: 1px solid #647279;
    padding: ${RemCalc(20)};
  }
`

const CompareModal: React.SFC<CompareModalProps> = (props) => {

  const titleModal = [
    <Text key="modal-title">Comparando duas transações</Text>,
    <CustonButton type="primary" size="small" key="modal-button"> <Icon component={IconFolder as FunctionComponent} />Exportar</CustonButton>
  ]

  const data = [{ "id": 1, "autorizado": "sim" },
  { "id": 2, "autorizado": "sim" },
  { "id": 3, "autorizado": "não" },
  { "id": 4, "autorizado": "sim" },
  { "id": 5, "autorizado": "sim" },
  { "id": 6, "autorizado": "não" },
  { "id": 7, "autorizado": "não" },
  { "id": 8, "autorizado": "sim" },
  { "id": 9, "autorizado": "sim" },
  { "id": 10, "autorizado": "sim" }];
  return (
    <CustonModal
      title={titleModal}
      width='945px'
      style={{ top: 120 }}
      visible={props.visible}
      footer={null}
      onCancel={(e: any) => props.onCancel(e)}>
      <div>
        <StyledWrapper >
          <Col span={24}>
            <Row>
              <Col span={12}>
                <Row>
                  <CustonTitle level={3}>
                    <IconCircle component={IconCheck as FunctionComponent} />
                    Transação autorizada
                  </CustonTitle>
                  <DisplayCard type="flat" style={{ background: 'none', color: '#ffffff' }}>
                    <Row gutter={16}>
                      <DisplayText
                        size="large"
                        span={16}
                        label="ID da transação"
                        text="Autenticação contextual" />
                      <DisplayText
                        size="large"
                        span={8}
                        label="Device"
                        text="Desktop" />
                    </Row>
                    <Row gutter={16}>
                      <DisplayText
                        size="large"
                        span={24}
                        label="ID da transação"
                        text="749478502-482974930-927342934230-23422" />
                    </Row>
                  </DisplayCard>
                </Row>
              </Col>

              <Col span={12}>
                <Row>
                  <CustonTitle level={3}>
                    <IconCircle component={IconCheck as FunctionComponent} />
                    Transação autorizada
                  </CustonTitle>
                  <DisplayCard type="flat" style={{ background: 'none', color: '#ffffff' }}>
                    <Row gutter={16}>
                      <DisplayText
                        size="large"
                        span={16}
                        label="ID da transação"
                        text="Autenticação contextual" />
                      <DisplayText
                        size="large"
                        span={8}
                        label="Device"
                        text="Desktop" />
                    </Row>
                    <Row gutter={16}>
                      <DisplayText
                        size="large"
                        span={24}
                        label="ID da transação"
                        text="749478502-482974930-927342934230-23422" />
                    </Row>
                  </DisplayCard>
                </Row>
              </Col>
            </Row>
          </Col>
        </StyledWrapper>
        <List
          dataSource={data}
          renderItem={item => (
            <StyledStrip>
              <StyledWrapper >
                <StyledColItem span={24}>
                  <Row >
                    <DisplayText
                      span={12}
                      label='autorizado'
                      text={item.autorizado} />

                    <DisplayText
                      span={12}
                      label='autorizado'
                      text={item.autorizado} />
                  </Row>
                </StyledColItem>
              </StyledWrapper>
            </StyledStrip>
          )}
        />
      </div>
    </CustonModal>
  );

}

export default CompareModal;