import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Icon } from 'antd';

import { ReactComponent as IconUser } from '../../assets/images/icon-user.svg'
import { ReactComponent as IconDown } from '../../assets/images/icon-arrow-down.svg'
import { RemCalc } from '../../utils/RemCalc';
import CustonButton from './CustonButton';


interface UserButtonProps{
  name?: string;
}
const StyledUserButton: any = styled(CustonButton)`
  &.ant-btn {
    border-color: ${props => props.theme.colors.light[0]};
    height: ${RemCalc(30)};

    &:hover, &:focus{
      border-color: ${props =>props.theme.colors.gray[0]}
    }
  }
`

const UserButton: React.SFC<UserButtonProps> = (props) => {
  return (
    <StyledUserButton {...props}>
      <Icon component={IconUser as FunctionComponent} />
      <span>{props.name}</span>
      <Icon component={IconDown as FunctionComponent} />
    </StyledUserButton>)
}
export default UserButton