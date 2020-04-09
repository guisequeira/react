
import React, { FunctionComponent } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Button, Layout, Icon } from 'antd';
import UserRules from './UserRules';
import { ReactComponent as IconArrowLeft } from '../../assets/images/icon-arrow-left.svg';
import { ReactComponent as IconArrowRight } from '../../assets/images/icon-arrow-rigth.svg';
import styled from 'styled-components';
import { RemCalc } from '../../utils/RemCalc';
import CircleButton from '../button/CircleButton';
import CustonText from '../text/CustonText';
import CustonTitle from '../text/CustonTitle';
import { device } from '../themes/device';

const { Header } = Layout;



const StyledHeader = styled(Header)`
  &.ant-layout-header{
    background-color: #c2c73a;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${RemCalc(20)} ${RemCalc(30)} 0;
    margin: 0;
    margin-bottom: ${RemCalc(20)};
    height: auto;
    width: 100%;

    @media ${device.lg}{
      padding: ${RemCalc(20)} 0 ${RemCalc(24)};
    }
  }
`

const StyledWrapper = styled.div`
  max-width: ${RemCalc(980)};
  padding: 0 ${RemCalc(16)};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  
  @media ${device.md}{
    flex-direction: row;
    align-items: center;
  }
  
  @media ${device.xl}{
    padding: 0;
  }
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #ffffff;

  .ant-btn{
    margin-left: ${RemCalc(-10)};
  }
`
interface UserHeaderProps extends RouteComponentProps{
  rules?:any
  history: any;
}

const UserHeader: React.SFC<UserHeaderProps> = (props) => {
  let rules;
  if (props.rules) {
    rules = <UserRules />
  } else {
    rules = ''
  }
  return (
    <StyledHeader>
      <StyledWrapper>
        <StyledContent>
          <CircleButton onClick={(e:any) => props.history.goBack()}>
            <Icon component={IconArrowLeft as FunctionComponent} />
          </CircleButton>
          <CustonText>
            Transações do usuário do
          </CustonText>
          <CustonTitle level={2}>Gustavo@tempest.com.br</CustonTitle>
          <CustonText >Avenida Lavandisca 777 - Moema São Paulo Brasil - 041110 11</CustonText>
        </StyledContent>
        <div>
          <Button>
            <span>Saúde Alta</span>
            <Icon component={IconArrowRight as FunctionComponent} />
          </Button>
        </div>
      </StyledWrapper>
      {rules}
    </StyledHeader>
  );
}

export default withRouter(UserHeader);