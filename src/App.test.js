import React from 'react';
import App from './App';
import Button from './components/Button';
import Display from './components/Display';
import { render } from '@testing-library/react';


test('Renders without crashing', () => {
  render(<App />);
})

test('🤩 you can customize you button!', () => {
  const{ getByTestId } = render(<Button />)
  getByTestId('custom-button');
})

test('😜there is some text!', () => {
  const{ getByText } = render(<Display />)
  getByText(/balls/i);
})