import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { ReactComponent as IconCkeck } from '../../assets/images/icon-check.svg';

import { RemCalc } from '../../utils/RemCalc';
import IconCircle from './IconCircle';

interface IconCheckSuccessProps {
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

const IconCheckSuccess: React.SFC<IconCheckSuccessProps> = (props) => {
  return (
    <Wrapper>
      <StyledIcon 
        bg="#dce141"
        size="xsmall"
        color="#ffffff"
        component={IconCkeck as FunctionComponent} />
      {props.children}
    </Wrapper>
  )
}
export default IconCheckSuccess