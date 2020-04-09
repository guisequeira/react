import React from 'react'
import { Dropdown } from 'antd'
import UserButton from '../button/UserButton';
import styled from 'styled-components';
import { RemCalc } from '../../utils/RemCalc';
import InputSearch from '../input/InputSearch';
import MenuTemplate from '../menu/SubMenuTemplate';


const StyledToolbar = styled.div`
  padding: ${RemCalc(7)} ${RemCalc(20)} ${RemCalc(7)} ${RemCalc(40)};
  background-color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #f1f4f5;
  width: 100%;
`
const StyledSearch = styled.div`
  display: flex;
  min-width: ${RemCalc(175)};
  width: 50%;
  flex-direction: row;
  align-items: center;
`
interface HomeRouterProps {
  name: string;   // This one is coming from the router
}

const Toolbar: React.SFC<HomeRouterProps> = (props) => {

  return (
    <StyledToolbar>
      <StyledSearch>
        <InputSearch placeholder="O que você procura?"></InputSearch>
      </StyledSearch>
      <Dropdown overlay={MenuTemplate} placement="bottomRight">
        <UserButton name="User Name"/>
      </Dropdown>
    </StyledToolbar>
  )
}

export default Toolbar;

