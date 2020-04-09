import React, { SFC } from 'react';
import Tabbar from '../../shared/Tabbar'
import DashboardHeader from '../DashboardHeader'
import DashboardAdressAlerts from './DashboardAdressAlerts'
import DashboardGraphCards from './DashboardAdressGraph';
import DashboardAdressLast from './DashboardAdressLast';
import CustonContent from '../../content/CustonContent';
import { Layout } from 'antd';
import Toolbar from '../../shared/Toolbar';

const DashboardAdress: SFC<{}> = () => {
  return (
    <CustonContent fullSize={true}>
      <Toolbar name="User name" />
      <Tabbar />
      <CustonContent>
        <Layout>
          <DashboardHeader />
          <DashboardAdressAlerts />
          <DashboardGraphCards />
          <DashboardAdressLast />
        </Layout>
      </CustonContent >
    </CustonContent>
  )
}
export default DashboardAdress;