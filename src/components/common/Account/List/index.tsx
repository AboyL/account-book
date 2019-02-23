import * as React from 'react';
import AccountItem, { IAccountItemProps } from '../Item'
export interface IAccountListProp {
  item: IAccountItemProps[]
}
export default (props: IAccountListProp) => {
  return (
    <div>
      {props.item.map(v => (<AccountItem key={v.id} {...v} />))}
    </div>
  )
}