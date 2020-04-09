import styled from "styled-components";
import { Row } from "antd";
import { maxSize } from "./device";

const StyledRow = styled(Row)`
  /* width: 100%; */
  width: 100%;
  margin-bottom: 0;
  /* width: ${maxSize.xl};  */
`

export default StyledRow;