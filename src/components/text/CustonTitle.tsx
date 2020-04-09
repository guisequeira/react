import React from 'react'
import styled from 'styled-components'
import { Typography } from 'antd'
import { RemCalc } from '../../utils/RemCalc';

const { Title } = Typography;

interface CustonTitleProps{
  type?: 'default' | 'table'
  level?: 1 | 2 | 3 | 4 | undefined;
}

const StyledTitle = styled(Title)`
  &.ant-typography{
    display:flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    font-size: ${props => {
      switch(props.level){
        case 2:
          return RemCalc(20)
        case 3: 
          return RemCalc(16)
        default:
          return RemCalc(28)
      }
    }};
    font-weight: ${props => {
      switch(props.level){
        case 3: 
          return 500
        default:
          return 'normal'
      }
    }};
    margin: ${RemCalc(16)} ${RemCalc(8)};
    color: unset;
    &h2{
      margin-top: 0;
    }
  }


  > .ant-btn:first-child{
    margin-left: ${RemCalc(-5)};
  }
  `

const StyledTable = styled(StyledTitle)`
  &.ant-typography{
    font-size: ${RemCalc(14)};
    font-weight: 500;
    margin: 0;
  }
  `

const CustonTitle: React.SFC<CustonTitleProps> = (props) => {
  if(props.type === 'table'){
    return (
      <StyledTable>
        {props.children}
      </StyledTable>
    )
  }
  return (
    <StyledTitle level={props.level}>
      {props.children}
    </StyledTitle>
  )
}

export default CustonTitle