import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Icon } from 'antd';

import { RemCalc } from '../../utils/RemCalc';
import { Function } from '@babel/types';

interface IconCircleProps{
  size?: 'normal' | 'small' | 'xsmall'
  component?: FunctionComponent;
  color?: string 
  bg?: string 
  onClick?: Function
  style?: any
}

const StyledCircle: any = styled((props) => {
  return <Icon {...props}/>
})`
  &.anticon{
    background-color: ${props => props.bg ? props.bg : '#f1f4f5'};
    color: ${props => props.color ? props.color : '#384b54'};
    border-radius: 50%;
    height: ${ props => props.size === 'small' ?  RemCalc(20) : props.size === 'xsmall' ? RemCalc(16) : RemCalc(30)};
    width: ${ props => props.size === 'small' ?  RemCalc(20) : props.size === 'xsmall' ? RemCalc(16) : RemCalc(30)};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${RemCalc(10)};
    

    &:hover{
      background-color: ${props => props.bg ? props.bg : '#576870'};
      color: ${props => props.color ? props.color : '#fbfbfb'};
    }
    svg{
      font-size: ${ props => props.size === 'xsmall' ?  RemCalc(8) : RemCalc(10)};
      path, g{
        fill: unset;
      }
    }
  }
`

const IconCircle: React.SFC<IconCircleProps> = (props) => {

  return (
    <StyledCircle {...props} style={props.style}/>
  )
}
export default IconCircle