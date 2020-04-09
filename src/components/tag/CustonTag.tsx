import React from 'react'
import styled from 'styled-components'
import { Tag } from 'antd'
import { RemCalc } from '../../utils/RemCalc';

interface CustonTagProps{
  type?: 'basic' | 'stroked' | 'rounded'
  textColor?: string
  color?: string
}

const StyledTag = styled(Tag)`
  &.ant-tag{
    border-radius: ${RemCalc(2)};
    color: #ffffff;
    background: none;
    border: solid 1px;
    border-color: rgba(255, 255, 255, .3);
    font-size: ${RemCalc(10)};
    font-weight: 500;
    opacity: .7;
    line-height: 120%;
    padding: ${RemCalc(6)} ${RemCalc(10)};
    margin: ${RemCalc(4)};

    &:first-child{
      margin-left: 0;
    }

    &-red{
      background: rgba(229, 65, 112, .25);
      border: solid 1px rgba(229, 65, 112, 0.5);
      color: #e54170;
    }
  }
`
  
const StyledStroke = styled(StyledTag)`
  &.ant-tag{
    color: #384b54;
    border-color: rgba(0, 0, 0, .3);
    
    &-red{
      border-color: rgba(229, 65, 112, 0.5);
      color: #e54170;
    }
  }
`

const StyledRounded = styled((props) =>{
  return <StyledTag {...props}></StyledTag>
})`
  &.ant-tag{
    color: #576870;
    background-color: #f1f4f5
    border-radius: ${RemCalc(20)};
    font-size: ${RemCalc(9)};
  }
`

const CustonTag: React.SFC<CustonTagProps> = (props) => {

  const styledBg = {
    color: props.textColor
  }
  switch(props.type){
    case 'rounded': 
      return <StyledRounded {...props} style={styledBg}>{props.children}</StyledRounded>
    case 'stroked': 
      return <StyledStroke {...props}>{props.children}</StyledStroke>

    default: 
      return <StyledTag {...props}>{props.children}</StyledTag>
  }  
}

export default CustonTag