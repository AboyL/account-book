import * as React from 'react';
import AccountItem, { AccountItemProps } from '../Item'
export interface AccountListProp {
  item: AccountItemProps[]
}
export default (props: AccountListProp) => {
  return (
    <div>
      {props.item.map(v => (<AccountItem key={v.id} {...v} />))}
    </div>
  )
}