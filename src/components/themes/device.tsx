import { RemCalc } from "../../utils/RemCalc"

const size = {
  xs: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px'
}

export const device = {
  xs: `(min-width: ${size.xs} -1)`,
  sm: `(min-width: ${size.xs})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
  xxl: `(min-width: ${size.xxl})`
}

export const maxSize = {
  lg: RemCalc(808),
  xl: RemCalc(1020),
}