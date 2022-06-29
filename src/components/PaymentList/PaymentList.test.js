import React from 'react';
import ReactDOM from 'react-dom';
import PaymentList from './PaymentList';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PaymentList />, div);
  ReactDOM.unmountComponentAtNode(div);
});