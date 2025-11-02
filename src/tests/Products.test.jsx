import { render, within, screen } from '@testing-library/react';
import { it, expect, vi, describe } from 'vitest';
import ShopPage from '../components/ShopPage/ShopPage';
import ProductCard from '../components/ShopPage/ProductCard';
import userEvent from '@testing-library/user-event';

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
    const productCards = within(wrapper).getAllByTestId('product-card')
    expect(productCards).toHaveLength(20);
});


const onAddToCart = vi.fn();

describe('ProductCard button controls', () => {
    const mockProduct = {
        id: 1,
        title: 'Sample Product',
        price: 10.99,
        image: 'https://via.placeholder.com/150'
    }

    const renderComponent = () =>
        render(<ProductCard product={mockProduct} onAddToCart={onAddToCart} />)

    it('increment should update qty displayed in <p>', async () => {
        renderComponent()

        const incrementButton = screen.getByRole('button', { name: '+' })
        const quantityText = screen.getByText('1')

        await userEvent.click(incrementButton)
        expect(quantityText.textContent).toBe('2')
    })

    it('decrement should update qty displayed in <p>', async () => {
        renderComponent()

        const decrementButton = screen.getByRole('button', { name: '-' })
        const quantityText = screen.getByText('1')

        await userEvent.click(decrementButton)

        expect(quantityText.textContent).toBe('1') // stays at min value
    })


    it('Add to cart should add product to cartList with accurate qty', async () => {
        renderComponent();

        const addToCartBtn = screen.getByRole('button', {name: 'Add to Cart'})

        await userEvent.click(addToCartBtn)
        expect(onAddToCart).toHaveBeenCalledWith({...mockProduct, quantity: 1})
    })
})

