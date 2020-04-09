import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Modal } from 'antd';
import { RemCalc } from '../../utils/RemCalc';

interface CustonModalProps {
  title?: any
  width?: string
  style?: any
  visible?: boolean
  footer?: any
  onCancel?: Function
}

const GlobalStyle = createGlobalStyle`
  .ant-modal{
    &.zoom-enter, &.zoom-leave{
      // animation-duration: 0;
      // animation-duration: 0;
      .ant-modal-close{
        opacity: 0;
      }
    }
    
    &-mask {
      background-color: #576870;
    }
    
    &-close{
      position: fixed;
      top: ${RemCalc(30)};
      right: ${RemCalc(30)};
      background-color: #ffffff;
      width: ${RemCalc(40)};
      height: ${RemCalc(40)};
      border-radius: 50%;
      animation: opacity 1.3ms linear;
      animation-delay: 3s;
      &-x{
        display: flex;
        height: auto;
        width: auto;
        justify-content: center;
        flex-direction: row;
      }
    }
  }
`
const StyledCustonModal: any = styled(Modal)`

  &.ant-modal {
    .ant-modal{
      &-content{
        color: #ffffff;
        background-color: #62757f;
        border-radius: ${RemCalc(6)};
        box-shadow: none;
        // position: unset;
        // margin-top: ${RemCalc(120)};
      }
      &-title{
        font-size: ${RemCalc(14)};
        line-height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .ant-typography{
          color: #ffffff;

        }
      }
      &-header, &-body, &-footer{
        padding: 0;
        background: none;
        color: unset;
        border: none;
      }
      &-header{
        padding: ${RemCalc(7)} ${RemCalc(15)};
        border-bottom: 1px solid #576870;
        margin: 1px;
        font-size: ${RemCalc(14)};
      }
      &-body{
        padding: 2px;
      }
      
      
      
    }
  }
`

const CustonModal: React.SFC<CustonModalProps> = (props) => {
  return (
    <StyledCustonModal
      title={props.title}
      width={props.width}
      style={props.style}
      visible={props.visible}
      footer={props.footer}
      onCancel={props.onCancel}
    >
      {props.children}
      <GlobalStyle />
    </StyledCustonModal>)
}
export default CustonModal