import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd';
import { RemCalc } from '../../utils/RemCalc';


interface ButtonProps {
  size?: 'xsmall' | 'small' | 'default' | 'large'
  type?: 'default' | 'flat' | 'primary' | 'danger' | 'link' | 'icon' | 'warning'
  onClick?: Function
}

const SyledButton: any = styled((props) => {
  return <Button {...props}></Button>
})`
  &.ant-btn {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    &-primary{
      background-color: ${props => props.theme.colors.primary};
      border: none;
      color: ${props => props.theme.colors.light[0]};
      &:hover, &:focus{
        color: ${props =>props.theme.colors.light[0]};
      }
    }
    &-icon{
      border: none;
      padding: 0; 
      .anticon:last-child, .anticon:first-child {
        font-size: ${RemCalc(16)};
      }
    }
    &-warning{
      border: none;
      color: ${props => props.theme.colors.light[0]};
      background: #f14336;
    }
    &-flat{
      color: ${props => props.theme.colors.light[0]};
      background: ${props => props.theme.colors.dark[1]};
    }
    &-danger{
      background-color: ${props => props.theme.colors.danger};
      color: ${props => props.theme.colors.light[0]};
      border: none;
    }
    &-link{
      border: none;
      margin: 0;
      padding: 0;
      height: auto;
    }
    border-radius: ${RemCalc(3)};
    border: ${props => props.type === 'flat' ? 'none' : `solid 1px ${props.theme.colors.gray[0]}` };
    color: ${props => props.type === 'flat' ? props.theme.colors.light[0] : `unset` };
    background: ${props => props.type === 'flat' ? props.theme.colors.dark[1] : 'none'};
    font-size: ${RemCalc(11)};
    letter-spacing: ${RemCalc(.5)};
    font-weight: 500;
    line-height: 120%;
    padding: ${RemCalc(2)} ${RemCalc(15)};
    margin: ${RemCalc(5)};
    height: ${RemCalc(30)};

    &:hover, &:focus{
      border-color: ${props =>props.theme.colors.graydark};
    }
  }
  .anticon{
    line-height: 100%;
    svg{
      path, g{
        fill: unset;
      }
    }
    &:first-child{
      font-size: ${RemCalc(11)};
    }

    &:last-child{
      font-size: ${RemCalc(7)};
    }
  }
`

const LargeButton: any = styled(SyledButton)`
  &.ant-btn {
    font-size: ${RemCalc(20)};
    height: ${RemCalc(40)};
  }
`

const SmallButton: any = styled(SyledButton)`
  &.ant-btn {
    font-size: ${RemCalc(12)};
    height: ${RemCalc(26)};
  }
`
const XSmallButton: any = styled(SyledButton)`
  &.ant-btn {
    font-size: ${RemCalc(9)};
    height: ${RemCalc(26)};
    .anticon{
      font-size: ${RemCalc(12)};
    }
  }
`

const CustonButton: React.SFC<ButtonProps> = (props) => {
  switch(props.size){
    case 'xsmall': 
      return <XSmallButton {...props} onClick={props.onClick}>{props.children}</XSmallButton>  
    case 'small': 
      return <SmallButton {...props} onClick={props.onClick}>{props.children}</SmallButton>  
    case 'large': 
      return <LargeButton {...props} onClick={props.onClick}>{props.children}</LargeButton>  
    default:
      return <SyledButton {...props} onClick={props.onClick}>{props.children}</SyledButton>
  }
}

CustonButton.defaultProps = {
  size: 'default',
}
export default CustonButton