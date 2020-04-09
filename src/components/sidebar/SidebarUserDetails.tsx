import React, { Component, FunctionComponent } from 'react'
import styled from 'styled-components'
import { Layout, Icon, Row, List } from 'antd';
import { ReactComponent as IconArrowDouble } from '../../assets/images/icon-arrow-doble.svg';
import { RemCalc } from '../../utils/RemCalc';
import CircleButton from '../button/CircleButton';
import { device } from '../themes/device';
import CustonTitle from '../text/CustonTitle';
import { ReactComponent as IconArrowLeft } from '../../assets/images/icon-arrow-left-small.svg';
import { ReactComponent as IconArrowRight } from '../../assets/images/icon-arrow-rigth-small.svg';
import CustonText from '../text/CustonText';

const { Sider } = Layout;

const StyledCircleButton = styled(CircleButton)`
  &.ant-btn{
    position: absolute;
    z-index: 99;
    top: ${RemCalc(380)};
    right: ${RemCalc(-20)};
    background-color: #384b54;
    color: #ffffff;
    box-shadow: 0 ${RemCalc(5)} ${RemCalc(15)} 0 rgba(0, 0, 0, 0.2);

    &:hover{
      background-color: #384b54;
    }
    .anticon{
      font-size: ${RemCalc(8)};
    }
  }
`

const StyledSidebar = styled(Sider)`
  
  display: flex;

  &.ant-layout-sider{
    background: #dde3e5;
    box-shadow: inset 0 ${RemCalc(5)} ${RemCalc(15)} 0 rgba(0, 0, 0, 0.2);
    padding-top: ${RemCalc(40)};
    height: 100%;

    @media ${device.lg}{
      padding-top: ${RemCalc(25)};
    }
    .ant-layout-sider{
      &-children{
        min-width: ${RemCalc(200)};
        width: 100%;
        /* padding: ${RemCalc(20)}; */
      }
    }
  }
`;

const StyledList = styled(List)`
  &.ant-list {
    width: 100%;
    .ant-list-items {
      > li {
        cursor: pointer;
        border-top: 1px solid #c7d1d5;
        border-bottom: none;
        padding: ${RemCalc(10)} ${RemCalc(20)};
        flex-direction: column;
        display: flex;
        align-items: flex-start;
        margin: 1px;
        /* transition: all 1s; */
        /* background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)); */
        background: linear-gradient(to right, rgba(221, 227, 229), rgb(221, 227, 229));
        transition: all .35s;
        background-position-x: ${RemCalc(-200)};
        background-size: 400% 100%;
        &:hover {
          background: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0.2), rgb(221, 227, 229));
          background-size: 100% 100%;
          background-position-x: 0;  
        }
        .ant-typography{
          margin: ${RemCalc(5)} 0;
          padding: 0;
        }
        span {
          margin-bottom: ${RemCalc(5)};
          margin-right: ${RemCalc(20)};
        }
      }
    }
  }
`

const data = [
  {
    uid: '749478502-482974930-9273…',
    type: 'Mobile',
    label: 'Há 2 horas'
  },
  {
    uid: '749478502-482974930-9273…',
    type: 'Mobile',
    label: 'Há 2 horas'
  },
  {
    uid: '749478502-482974930-9273…',
    type: 'Mobile',
    label: 'Há 2 horas'
  },
  {
    uid: '749478502-482974930-927382974930',
    type: 'Mobile',
    label: 'Há 2 horas'
  },
];

const WrapperTitle = styled.div`
  max-width: 50%;
  margin: 0 ${RemCalc(20)}
`

const WrapperPagination = styled(Row)`
  margin: ${RemCalc(14)};
  display: flex;
  align-items: center;
`

class SidebarUserDetails extends Component<{}> {
  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const styleCollapsedButton = {
      transform: this.state.collapsed ? 'rotateY(0)' : 'rotateY(180deg)',
      marginLeft: this.state.collapsed ? 0 : 'unset'
    }

    return (

      <StyledSidebar collapsed={this.state.collapsed} collapsedWidth={30}>
        <StyledCircleButton onClick={this.toggle} >
          <Icon component={IconArrowDouble as FunctionComponent} style={styleCollapsedButton} />
        </StyledCircleButton>
        {!this.state.collapsed &&
          <div>
            <WrapperTitle>
              <CustonTitle level={3}>
                Todos os usuários
              </CustonTitle>
            </WrapperTitle>
            <WrapperPagination>
              <CircleButton size="small" bg="#384b54" color="#ffffff">
                <Icon component={IconArrowLeft as FunctionComponent} />
              </CircleButton>
              <CustonText size="small">1 de 8</CustonText>
              <CircleButton size="small" bg="#384b54" color="#ffffff">
                <Icon component={IconArrowRight as FunctionComponent} />
              </CircleButton>
            </WrapperPagination>
            <Row>
              <StyledList
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item: any) => (
                  <List.Item>
                    <CustonText size="small">{item.uid}</CustonText>
                    <Row>
                      <CustonText size="small">{item.type}</CustonText>
                      <CustonText size="small">{item.label}</CustonText>
                    </Row>
                  </List.Item>
                )}
              />
            </Row>
          </div>
        }
      </StyledSidebar>
    )
  }
}

export default SidebarUserDetails