import React, { SFC } from 'react';
import Tabbar from '../../shared/Tabbar'
import DashboardHeader from '../DashboardHeader'
import DashboardAuthenticateAlerts from './DashboardAuthenticateAlerts'
import DashboardAuthenticateGraph from './DashboardAuthenticateGraph';
import DashboardAuthenticateLast from './DashboardAuthenticateLast';
import CustonContent from '../../content/CustonContent';
import { Layout } from 'antd';
import Toolbar from '../../shared/Toolbar';

const DashboardAuthenticate: SFC<{}> = () => {
  return (
    <CustonContent fullSize={true}>
      <Toolbar name="User name" />
      <Tabbar />
      <CustonContent>
        <Layout>
          <DashboardHeader />
          <DashboardAuthenticateAlerts />
          <DashboardAuthenticateGraph />
          <DashboardAuthenticateLast />
        </Layout>
      </CustonContent >
    </CustonContent>
  )
}
export default DashboardAuthenticate;