import React from 'react'
import styled from 'styled-components'

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const ContentHeader: React.SFC<{}> = (props) => {
  return (
    <StyledContent>
      {props.children}
    </StyledContent>
  )
}

export default ContentHeader