import React from 'react';
import ReactDOM from 'react-dom';
import Onboarding from './Onboarding';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Onboarding />, div);
  ReactDOM.unmountComponentAtNode(div);
});