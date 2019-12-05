import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Checkinf for both teams', () => {
  const { getByTestId } = render(<App />);
  
  getByTestId(/homeTeam/i);
  getByTestId(/awayTeam/i);
});

test('Checking for the dashboard', () => {
  const { getByTestId } = render(<App />);

  getByTestId(/dashboard/i)
})

test('Testing for at bat stats', () => {
  const { getByTestId } = render(<App />);

  getByTestId(/atbatstats/i)
})