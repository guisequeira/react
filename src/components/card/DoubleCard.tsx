import React from 'react';
import { Card, Typography } from 'antd';
import styled from 'styled-components';
import { RemCalc } from '../../utils/RemCalc';
import { device } from '../themes/device';

const { Text } = Typography;
interface DoubleCardProps {
  color?: string;
  header?: string;
  compare?: any
}

const StyledDoubleCard: any = styled(Card)`
  &.ant-card {
    min-height: ${RemCalc(200)};
    margin-bottom: ${RemCalc(16)}
    .ant-card-head {
      border-color: rgba($color: #384b54, $alpha: 0.2);
      .&-title {
        font-size: ${RemCalc(12)};

        @media ${device.xl}{
          font-size: ${RemCalc(11)};
        }
      }
    }


    .ant-card-body {
      padding: ${RemCalc(16)} 0;
      .double-body {
        display: flex;
        flex-direction: row;
        // width: 100%;
        justify-content: center;

        &-item {
          padding: 0 ${RemCalc(30)};
          display: flex;
          flex-direction: column;
          // width: 100%;
          align-items: center;
          &:first-child {
            border-right: 1px solid #f1f4f5;
          }
        }
      }
    }
  }
`

const StyledLabel = styled(Text)`
  &.ant-typography {
    font-size: ${RemCalc(12)};
  }
`
const StyledText = styled(Text)`
  &.ant-typography {
    font-size: ${RemCalc(60)};
  }
`
const DoubleCard: React.SFC<DoubleCardProps> = (props) => {
  const styles = {
    backgroundColor: props.color ? props.color : '#ffffff',
    color: props.color ? '#ffffff' : '#384b54'
  }


  return (
    <StyledDoubleCard
      bordered={false}
      color={props.color}
      title={props.header}
      style={styles}>

      <div className="double-body">
        <div className="double-body-item">
          <StyledText>{props.compare['a'].value}</StyledText>
          <StyledLabel>{props.compare['a'].label}</StyledLabel>
        </div>
        <div className="double-body-item">
          <StyledText>{props.compare['b'].value}</StyledText>
          <StyledLabel>{props.compare['b'].label}</StyledLabel>
        </div>
      </div>

    </StyledDoubleCard>
  )

}

export default DoubleCard