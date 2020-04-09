import React, { ReactNode } from 'react';
import styled from 'styled-components'
import { Card } from 'antd';
import { RemCalc } from '../../utils/RemCalc';
import { device } from '../themes/device';

interface DisplayCardProps {
  title?: string;   // This one is coming from the router
  children?: any;
  style?: any;
  type?: 'default' | 'flat'
  extra?: string | ReactNode
}

const StyledDisplayCard: any = styled(Card)`
  &.ant-card {
    margin: ${RemCalc(20)} 0;
    border: none;
    border-color: rgba(#384b54, 0.2);
    
    &:last-child{
      /* margin-bottom: ${RemCalc(70)}; */
    }
    .ant-card-extra{
     padding: ${RemCalc(5)} 0;
    }
    .ant-card{
      
      &-head{
        padding: 0 ${RemCalc(10)} 0 ${RemCalc(20)}; 
        &-title{
          font-size: ${RemCalc(14)};
          padding: ${RemCalc(12)} 0; 
        }
      }
      &-body{
        padding: ${RemCalc(30)} ${RemCalc(20)}; 
        .ant-row{
          display: flex;
          margin-bottom: ${RemCalc(35)};
          // flex-direction: column;
          flex-wrap: wrap;
          @media ${device.md}{
            // flex-direction: row;
          }

          &:last-child{
            margin-bottom: 0;
          }
          .ant-col{
            display: flex;
            // flex-direction: column;
            flex-wrap: wrap;
          }
        }
      }
    }  
  }
`

const FlatDisplayCard = styled(StyledDisplayCard)`
&.ant-card {
  .ant-card{
    &-body{
      padding: 0;
    }
  }
}
`

const DisplayCard: React.SFC<DisplayCardProps> = (props) => {
  if (props.type === 'flat') {
    return <FlatDisplayCard
      {...props}>
      {props.children}
    </FlatDisplayCard>
  }
  return (
    <StyledDisplayCard
      {...props}>
      {props.children}
    </StyledDisplayCard>
  )
}

export default DisplayCard