import * as React from 'react';
import { IAccountItemProps, IncomeType } from '../../components/common/Account/Item'
import AccountList from '../../components/common/Account/List'
import ViewTabs, { ViewTabTypes } from '../../components/base/ViewTabs'
const accountList: IAccountItemProps[] = [{
  id: '1',
  title: '去云南旅游',
  price: 200,
  date: '2018-09-10',
  category: {
    id: '1',
    name: '旅游',
    type: IncomeType.income,
  }
}, {
  id: '2',
  title: '去海南旅游',
  price: 400,
  date: '2018-09-10',
  category: {
    id: '1',
    name: '旅游',
    type: IncomeType.outcome,
  }
},]
const Home = () => {
  const [currentTab, setCurrentTab] = React.useState(ViewTabTypes.LIST)
  return (
    <div className="App">
      <ViewTabs tabName={currentTab} onChange={setCurrentTab} />
      <AccountList item={accountList} />
    </div>
  );
}

export default Home;
