import React from 'react';
import ReactDOM from 'react-dom';
import Lost from './Lost';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Lost />, div);
  ReactDOM.unmountComponentAtNode(div);
});