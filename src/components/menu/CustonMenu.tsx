import React from 'react'
import styled, { css } from 'styled-components'
import { Menu } from 'antd';
import { RemCalc } from '../../utils/RemCalc';

interface CustonMenuProps {
  mode?: 'vertical' | 'vertical-left' | 'vertical-right'| 'horizontal'| 'inline' | undefined
  selectedKeys?: string[]
}

const DefaultStyled = css`
&.ant-menu{
  border: none;
  display: flex;
    align-items: center;
    justify-content: center;
    &-vertical{
      flex-direction: column;
    }
  }
  `
  
const HozizontalStyled = css`
  max-width: ${RemCalc(945)};
  &.ant-menu{
    &-horizontal{
      flex-direction: row;
    }
  }
`


const DefaultMenu = styled(Menu)`${DefaultStyled}`
const HozizontalMenu = styled(DefaultMenu)`${HozizontalStyled}`


const CustonMenu: React.SFC<CustonMenuProps> = (props) => {
  if([props.mode = 'horizontal']){
    return <HozizontalMenu {...props}>{props.children}</HozizontalMenu>
  }
  return <DefaultMenu {...props}>{props.children}</DefaultMenu>
  
}

export default CustonMenu