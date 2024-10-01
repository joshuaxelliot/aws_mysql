import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './page';
import '@testing-library/jest-dom';

describe('Home', () => {
  test('renders the header with the correct title', () => {
    render(<Home />);
    const titleElement = screen.getByText(/Chas Bank/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the "Skapa användare" link', () => {
    render(<Home />);
    const linkElement = screen.getByText(/Skapa användare/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/create-user');
  });
});
