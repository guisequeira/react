import React from 'react'
import AddressLastTransctionItem from './AddressLastTransctionItem'
import DisplayCard from '../card/DisplayCard';
import styled from 'styled-components';
import StyledTableRow from '../themes/StyledTableRow';

const StyledTransction = styled.div`
  overflow: hidden;
`
const AddressLastTransction: React.SFC<{}> = (props) => {

  return (
    <StyledTableRow>
      <DisplayCard
        title="Últimas transações">
        <StyledTransction>
          <AddressLastTransctionItem />
          <AddressLastTransctionItem />
        </StyledTransction>
      </DisplayCard>
    </StyledTableRow>

  )
}

export default AddressLastTransction;