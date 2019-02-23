import * as React from 'react';
import { Button, Col, Row } from 'antd';
// import {Item} from './style.js'
export enum IncomeType {
  outcome,
  income
}
export interface AccountItemProps {
  id: string,
  title: string,
  price: number,
  date: string,
  category: {
    type: IncomeType,
    id: string,
    name: string,
  }
}
export default (props: AccountItemProps) => {
  const { title, price, date } = props
  const { type, name } = props.category
  console.log('z')
  return (
    <div>
      <Row>
        <Col span={2}>{name}</Col>
        <Col span={8}>{title}</Col>
        <Col span={4}>{type === IncomeType.income ? price : -price}</Col>
        <Col span={4}>{date}</Col>
        <Col span={6}>
          <Button type="primary">增加</Button>
          <Button type="danger">减少</Button>
        </Col>
      </Row>
    </div>
  )
}