import React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import CustonMenu from '../menu/CustonMenu';
import CustonMenuItem from '../menu/CustonMenuItem';
import styled from 'styled-components';
// const { Text } = Typography;

const StyledTabbar = styled.div`
  display: flex;
  background-color: #ffffff;
  justify-content: center;
  width: 100%;

`

const Tabbar: React.SFC<RouteComponentProps> = (props) => {

  const currentPath = props.location.pathname === '/' ? '/dashboard' : props.location.pathname

  return (
    <StyledTabbar>
      <CustonMenu mode="horizontal" selectedKeys={[currentPath]}>
        <CustonMenuItem key="/dashboard" type="horizontal">
          <Link to='/'>
            <span>Autenticação contextual</span>
          </Link>
        </CustonMenuItem>
        <CustonMenuItem key="/validacao-endereco" type="horizontal">
          <Link to='/validacao-endereco'>
            <span>Validação de endereço</span>
          </Link>
        </CustonMenuItem>
        <CustonMenuItem key="/autenticacao-dois-fatores" type="horizontal">
          <Link to='/autenticacao-dois-fatores'>
            <span>Autenticação dois fatores</span>
          </Link>
        </CustonMenuItem>
      </CustonMenu>
    </StyledTabbar>
  )
}


export default withRouter(Tabbar);

