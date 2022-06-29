import React from 'react';
import ReactDOM from 'react-dom';
import AccountHeader from './AccountHeader';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});