import * as React from 'react'
import HomeHeader, { IHomeHeaderProps } from '../HomeHeader'
import { mount, configure } from "enzyme";
import * as Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
const homeHeaderProps: IHomeHeaderProps = {
  title: 'test',
  outcome: 2000,
  income: 1000
}

describe('home header', () => {
  const wrapper = mount(<HomeHeader {...homeHeaderProps} />)
  it('income and outcome', () => {
    expect(wrapper.find('.outcome').first().text()).toBe('支出:' + homeHeaderProps.outcome)
    expect(wrapper.find('.income').first().text()).toBe('收入:' + homeHeaderProps.income)
  })
  it('title', () => {
    expect(wrapper.find('.title').text()).toBe(homeHeaderProps.title)
  })
})