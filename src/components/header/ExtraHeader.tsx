import React from 'react'
import styled from 'styled-components'
import { RemCalc } from '../../utils/RemCalc'
import { device } from '../themes/device'

const StyledTag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: ${RemCalc(-5)};
  
  
  @media ${device.md}{
    justify-content: flex-end;
    
    > .ant-btn:first-child {
      margin-left: ${RemCalc(-5)};
    }
  }
`

const ExtraHeader: React.SFC<{}> = (props) => {
  return (
    <StyledTag>
      {props.children}
    </StyledTag>
  )
}

export default ExtraHeader