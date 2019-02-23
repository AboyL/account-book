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
class Home extends React.Component {
  // private currentTab: ViewTabTypes = ViewTabTypes.LIST
  state = {
    currentTab: ViewTabTypes.LIST
  }
  constructor(props: any) {
    super(props);
    this.state = {
      currentTab: ViewTabTypes.LIST
    };
  }
  public changeTabName(key: ViewTabTypes) {
    this.setState({
      currentTab: key
    })
  }
  public render() {
    return (
      <div className="App">
        <ViewTabs tabName={this.state.currentTab} onChange={this.changeTabName.bind(this)} />
        <AccountList item={accountList} />
      </div>
    );
  }
}

export default Home;
