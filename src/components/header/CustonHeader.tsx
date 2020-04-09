import React from 'react'
import styled from 'styled-components'
import { Layout } from 'antd'
import { RemCalc } from '../../utils/RemCalc';
import { device } from '../themes/device';

const { Header } = Layout;

const StyledHeader = styled(Header)`
  &.ant-layout-header{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 100%;
    height: auto;
    margin:${RemCalc(40)} 0 ${RemCalc(20)};
    flex-wrap: nowrap;
    background: none;
    border-radius: ${RemCalc(5)} ${RemCalc(5)} 0 0;
    padding: 0 ${RemCalc(8)};
    width: 100%;

    @media ${device.md}{
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`

const StyledTableHeader = styled(StyledHeader)`
  &.ant-layout-header{
    background-color: #ffffff;
    padding:${RemCalc(10)} ${RemCalc(20)};
    margin: 0;
  }
`

interface CustonHeaderProps{
  type?: 'default' | 'table'
  backgroundColor?: string
  color?: string
}

const CustonHeader: React.SFC<CustonHeaderProps> = (props) => {
  if(props.type === 'table'){
    const styled = {
      backgroundColor: props.backgroundColor ? props.backgroundColor : '#ffffff',
      color: props.color ? props.color : 'unset',
    };
    return (
      <StyledTableHeader style={styled}>
      {props.children}
      </StyledTableHeader>
    )
  }
  return (
    <StyledHeader>
      {props.children}
    </StyledHeader>
  )
}

export default CustonHeader