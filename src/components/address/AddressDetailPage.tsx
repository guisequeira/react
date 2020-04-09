import React from 'react'
import HeaderUser from '../user/UserHeader'
import { Col } from 'antd';
import SingleCard from '../card/SingleCard';

import CustonContent from '../content/CustonContent';

import TextCard from '../text/TextCard';
import DisplayCard from '../card/DisplayCard';
import DeviceItem from './AddressDeviceItem';
import AddressLastTransction from './AddressLastTransction';
import Toolbar from '../shared/Toolbar';
import StyledRow from '../themes/StyledRow';
import StyledTableRow from '../themes/StyledTableRow';

const AddressDetailPage: React.SFC<{}> = (props) => {
  return (
    <CustonContent fullSize={true}>
      <Toolbar name="User name" />
      {/* <DetailStrip /> */}
      <HeaderUser />
      <CustonContent>
        <StyledRow gutter={16}>
          <Col span={12}>
            <SingleCard
              type="square"
              backgroundColor="#576870"
              color="#bcc3c6"
              header="Não caiu em nenhuma regra nos últimos">
              {/* header="" */}
              {/* <TextCard></TextCard> */}
              <TextCard size="large" color="#ffffff" align="flex-end">30 <small> dias</small></TextCard>
            </SingleCard>
          </Col>
          <Col span={12}>
            <SingleCard
              type="square"
              backgroundColor="#576870"
              color="#bcc3c6"
              header="Idade total da conta">
              {/* header="" */}
              <TextCard size="large" color="#ffffff" align="flex-end">482 <small> dias</small></TextCard>
            </SingleCard>
          </Col>
        </StyledRow>
        <StyledTableRow gutter={16}>

          <DisplayCard title="Dispositivos desse usuário">
            <StyledRow>
              <Col span={4}>
                <DeviceItem icon="desktop">
                  Desktop 1
              </DeviceItem>
              </Col>
              <Col span={4}>
                <DeviceItem icon="mobile">
                  Mobile 1
              </DeviceItem>
              </Col>
            </StyledRow>
          </DisplayCard>
        </StyledTableRow>
        <AddressLastTransction />

      </CustonContent>
    </CustonContent>
  )
}

export default AddressDetailPage; 