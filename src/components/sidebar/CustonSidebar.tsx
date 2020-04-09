import React from 'react'
import styled from 'styled-components'
import { Layout } from 'antd';
import { RemCalc } from '../../utils/RemCalc';

const { Sider } = Layout;
interface CustonSidebarProps {
  collapsedWidth: string;
  breakpoint: string;
  onCollapse: Function;
  collapsed: boolean;
}
const StyledSidebar = styled((props) => {
  return <Sider {...props}></Sider>
})`
  background-color: #576870;
  min-height: 100vh;
  .ant-layout-sider-zero-width-trigger {
    top: ${RemCalc(5)};
    background: none;
    color: #384b54;
  }

  // &.ant-layout-sider,
  .ant-layout-sider-children {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
  .sidebar{
    &-brand {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: ${RemCalc(140)};
      background-color: #384b54;
    }
    
    &-dropdown {
      display: flex;
      flex-direction: column;
      padding: ${RemCalc(20)};
      box-shadow: 0px 1px 0px 0px #647279;
      border-bottom: solid 1px #516269;
      margin-bottom: 1px;
      .ant-typography {
        color: #ffffff;
        font-size: ${RemCalc(9)};
        margin-bottom: ${RemCalc(3)};
      }
    }
  }
`

const CustonSidebar: React.SFC<CustonSidebarProps> = (props) => {
  return (
    <StyledSidebar {...props}>
      {props.children}
    </StyledSidebar>
  )
}

export default CustonSidebar