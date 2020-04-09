import React from 'react';
import { Row, Col } from 'antd';
import CustonTag from '../tag/CustonTag';
import CustonText from '../text/CustonText';
import styled from 'styled-components';
import { RemCalc } from '../../utils/RemCalc';

const StyledItem = styled(Row)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  padding: 0 ${RemCalc(30)} ${RemCalc(25)}

`
const StyledColAddress = styled(Col)`
  &.ant-col{
    flex-direction: column;
  }
`

const StyledColTags = styled(Col)`
  &.ant-col{
    flex-direction: row;

    .ant-tag{
      margin-bottom: ${RemCalc(10)};
    }
  }
`

const StyledColTime = styled(Col)`
  &.ant-col{
    justify-content: flex-end;
    .ant-typography{
      font-weight: 500;
    }
  }
`
const StyledLabel = styled(CustonText)`
    &.ant-typography{
      color: #bcc3c6;
      font-size: ${RemCalc(10)};
      text-transform: uppercase;
      line-height: 100%;
    }
  `
  
  const StyledTextAddress = styled(CustonText)`
  &.ant-typography{
    color: #384b54;
    margin: ${RemCalc(5)} 0;
  }
`

const StyledCircleMark = styled.div`
  width: ${RemCalc(10)};
  height: ${RemCalc(10)};
  display: block;
  position: absolute;
  background-color: #d6db41;
  border-radius: 50%;
  left: 0;
  top: 0;
  z-index: 3;
`
const StyledLineMark = styled.div`
  width: ${RemCalc(2)};
  height: 150%;
  position: absolute;
  background-color: #f1f4f5;
  left: ${RemCalc(4)};
  top: -150%;
  z-index: 1;
`

const StyledLineBorder = styled.div`
  width: 100%;
  height: ${RemCalc(1)};
  position: absolute;
  background-color: #f1f4f5;
  left: ${RemCalc(30)};
  bottom: 0;
  z-index: 1;
`

const AddressLastTransctionItem: React.SFC<{}> = (props) => {


  return (
    <StyledItem>
      <StyledCircleMark/>
      <StyledLineMark/>
      <StyledLineBorder/>
      <StyledColAddress span={8}>
        <StyledLabel>Endereço validado:</StyledLabel>
        <StyledTextAddress >Avenida Lavandisca 777 <br />Moema São Paulo Brasil 04111011</StyledTextAddress>
      </StyledColAddress>
      <StyledColTags span={10}>
        <CustonTag type="stroked" color="red">Não está no histórico</CustonTag>
        <CustonTag type="stroked" >Dispositivo sem root</CustonTag>
        <CustonTag type="stroked" color="red">SO sim</CustonTag>
        <CustonTag type="stroked" color="red">Não passou na análises heurísticas</CustonTag>
      </StyledColTags>
      <StyledColTime span={6} className="transaction-item-time">
        <CustonText>Hoje - 14:00</CustonText>
      </StyledColTime>
    </StyledItem>

  )

}


export default AddressLastTransctionItem