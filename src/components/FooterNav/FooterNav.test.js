import React from 'react';
import ReactDOM from 'react-dom';
import FooterNav from './FooterNav';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FooterNav />, div);
  ReactDOM.unmountComponentAtNode(div);
});