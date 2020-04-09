import React from 'react';
import styled from 'styled-components'
import { Card } from 'antd';
import { RemCalc } from '../../utils/RemCalc';
import { device } from '../themes/device';

interface Smallrops {
  name?: string;   // This one is coming from the router
  header?: any;
  headerExtra?: any;
  label?: string;
  icon?: string;
  type?: string;
  color?: string;
  backgroundColor?: string;
  children?: any;
  size?: any;
}

const StyledSmallCard: any = styled(Card)`
  &.ant-card {
    flex-direction: row;
    align-items: center;
    display: flex;
    background-color: red;
    height: {props => props.type === 'cover' ? RemCalc(100) : RemCalc(100)};
    margin-bottom: ${RemCalc(16)};
    
    @media ${device.lg}{
      // margin-top: ${RemCalc(16)};
    }


    .ant-card-head{
      border-bottom-color: rgba(255, 255, 255, 0.35);
    }
    
    .ant-card-body {
      width: 100%;
      padding: ${RemCalc(8)}
      flex-direction: column;
      align-items: center;
      min-height: ${RemCalc(96)};
      
      @media ${device.md}{
        min-height: ${RemCalc(90)};
      }
      
      @media ${device.lg}{
        min-height: ${RemCalc(96)};
      }
      
      @media ${device.lg}{
        margin-top: ${RemCalc(8)};
        padding: ${RemCalc(16)}
        min-height: ${RemCalc(120)};
      }
    }
  }
`

const SmallCard: React.SFC<Smallrops> = (props) => {

  const styles = {
    backgroundColor: props.backgroundColor ? props.backgroundColor : '#ffffff',
    color: props.color ? props.color : '#ffffff'
  }

  return (
    <StyledSmallCard
      color={props.color}
      title={props.header}
      style={styles}
      extra={props.headerExtra}>
      {props.children}
    </StyledSmallCard>
  )
}

export default SmallCard