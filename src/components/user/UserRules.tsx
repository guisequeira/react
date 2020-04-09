import React from 'react'
import styled from 'styled-components';
import { RemCalc } from '../../utils/RemCalc';
import CustonText from '../text/CustonText';
import CustonTag from '../tag/CustonTag';
import { device } from '../themes/device';


const StyleRules = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${RemCalc(8)} ${RemCalc(16)};
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: ${RemCalc(20)};
  justify-content: center;
  @media ${device.md}{
    flex-direction: row;
    padding-top: ${RemCalc(20)};
  }
  `

const StyledWrapper = styled.div`
  display: flex;
  max-width: ${RemCalc(980)};
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  line-height: 100%;
  align-items: flex-start;
  margin-top: ${RemCalc(8)};

  @media ${device.md}{
    flex-direction: row;
    align-items: center;
  }

  .ant-typography{
    margin-right: ${RemCalc(20)};
  }
`
const StyledWrapperTag = styled.div`
  /* max-width: ${RemCalc(980)}; */
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  line-height: 100%;
  margin-top: ${RemCalc(16)};
  flex-wrap: wrap;
  @media ${device.md}{
    margin-top: 0;

  }
`
const UserRules: React.SFC<{}> = (props) => {

  return (
    <StyleRules>
      <StyledWrapper>
        <CustonText>Regras que o usuário caiu:</CustonText>
        <StyledWrapperTag>
          <CustonTag>Não está no histórico</CustonTag>
          <CustonTag>Dispositivo sem root</CustonTag>
          <CustonTag>SO sim</CustonTag>
        </StyledWrapperTag>
      </StyledWrapper>
    </StyleRules>
  )

}

export default UserRules;