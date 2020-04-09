import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { RemCalc } from '../../utils/RemCalc';
import CustonButton from './CustonButton';

interface CircleButtonProps {
  children?: ReactNode
  onClick?: Function
  size?: 'small' | 'xsmall' | 'default' | 'large' | undefined
  bg?: string
  color?: string
}

const StyledCircleButton = styled((props) => {
  return <CustonButton {...props} />
})`
  &.ant-btn {
    background-color: ${props => props.bg ? props.bg :  'unset'};
    color: ${props => props.color ? props.color :  'unset'};
    padding: 0;
    border: none;
    border-radius: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: ${RemCalc(30)};
    width: ${RemCalc(30)};
    &:hover{
      // background-color: rgba(255,255,255, 0.2);
    }
    .anticon{
      font-size: ${RemCalc(11)};
    }
  }
`

const StyledSmall = styled(StyledCircleButton)`
  &.ant-btn {
    /* background-color: #f1f4f5; */
    height: ${RemCalc(18)};
    width: ${RemCalc(18)};
    &:hover{
      /* background-color: rgba(0,0,0, 0.25); */
    }
    .anticon{
      font-size: ${RemCalc(9)};
    }
  }
`
const CircleButton: React.SFC<CircleButtonProps> = (props) => {



  switch (props.size) {
    case 'small':
      return <StyledSmall {...props}>{props.children}</StyledSmall>
    default:
      return <StyledCircleButton {...props}>{props.children}</StyledCircleButton>
  }
}

export default CircleButton