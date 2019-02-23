import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './views/Home'

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <>
        <Route path='/' exact={true} component={Home}/>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
