import styled from 'styled-components'
import { ThemeColor, ZIndex1 } from '../../../constants/style';

export const MonthYearPickerWrapper = styled.div`
  position:relative;
  z-index:${ZIndex1};
`

export const PickerListWrpper = styled.div`
    position: absolute;
    margin: 10px;
    width: 300px;
    background: white;
    border: 1px solid ${ThemeColor};
    left: 0;
`

export const PickerListItem = styled.div`
  margin:10px;
  padding:5px 20px;
  border: 1px solid ${ThemeColor};
  text-align:center;
  cursor:pointer;
  &.active{
    background-color:${ThemeColor};
    color:white;
  }
`

