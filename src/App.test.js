import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { allCategories } from './App';


test('renders app title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Servicios disponibles/i);
  expect(titleElement).toBeInTheDocument();
});

describe ('Accordion', () => {

  it('should have as many children as services available', () => {
    const testCategories = [
      {"Id": "1", "Caption": "a"},
      {"Id": "2", "Caption": "b"},
      {"Id": "3", "Caption": "c"}
    ]
    render(<App />);

    testCategories.map(item => screen.findByDisplayValue(item.Caption))
  })
});