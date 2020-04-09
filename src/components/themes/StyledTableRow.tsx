import styled from "styled-components";
import { Row } from "antd";
import { maxSize } from "./device";
import { RemCalc } from "../../utils/RemCalc";

const StyledTableRow = styled(Row)`
  /* width: 100%; */
  width: 100%;
  padding: 0 ${RemCalc(8)};
  margin-bottom: ${RemCalc(30)};
  /* width: ${maxSize.xl};  */
`

export default StyledTableRow;