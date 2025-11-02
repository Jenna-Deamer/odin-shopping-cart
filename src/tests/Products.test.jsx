import { render, within } from '@testing-library/react';
import { it, expect, vi } from 'vitest';
import ShopPage from '../components/ShopPage/ShopPage';

// Mock products
const mockProducts = [];
for (let i = 0; i < 20; i++) {
  mockProducts.push({
    id: i,
    title: `Product ${i + 1}`,
    price: `$${i + 1}`,
    image: 'https://via.placeholder.com/150',
  });
}

// Mock useOutletContext to fake parent context
// Makes the comp see products as if it comes from Outlet avoiding typeErrors
vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useOutletContext: () => ({ products: mockProducts }),
  };
});

it('/Shop should render 20 product cards', () => {
  const { getByTestId } = render(
      <ShopPage />
  );

  const wrapper = getByTestId('products-wrapper');
  const productCards = within(wrapper).getAllByText(/Product/i);
  expect(productCards).toHaveLength(20);
});


it('increment should + qty', () => {

})


it('decrement should - qty', () => {

})


it('Add to cart should add product to cartList with accurate qty', () => {

})