import * as React from 'react';
import { Row, Col, Icon } from 'antd';
export enum IncomeType {
  outcome,
  income
}
export interface IViewTabsProps {
  tabName: ViewTabTypes,
  onChange: (key: ViewTabTypes) => void
}
export enum ViewTabTypes {
  LIST = "LIST",
  CHART = "CHART"
}
const ActiveColor = '#4280f4'
const RowStyle: React.CSSProperties = {
  margin: '10px 0',
  borderBottom: `1px solid ${ActiveColor}`
}
const tabBaseStyle: React.CSSProperties = {
  boxSizing:'border-box',
  textAlign: 'center',
  padding: '10px 0',
  cursor: 'pointer',
}
const activeTabStyle: React.CSSProperties = {
  color: `${ActiveColor}`,
  outline: `1px solid ${ActiveColor}`,
  borderBottomWidth: '0',
  ...tabBaseStyle

}
const TabStyle: React.CSSProperties = {
  color: 'black',
  ...tabBaseStyle
}
const IconStyle: React.CSSProperties = {
  fontSize: '30px',
  marginRight: '10px',
  verticalAlign: 'bottom',
}

const getTabStyle = (tabName: ViewTabTypes, currentTabName: ViewTabTypes) => {
  return tabName === currentTabName ? activeTabStyle : TabStyle
}
const ViewTabs = (props: IViewTabsProps) => {
  return (
    <Row type="flex" gutter={20} style={RowStyle}>
      <Col span={12}
        style={getTabStyle(props.tabName, ViewTabTypes.LIST)}
        onClick={() => props.onChange(ViewTabTypes.LIST)}>
        <Icon type="sliders" theme="twoTone" style={IconStyle} />
        列表模式
      </Col>
      <Col span={12}
        style={getTabStyle(props.tabName, ViewTabTypes.CHART)}
        onClick={() => props.onChange(ViewTabTypes.CHART)}>
        <Icon type="pie-chart" theme="twoTone" style={IconStyle} />
        图表模式
      </Col>
    </Row>
  )
}
export default ViewTabs