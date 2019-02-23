import * as React from 'react';
import { Col, Row } from 'antd';

import { HeaderWrapper } from './style'
interface IHomeHeaderProps {
  title: string,
  income: number,
  outcome: number
}
const HomeHeader = (props: IHomeHeaderProps) => {
  return (
    <HeaderWrapper>
      <header>
        {props.title}
      </header>
      <Row type='flex'>
        <Col span={12}>
          时间:222
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