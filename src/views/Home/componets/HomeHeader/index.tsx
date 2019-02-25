import * as React from 'react';
import { Col, Row } from 'antd';
import MonthPicker from '../../../../components/base/MonthPicker'
import { HeaderWrapper } from './style'
interface IHomeHeaderProps {
  title: string,
  income: number,
  outcome: number
}
const HomeHeader = (props: IHomeHeaderProps) => {
  const [year, setYear] = React.useState(2019)
  const [month, setMoth] = React.useState(2)
  const onDateChange = (changeYear: number, changeMonth: number) => {
    setYear(changeYear)
    setMoth(changeMonth)
  }
  return (
    <HeaderWrapper>
      <header>
        {props.title}
      </header>
      <Row type='flex'>
        <Col span={12}>
          时间:<MonthPicker year={year} month={month} onchange={onDateChange} />
        </Col>
        <Col span={12}>
          <Row>
            <Col span={12}>收入:{props.income}</Col>
            <Col span={12}>支出:{props.outcome}</Col>
          </Row>
        </Col>
      </Row>
    </HeaderWrapper>
  )
}
export default HomeHeader