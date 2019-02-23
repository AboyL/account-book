import * as React from 'react';
import { AccountItemProps,IncomeType } from '../../components/common/Account/Item'
import AccountList from '../../components/common/Account/List'
const accountList: AccountItemProps[] = [{
  id: '1',
  title: '去云南旅游',
  price: 200,
  date: '2018-09-10',
  category:{
    id:'1',
    name:'旅游',
    type:IncomeType.income,
  }
},{
  id: '2',
  title: '去海南旅游',
  price: 400,
  date: '2018-09-10',
  category:{
    id:'1',
    name:'旅游',
    type:IncomeType.outcome,
  }
},]
class Home extends React.Component {
  public render() {
    return (
      <div className="App">
        <AccountList item={accountList} />
      </div>
    );
  }
}

export default Home;
