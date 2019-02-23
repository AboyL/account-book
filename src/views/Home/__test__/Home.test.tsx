import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Home from '../index';

it('render home', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});
