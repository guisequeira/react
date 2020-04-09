import React from 'react'
import styled from 'styled-components'
import { Table } from 'antd'
import { RemCalc } from '../../utils/RemCalc';
import { TableProps } from 'antd/lib/table';

interface CustonTableProps extends TableProps<any> {
  dataSource?: any
  columns?: any
  scroll?: any
  expandIcon?: any
  expandIconAsCell?: any
  expandedRowRender?: any
  onRow?: any
  pagination?: any
  rowKey?: any

}

const StyledTable = styled(Table)`
  background-color: #ffffff;
  /* margin-bottom: ${RemCalc(20)}; */
    width:100%;
  .ant-checkbox-indeterminate {
    .ant-checkbox-inner{
      &::after{
        background-color: #576870;
      }
    }
  }
  .ant-checkbox {
    .ant-checkbox-inner{
      border-color: #bcc3c6;
      width: ${RemCalc(20)};
      height: ${RemCalc(20)};
    }
    :hover{
      border-color: #576870;
    }
    
    &-checked {
      border: none;
      .ant-checkbox-inner{
        width: ${RemCalc(20)};
        height: ${RemCalc(20)};
        border-color: #576870;
        background-color: #576870;
        color: #ffffff;
        
        &::after{
          /* left: 50%; */
          transform: rotate(45deg) scale(1) translate(-30%,-70%);
          /* width: ${RemCalc(2)}; */
          /* height: ${RemCalc(2)}; */
        }


      }
    }
  }
  .ant-table {

    margin: 0;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;

    &-wrapper{
      width:100%;
    }

    .ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td{
      background-color: #ffffff;
    }
    
    

    &-row-expand-icon{
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;
      background-color: #f1f4f5;
      border-radius: 50%;
      height: ${RemCalc(20)};
      width: ${RemCalc(20)};
      &:hover, &:focus{
        color: #bcc3c6;
      }
      /* background-color: red; */
    }

    &-expanded-row{
      background-color: #fbfbfb;
      .ant-card:last-child{
        margin-bottom: ${RemCalc(20)};
      }
      td{
        padding-left: 0;
        padding-right: ${RemCalc(32)};
        &:first-child{
          /* display: none; */
        }
      }

    }

    &-thead{
      border-bottom: 1px solid #f1f4f5;
      > tr > th {
        background-color: #ffffff;
        border-bottom: 1px solid #f1f4f5;
        font-size: ${RemCalc(8)};
        letter-spacing: ${RemCalc(0.6)};
        color: #bcc3c6;
        white-space: nowrap;
        text-transform: uppercase;
        padding: ${RemCalc(20)} ${RemCalc(20)} ${RemCalc(10)};
        &:first-child{
          padding-left: ${RemCalc(30)};
        }
        
      }
    }
    &-line {
      flex-direction: column;
    }
    &-row {
      border-bottom: 1px solid #f1f4f5;
      font-size: ${RemCalc(10)};
      &:hover{
        background-color: ${props => props.theme.colors.yellow}
      }

      > td{
        background: none;
        &:first-child {
          padding-left: ${RemCalc(30)};
          /* padding-left: 0; */
        }
        &:last-child{
          padding-right: ${RemCalc(30)};
        }
      }
    }
  }
`

const CustonTable: React.SFC<CustonTableProps> = (props) => {
  return (
    <StyledTable
      {...props}
    >{props.children}</StyledTable>
  )
}

export default CustonTable