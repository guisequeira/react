import React from 'react'
import styled from 'styled-components'
import StyledRow from '../themes/StyledRow'
import { RemCalc } from '../../utils/RemCalc'

const StyledFooter = styled(StyledRow)`
  margin-bottom: ${RemCalc(40)};
  background-color: #ffffff;
  padding: ${RemCalc(20)} ${RemCalc(40)};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const TableFooter: React.SFC<{}> = (props) => {

  return (
    <StyledFooter>
      {props.children}
    </StyledFooter>
  )
}

export default TableFooter