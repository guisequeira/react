
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { ReactComponent as IconX } from '../../assets/images/icon-x.svg';
import { RemCalc } from '../../utils/RemCalc';
import IconCircle from './IconCircle';


interface IconXDangerProps {
  // children?: ReactNode
  size?: 'normal' | 'small'
  component?: FunctionComponent;
  color?: string
  bg?: string
}

const StyledIcon: any = styled(IconCircle)`
  &.anticon{
    margin: 0;
    margin-right: ${RemCalc(5)};

    svg{
      path{
        fill: unset;
      }
    }
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const IconXDanger: React.SFC<IconXDangerProps> = (props) => {
  return (
    <Wrapper>
      <StyledIcon 
        bg="#e54170"
        size="xsmall"
        color="#ffffff"
        component={IconX as FunctionComponent} />
      {props.children}
    </Wrapper>
  )
}
export default IconXDanger