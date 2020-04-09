import React from 'react'
import { Input } from 'antd'
import styled from 'styled-components';
import { RemCalc } from '../../utils/RemCalc';

const { Search } = Input;


const StyledInputSearch = styled(Search)`
  &.ant-input-search{
    .ant-input{
      &-wrapper{
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: flex-start;
        input{
          border: none;
          font-size: ${RemCalc(12)};
          font-weight: 500;
          &:focus{
            box-shadow: 0 0 0 2px rgba(0, 0, 0, .05);
          }
        }
      }
      &-group-addon{
        background: none;
        width: ${RemCalc(30)};
        margin: ${RemCalc(10)};
        .ant-input-search-button{
          width: inherit;
          border-top-left-radius: 50%;
          border-bottom-left-radius: 50%;
        }
      }
      &-search-button{
        background: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: ${RemCalc(30)};
        width: ${RemCalc(30)};
        border-radius: 50%;
        border: 1px solid #d9d9d9;

        .anticon{
          color: #576870;
          margin-top: ${RemCalc(1)};
          svg{
            path{
              fill: unset;
            }
          }
        }
      }
    }
  }
`

interface InputSearchProps {
  placeholder?: string
}

const InputSearch: React.SFC<InputSearchProps> = (props) => {
  return (
    <StyledInputSearch 
      enterButton
      placeholder={props.placeholder} 
       />
  )
}

export default InputSearch;

// ant-btn  ant-btn-primary