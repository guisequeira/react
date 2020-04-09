import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Typography, Col } from 'antd'
import { RemCalc } from '../../utils/RemCalc';

const { Text } = Typography;

interface DisplayTextProps {
  label: string;
  text: ReactNode;
  span?: number;
  color?: string;
  size?: 'normal' | 'large'
}


const StyledDisplay = styled(Col)`
  &.ant-col{
    display:flex;
    flex-direction: column;
  }
  &.ant-typography{
    font-size: ${RemCalc(14)};
    font-weight: 500;
  }
`

const StyledLabel = styled((props) => {
  return <Text {...props}></Text>
})`
  &.ant-typography{
    color: #bcc3c6;
    font-size: ${RemCalc(9)};
    text-transform: uppercase;
    margin-bottom: ${RemCalc(8)};
  }
`

const StyledText = styled((props) => {
  return <Text {...props}></Text>
})`
  &.ant-typography{
    font-size: ${props => props.size === 'large' ? RemCalc(16) : RemCalc(11) };
    margin-bottom: ${RemCalc(8)};
  }
`

const DisplayText: React.SFC<DisplayTextProps> = (props) => {
  const styled = {
    color: props.color ? props.color : '#384b54'
  }

  return (
    <StyledDisplay span={props.span}>
      <StyledLabel {...props}>
        {`${props.label}:`}
      </StyledLabel>
      <StyledText {...props} style={styled}>
        {props.text}
      </StyledText>
    </StyledDisplay>
  )
}




export default DisplayText