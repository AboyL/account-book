import * as React from 'react';
import AccountItem, { IAccountItemProps } from '../Item'
export interface IAccountListProp {
  item: IAccountItemProps[]
}
const AccountList=(props: IAccountListProp) => {
  return (
    <div>
      {props.item.map(v => (<AccountItem key={v.id} {...v} />))}
    </div>
  )
}
export default AccountList