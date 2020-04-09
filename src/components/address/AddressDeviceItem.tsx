import React from 'react'
import { Icon } from 'antd';
import styled from 'styled-components';
import { RemCalc } from '../../utils/RemCalc';
import CustonText from '../text/CustonText';
import CustonButton from '../button/CustonButton';


interface DeviceItemProps {
  icon?: string;
  children?: any
}
const StyledDeviceItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const StyledIcon = styled(Icon)`
  background-color: #f1f4f5;
  padding: ${RemCalc(8)} ${RemCalc(3)};
  border-radius: 50%;
  width: ${RemCalc(30)};
  height: ${RemCalc(30)};
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${RemCalc(10)};

  .ant-btn{
    text-decoration: underline
  }
`
const DeviceItem: React.SFC<DeviceItemProps> = (props) => {
  return (
    <StyledDeviceItem>
      <StyledIcon type={props.icon} />
      <StyledWrapper>
        <CustonText>
          {props.children}
        </CustonText>
        <CustonButton type="link">
          Detalhes
        </CustonButton>
      </StyledWrapper>
    </StyledDeviceItem>
  )

}

DeviceItem.defaultProps = {
  icon: 'desktop',
}
export default DeviceItem;