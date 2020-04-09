import React, { SFC } from 'react';
import Tabbar from '../../shared/Tabbar'
import DashboardHeader from '../DashboardHeader'
import DashboardAlerts from './DashboardContextualAlerts'
import DashboardGraphCards from './DashboardContextualGraph';
import DashboardLastCards from './DashboardContextualLast';
import CustonContent from '../../content/CustonContent';
import { Layout } from 'antd';
import Toolbar from '../../shared/Toolbar';

const DashboardContextual: SFC<{}> = () => {

  return (
    <CustonContent fullSize={true}>
      <Toolbar name="User name" />
      <Tabbar />
      <CustonContent>
        <Layout>
          <DashboardHeader />
          <DashboardAlerts />
          <DashboardGraphCards />
          <DashboardLastCards />
        </Layout>
      </CustonContent >
    </CustonContent>
  )

}
export default DashboardContextual;