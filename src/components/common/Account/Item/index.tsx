import * as React from 'react';
import {  Col, Row,Icon } from 'antd';
import {Item} from './style'
export enum IncomeType {
  outcome,
  income
}
export interface IAccountItemProps {
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
export default (props: IAccountItemProps) => {
  const { title, price, date } = props
  const { type, name } = props.category
  console.log('z')
  return (
    <Item>
      <Row type="flex" justify="space-between" className="item-row">
        <Col span={2} className="item-col">{name}</Col>
        <Col span={8} className="item-col">{title}</Col>
        <Col span={4} className="item-col">{type === IncomeType.income ? price : -price}</Col>
        <Col span={4} className="item-col">{date}</Col>
        <Col span={6} className="item-col">
          <Icon type="edit" theme="twoTone" className="opreate-icon" />
          <Icon type="delete" theme="twoTone" className="opreate-icon"/>
        </Col>
      </Row>
    </Item>
  )
}