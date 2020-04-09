import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Icon } from 'antd';

import { RemCalc } from '../../utils/RemCalc';

interface IconOnlyProps{
  // children?: ReactNode
  size?: 'normal' | 'small'
  component?: FunctionComponent;
  color?: string 
  bg?: string 
}

const Styled: any = styled((props) => {
  return <Icon {...props}/>
})`
  &.anticon{
    color: ${props => props.color ? props.color : '#384b54'};
    // border-radius: 50%;
    font-size: ${ props => props.size === 'small' ?  RemCalc(10) : RemCalc(16)};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0 ${RemCalc(10)};
    
    svg{
      path{
        fill: unset;
      }
    }
  }
`

const IconOnly: React.SFC<IconOnlyProps> = (props) => {

  return (
    <Styled {...props}/>
  )
}
export default IconOnly