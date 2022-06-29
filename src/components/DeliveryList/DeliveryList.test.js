import React from 'react';
import ReactDOM from 'react-dom';
import DeliveryList from './DeliveryList';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DeliveryList />, div);
  ReactDOM.unmountComponentAtNode(div);
});