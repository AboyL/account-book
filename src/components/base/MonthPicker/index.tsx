import * as React from 'react';
import { Button, Icon, Row, Col } from "antd";
import { MonthYearPickerWrapper, PickerListWrpper, PickerListItem } from "./style";
import * as _ from "lodash";
import { padLeftDate } from '../../../utils'
interface IMonthPickerProps {
  year: number,
  month: number,
  yearGap?: number,
  onchange: (year: number, month: number) => void
}

const getActiveClassName = (onw: number, current: number): string => onw === current ? 'active' : ''

const MonthPicker = ({ 
  year,
  month, 
  yearGap = 4, 
  onchange 
}: IMonthPickerProps) => {
  
  const [showPicker, setShowPicker] = React.useState<Boolean>(true)
  const [initYear, setInitYear] = React.useState(0)

  const pickDate = (year: number, month: number) => {
    onchange(year, month)
  }

  React.useEffect(() => {
    setInitYear(year)
  }, [true])

  return (
    <MonthYearPickerWrapper>
      <Button onClick={() => setShowPicker(!showPicker)}>
        {`${year}年 / ${month}月`}<Icon type="caret-down" />
      </Button>
      {showPicker ?
        <PickerListWrpper>
          <Row type="flex">
            <Col span={12}>
              {
                _.range(initYear - yearGap, initYear + 1).map(onwYear => (
                  <PickerListItem key={onwYear} className={getActiveClassName(onwYear, year)} onClick={() => pickDate(onwYear, month)}>{onwYear}年</PickerListItem>
                ))
              }
            </Col>
            <Col span={12}>
              {
                _.range(1, 12 + 1).map(onwMonth => (
                  <PickerListItem key={onwMonth} className={getActiveClassName(onwMonth, month)} onClick={() => { pickDate(year, onwMonth) }}>{padLeftDate(onwMonth)}月</PickerListItem>
                ))
              }
            </Col>
          </Row>
        </PickerListWrpper>
        : null
      }
    </MonthYearPickerWrapper>
  )
}
export default MonthPicker