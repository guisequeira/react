import React from 'react'
import styled from 'styled-components'
import { Typography } from 'antd'
import { RemCalc } from '../../utils/RemCalc';

interface CustonTextProps {
  size?: 'normal' | 'small'
  style?: any
}
const { Text } = Typography;
const StyledText = styled(Text)`
  &.ant-typography{
    font-size: ${RemCalc(12)};
    font-weight: normal;
    margin: 0;
    color: unset;
    line-height: 120%;

    .anticon{
      margin-right: ${RemCalc(10)};
    }
  }
`

const StyledSmall = styled(StyledText)`
  &.ant-typography{
    font-size: ${RemCalc(10)};
  }
`
const CustonText: React.SFC<CustonTextProps> = (props) => {
  if(props.size === 'small'){
    return (
      <StyledSmall style={props.style}>
        {props.children}
      </StyledSmall>
    )
  }
  return (
    <StyledText {...props} style={props.style}>
      {props.children}
    </StyledText>
  )
}
CustonText.defaultProps = {
  size: 'normal'
}
export default CustonText