import React from 'react';
import 'antd/dist/antd.css';
import './App.scss';
import SidebarMenu from './components/sidebar/sidebarMenu/SidebarMenu';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import styled, { ThemeProvider } from 'styled-components'
import theme from './components/themes/default'
import UserPage from './components/user/UserPage';
import UserDetailPage from './components/user/UserDetailPage';
import AddressDetailPage from './components/address/AddressDetailPage';
import AddressTransactionDetailPage from './components/address/AddressTransactionDetailPage';

import UserTransactionDetailPage from './components/user/UserTransactionDetailPage';
import ComparePage from './components/compare/ComparePage';
import RulesPage from './components/rules/RulesPage';
import RulesDetailsPage from './components/rules/RulesDetailsPage';
import DashboardAdress from './components/dashboard/adress/DashboardAdress';
import DashboardContextual from './components/dashboard/contextual/DashboardContextual';
import DashboardAuthenticate from './components/dashboard/authenticate/DashboardAuthenticate';

const StyledContentLayout = styled(Layout)`
  html{
    --antd-wave-shadow-color: #576870;
  }
  &.ant-layout{
    display: flex;
    flex-direction: row;
  }
`
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <SidebarMenu />
          <StyledContentLayout>
              <Switch>
                <Route path="/" exact={true} component={DashboardContextual} />
                <Route path="/validacao-endereco" exact={true} component={DashboardAdress} />
                <Route path="/autenticacao-dois-fatores" exact={true} component={DashboardAuthenticate} />
                <Route path="/detalhe-endereco" component={AddressDetailPage} />
                <Route path="/detalhe-endereco-transacao" component={AddressTransactionDetailPage} />
                <Route path="/usuario" component={UserPage} />
                <Route path="/detalhe-usuario" component={UserDetailPage} />
                <Route path="/detalhe-transacao" component={UserTransactionDetailPage} />
                <Route path="/comparar" component={ComparePage} />
                <Route path="/regras" component={RulesPage} />
                <Route path="/detalhes-regras" component={RulesDetailsPage} />
              </Switch>
          </StyledContentLayout>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
