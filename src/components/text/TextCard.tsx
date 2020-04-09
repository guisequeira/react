import React from 'react'
import Text from 'antd/lib/typography/Text';
import styled from 'styled-components'
import { RemCalc } from '../../utils/RemCalc';
import { device } from '../themes/device';

interface TextCardProps {
  size?: 'small' | 'default' | 'large' | 'xlarge'
  justify?: string
  color?: string
  direction?: string;
  align?: string;
}

const DefaultText: any    = styled((props) => {
  return <Text {...props}/>
})`
  font-size: ${RemCalc(16)};
  justify-content: ${props => props.justify ? 'space-between' : 'flex-start'};
  width: 100%;
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  align-items: ${props => props.align ? props.align  : 'center'};
  line-height: 125%;
  font-size: ${RemCalc(16)};
  &.ant-typography {
    color: ${props => props.color ? props.color : 'unset'}
  }

  small{
    line-height: 220%;
    margin-left: ${RemCalc(10)};
    font-size: ${RemCalc(16)};
  }
  .anticon{
    svg{
      path{
        fill: unset
      }
    }
  }
  @media ${device.xl}{
    font-size: ${RemCalc(20)};
  }
`

const ExtraLargeText: any = styled(DefaultText)`
  font-size: ${RemCalc(40)};
  font-weight: 500;
  .anticon {
    font-size: ${RemCalc(25)};
  }
  @media ${device.lg}{
    font-size: ${RemCalc(60)};
    .anticon {
      font-size: ${RemCalc(35)};
    }
  }
  `

const LargeText: any      = styled(DefaultText)`
  font-size: ${RemCalc(24)};
  margin: ${RemCalc(15)} 0;
  font-weight: 500;
  
  @media ${device.xl}{
    font-size: ${RemCalc(32)};
  }

  @media ${device.xl}{
    font-size: ${RemCalc(40)};
  }
`

const SmallText: any      = styled(DefaultText)`
  font-size: ${RemCalc(12)};
  margin: ${RemCalc(12)} 0;
  @media ${device.xl}{
    font-size: ${RemCalc(12)};
  }
`

const TextCard: React.SFC<TextCardProps> = (props) => {

  if (props.size === 'small') {
    return <SmallText {...props}>{props.children}</SmallText>
  }else if (props.size === 'xlarge') {
    return <ExtraLargeText {...props}>{props.children}</ExtraLargeText>
  } else if(props.size === 'large'){
    return <LargeText {...props}>{props.children}</LargeText>
  }
  return <DefaultText {...props}>{props.children}</DefaultText>
}

TextCard.defaultProps = {
  size: 'default',
}

export default TextCard