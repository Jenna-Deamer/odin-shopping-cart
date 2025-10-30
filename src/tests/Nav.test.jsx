import { render, screen } from '@testing-library/react';
import { it, expect } from 'vitest';
import Nav from '../components/Shared/Nav/NavMenu'; 
import { BrowserRouter } from 'react-router-dom'; 

it('Nav should render three links', () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );

  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(3);
});