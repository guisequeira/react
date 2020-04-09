import React, { FunctionComponent } from 'react'
import { Typography, Icon, Dropdown, Row } from 'antd'
import CustonButton from '../button/CustonButton'
import { ReactComponent as IconDown } from '../../assets/images/icon-arrow-down.svg'
import { ReactComponent as IconPlus } from '../../assets/images/icon-plus.svg'
import { ReactComponent as IconFolder } from '../../assets/images/icon-folder.svg'
import styled from 'styled-components'
import { RemCalc } from '../../utils/RemCalc'
import { device } from '../themes/device'
import MenuTemplate from '../menu/SubMenuTemplate'
const { Title } = Typography
const { Text } = Typography

const StyledHeader = styled(Row)`
  &.ant-row{
    padding: ${RemCalc(40)} ${RemCalc(10)} ${RemCalc(20)};
    display: flex;
    align-items: flex-start;
    /* justify-content: space-between; */

    flex-direction: column;
    
    width: 100%;

    @media ${device.md}{
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
    }
  }

  .ant-typography {      
    margin-bottom: 0;
  }

  @media ${device.md}{
    flex-direction: row;
    align-items: center;
  }
  @media ${device.lg}{
    padding: ${RemCalc(40)} 0 ${RemCalc(20)};
  }
`

const StyledInfos = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  margin-bottom: ${RemCalc(8)};
  flex-direction: column;
  align-items: flex-start;
  .text{
    margin: 0;
  }
  @media ${device.xl}{
    flex-direction: row;
    align-items: flex-end;
    .text{
      margin: ${RemCalc(4)} ${RemCalc(16)};
    }
  }
`
const StyledFilters = styled.div`
  /* flex: 1; */
  
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-left: ${RemCalc(-8)};
  display: flex;
  flex-direction: row;

  .ant-btn:last-child{
    margin-right: 0;
  }
`

const DashboardHeader: React.SFC<{}> = (props) => {

  return (
    <StyledHeader>
      <StyledInfos>
        
        <Title level={2} className="title-h2">Dashboard</Title>
        <Text className="text">Empresa 1 + Empre asdsa 2</Text>
      </StyledInfos>
      <StyledFilters>
        
        <Dropdown overlay={MenuTemplate} trigger={['click']} placement="bottomRight">
          <CustonButton size="small">
            <span>Criar nova regra</span>
            <Icon component={IconPlus as FunctionComponent} />
          </CustonButton>
        </Dropdown>
        <Dropdown overlay={MenuTemplate} trigger={['click']} placement="bottomRight">
          <CustonButton size="small">
            <span>Período</span>
            <Icon type="down" />
          </CustonButton>
        </Dropdown>
        <Dropdown overlay={MenuTemplate} trigger={['click']} placement="bottomRight">
          <CustonButton size="small">
            <span>Filtrar por</span>
            <Icon component={IconDown as FunctionComponent} />
          </CustonButton>
        </Dropdown>
        <CustonButton type="primary" size="small">
          <Icon component={IconFolder as FunctionComponent} />
          <span>Exportar</span>
        </CustonButton>
      </StyledFilters>
    </StyledHeader>
  )
}

export default DashboardHeader;