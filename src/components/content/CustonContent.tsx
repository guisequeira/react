import React from 'react'
import styled from 'styled-components'
import { Layout } from 'antd';

import { RemCalc } from '../../utils/RemCalc';
import { device } from '../themes/device';
const { Content } = Layout;

interface CustonContentProps {
  direction?: 'column' | 'row'
  fullSize?: boolean
}

const StyledContent = styled(Content)`
  &.ant-layout-content{
    width: 100%;
    display: flex;
    /* align-items: */
    align-items: center;
    padding: ${RemCalc(8)} ${RemCalc(20)} ;
    /* min-width: ${RemCalc(300)}; */

    .ant-layout{
      align-items: center;
      width: 100%;
      /* margin: 0 ${RemCalc(10)}; */
    }

    @media ${device.lg}{
      max-width: ${RemCalc(808)};
    }
    @media ${device.xl}{
      max-width: ${RemCalc(1020)};
    }
  }
`

const CustonContent: React.SFC<CustonContentProps> = (props) => {
  let styleSize
  let styleDirection = {
    flexDirection: props.direction ? props.direction : 'column',
  };

  if (props.fullSize) {
    styleSize = {
      maxWidth: 'none',
      padding: 0
    }
  }

  const styled = {
    ...styleSize, ...styleDirection
  }

  return (
    <StyledContent style={styled}>
      {props.children}
    </StyledContent>)
}
export default CustonContent