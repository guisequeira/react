import React, { FunctionComponent } from 'react'
import { Layout, Typography, Row, List, Icon } from 'antd'
import styled from 'styled-components';
import CustonTitle from '../text/CustonTitle';
import { RemCalc } from '../../utils/RemCalc';
import CustonText from '../text/CustonText';
import CircleButton from '../button/CircleButton';
import { ReactComponent as IconArrowLeft } from '../../assets/images/icon-arrow-left-small.svg';
import { ReactComponent as IconArrowRight } from '../../assets/images/icon-arrow-rigth-small.svg';

const { Sider } = Layout;
const { Text } = Typography;

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

const StyledSidebar = styled(Sider)`
  &.ant-layout-sider{    
    margin-top: ${RemCalc(20)};
    background-color: #ffffff;
    border-radius: ${RemCalc(4)};
    color: #384b54;
    .ant-typography{
      width: 100%;
      padding: ${RemCalc(20)};
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`

const StyledRowPagination = styled(Row)`
  margin: ${RemCalc(14)};
  display: flex;
  align-items: center;
`

const StyledList = styled(List)`
&.ant-list {
  width: 100%;
  .ant-list-items {
    > li {
      border-top: 1px solid #f1f4f5;
      border-bottom: none;
      padding: ${RemCalc(10)} ${RemCalc(20)};
      // width: 100%;
      flex-direction: column;
      display: flex;
      align-items: flex-start;
      margin: 1px;

      &:hover {
        background-color: #f1f4f5;
      }
      .ant-typography{
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

const UserSidebar: React.SFC<{}> = (props) => {


  return (
    <StyledSidebar width={'100%'}>
      <CustonTitle level={3}>
        Transações de gustavo@tempest.com.br
      </CustonTitle>
      <StyledRowPagination>
        <CircleButton size="small">
          <Icon component={IconArrowLeft as FunctionComponent} />
        </CircleButton>
        <Text>1 de 8</Text>
        <CircleButton size="small">
          <Icon component={IconArrowRight as FunctionComponent} />
        </CircleButton>
      </StyledRowPagination>
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
    </StyledSidebar>
  )
}

export default UserSidebar
