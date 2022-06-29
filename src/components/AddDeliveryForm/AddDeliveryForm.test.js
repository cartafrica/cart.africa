import React from 'react';
import ReactDOM from 'react-dom';
import AddDeliveryForm from './AddDeliveryForm';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddDeliveryForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});