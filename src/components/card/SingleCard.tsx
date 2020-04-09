import React, { FunctionComponent } from 'react';
import styled from 'styled-components'
import { Card, Icon } from 'antd';
import { RemCalc } from '../../utils/RemCalc';
import { device } from '../themes/device';
import CustonText from '../text/CustonText';
import { ReactComponent as IconArrowRight } from '../../assets/images/icon-arrow-rigth.svg'

interface SingleCardProps {
  name?: string;   // This one is coming from the router
  header?: any;
  headerExtra?: React.ReactNode;
  label?: string;
  icon?: string;
  type?: 'single' | 'cover' | 'hover' | 'square' | 'list';
  color?: string;
  backgroundColor?: string;
  children?: any,
  size?: any,
  style?: any
}

const StyledSingle: any = styled(Card)`
  &.ant-card {
    border-radius: ${RemCalc(5)};
    height: ${RemCalc(140)};
    margin-bottom: ${RemCalc(16)};
    
    @media ${device.md}{
      height: ${RemCalc(200)};
    }

    .ant-card{
      &-head{
        min-height: 0;
        border-bottom-color: rgba(255, 255, 255, 0.35);
        color: unset;
        padding: 0 ${RemCalc(8)};
        font-size: ${RemCalc(12)};
        
        @media ${device.md}{
          padding: 0 ${RemCalc(16)};
          font-size: ${RemCalc(14)};
        }

        &-wrapper{
          flex-wrap: wrap;
        }
        
        &-title{
          font-size: ${RemCalc(12)};
          padding: ${RemCalc(8)} 0;
          @media ${device.md}{
            font-size: ${RemCalc(14)};
            padding: ${RemCalc(16)} 0;
          }
        }
      }
      &-extra{
        color: unset;
        padding: 0;
        .anticon{
          svg{
            path{
              fill: unset;
            }
          }
        }
      }

      
      &-body {
        flex-direction: column;
        padding: ${RemCalc(20)};
        align-items: flex-start;
        display: flex;
        justify-content: center;
        height: ${RemCalc(100)};
        
        @media ${device.lg}{
          height: ${RemCalc(140)}
        }
      }
    }
  }  
  `

const StyledCover: any = styled(StyledSingle)`
  &.ant-card{
    display: flex;
    height: ${RemCalc(200)};
    flex-direction: row;
    &.row{
      flex-direction: row;
      align-items: center;
      justify-items: flex-start;
    }
    .ant-card-body {
      height: ${RemCalc(130)};
      .ant-typography{
        align-items: flex-start;
        line-height: 150%;
        flex-direction: column;
      }
    }
  }
  `
const StyledText = styled(CustonText)`
  &.ant-typography {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    height: 0;
    width:100%;
    justify-content: flex-end;
    margin-top: ${RemCalc(26)};
    .anticon{
      margin-left: ${RemCalc(5)};
      svg{
        path{
          fill: unset;
        }
      }
    }
    
    :hover > & > &{
      background-color: blue;
    }
  }
  `

const StyledHover: any = styled(StyledSingle)`
  background-color: #647279;
  color: #ffffff;
  &.ant-card {
    cursor: pointer;
    .ant-card-body {
      justify-content: flex-start;
      position: relative;
    }
  }

  &:hover{
    background-color: #c2c73a;
  }
`

const StyledSquare = styled(StyledSingle)`
  &.ant-card {
    
    height: ${RemCalc(120)};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${device.md}{
      height: ${RemCalc(150)};

    }

    .ant-card{
      padding: ${RemCalc(20)};
      &-head{
        padding: 0 ${RemCalc(10)};
        border: none;
      

        &-title{
          flex: none;
          width: 70%;
          white-space: normal;
          font-size: ${RemCalc(12)};
          /* padding-top: ${RemCalc(20)}; */
          padding-bottom: 0;
          
          @media ${device.md}{
            font-size: ${RemCalc(14)};
            
          }
          @media ${device.lg}{
            width: 80%;

          }
        }   
      }
      &-extra{
        display: flex;
        padding-top: ${RemCalc(10)};
        .anticon{
          padding: 0;
          font-size: ${RemCalc(16)};
          
          @media ${device.md}{
            padding-top: ${RemCalc(20)};
            font-size: ${RemCalc(22)};
            
          }
        }
      }
      &-body{
        height: auto;
        padding: ${RemCalc(10)};
        padding-top: 0;
      }

    }
  }
`

const StyledList: any = styled(StyledSingle)`
  &.ant-card {
    height: auto;
    cursor: pointer;
    min-height: ${RemCalc(340)};
    .ant-card-body {
      justify-content: flex-start;
      position: relative;
      padding-top: 0;
      height: auto;
    }
    .ant-list{
      width: 100%;
      padding-right: ${RemCalc(16)};

      &-items{
        > *{
          margin: 0;
          padding: ${RemCalc(10)} ${RemCalc(4)} ;
          border-bottom: solid 1px #f1f4f5;
          &:last-child{
            border-bottom: none;
          }
        }
      }
    }
  }
`

const SingleCard: React.SFC<SingleCardProps> = (props) => {
  console.log('props....', props.type)
  const styles = {
    backgroundColor: props.backgroundColor ? props.backgroundColor : '#ffffff',
    color: props.color ? props.color : '#ffffff',
    ...props.style
  };

  switch (props.type) {
    case 'list':
      return <StyledList
        color={props.color}
        title={props.header}
        style={styles}
        extra={props.headerExtra}>
        {props.children}
      </StyledList>
    case 'square':
      return <StyledSquare
        color={props.color}
        title={props.header}
        style={styles}
        extra={props.headerExtra}>
        {props.children}
      </StyledSquare>
    case 'cover':
      return <StyledCover
        color={props.color}
        title={props.header}
        style={styles}
        extra={props.headerExtra}>
        {props.children}
      </StyledCover>
    case 'hover':
      return <StyledHover
        color={props.color}
        title={props.header}
        extra={props.headerExtra}>
        {props.children}
        <StyledText>
          Ver alertas
          <Icon component={IconArrowRight as FunctionComponent}></Icon>
        </StyledText>
      </StyledHover>
    default:
      return <StyledSingle
        color={props.color}
        title={props.header}
        style={styles}
        extra={props.headerExtra}>
        {props.children}
      </StyledSingle>
  }
}

export default SingleCard