import React from 'react'
import styled, { css } from 'styled-components'
import { Menu } from 'antd';
import { RemCalc } from '../../utils/RemCalc';
import { device } from '../themes/device';


interface CustonMenuItemProps {
  type?: 'default' | 'highlight' | 'horizontal';
  key: string
}

const StyledDefault = css`
  &.ant-menu-item {
    margin: 0;
    width: 100%;
    color: #bcc3c6;
    border: none;
    min-height: ${RemCalc(60)};
    display: flex;
    align-items: center;
    background-color: #576870;
    > a{
      color: unset;
      &:hover{
        color: unset;
      }
    }
    .ant-badge-dot{
      box-shadow: none;
      right: ${RemCalc(12)};
    }

    .anticon{
      /* margin: 0; */
      font-size: ${RemCalc(20)};
        /* color: #dce141; */
      svg{
        path{
          fill: unset;
        }
      }
    }

    &:hover{
      .anticon{
        color: rgb(215, 220, 57);
      }
    }
    &.ant-menu-item-active {
      color: #ffffff;
    }
    &:not(:last-child) {
      margin: 0;
    }
    &::after {
      display: none;
    }


    &.ant-menu-item-selected {
      color: #ffffff;
      background-color: #576870;
      font-weight: 500;
      
      .anticon{
        /* color: #dce141; */
        color: rgb(215, 220, 57);
        
      }
    }
  }
`

const StyledHighlight = css`
  &.ant-menu-item {
    &::after {
      display: block;
      right: auto;
      left: 0;
      border-color: #d7dc39;
    }
    &.ant-menu-item-selected {
      background: linear-gradient(to left, #576870, rgba(215, 220, 57, 0.5));
      background-color: #576870;
      .anticon{
        color: unset;
      }
    }
  }
`

const StyledHorizontal = css`
  &.ant-menu-item {
    color: #bcc3c6;
    background: none;
    padding: 0 ${RemCalc(16)};
    font-size: ${RemCalc(10)};
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    white-space: normal;
    line-height: 160%;
    text-align: center;
    
    @media ${device.md}{
      white-space: nowrap;
      padding: 0 ${RemCalc(25)};
      font-size: ${RemCalc(12)};
    }

    &.ant-menu-item-selected, &:hover {
      background: none;
      color: #384b54;
      border-bottom: none;
      box-shadow: inset 0px -2px 0px 0px #dce141;
      > a{
        color: #384b54;
      }
    }
  }
`

const DefaultMenuItem: any = styled(Menu.Item)`${StyledDefault}`

const HighlightMenuItem: any = styled(DefaultMenuItem)`${StyledHighlight}`

const HorizontalMenuItem: any = styled(DefaultMenuItem)`${StyledHorizontal}`

const CustonMenuItem: React.SFC<CustonMenuItemProps> = (props) => {
  if (props.type === 'highlight') {
    return <HighlightMenuItem {...props} key={props.key}></HighlightMenuItem>
  } else if (props.type === 'horizontal') {
    return <HorizontalMenuItem {...props} key={props.key}></HorizontalMenuItem>
  }
  return <DefaultMenuItem {...props} key={props.key}></DefaultMenuItem>
}

export default CustonMenuItem