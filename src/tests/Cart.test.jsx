import { render, screen } from '@testing-library/react';
import { it, expect, vi, describe } from 'vitest';
import userEvent from '@testing-library/user-event';
// import CartPage from '../components/CartPage/CartPage';
import CartItem from '../components/CartPage/CartItem';

describe('Cart button controls', () => {
    // Mock cart list
    const cartList = [
        {
            id: 1,
            title: "Product 1",
            price: 15.99,
            quantity: 1,
            category: "category 1",
            description: "Desc for product 1",
            image: "https://fakestoreapi.com/img/placeholder1.png",
            rating: {
                rate: 4.0,
                count: 100
            }
        },
        {
            id: 2,
            title: "Product 2",
            price: 25.99,
            quantity: 1,
            category: "category 2",
            description: "Desc for product 2",
            image: "https://fakestoreapi.com/img/placeholder2.png",
            rating: {
                rate: 3.5,
                count: 80
            }
        },
        {
            id: 3,
            title: "Product 3",
            price: 35.99,
            quantity: 1,
            category: "category 3",
            description: "Desc for product 3",
            image: "https://fakestoreapi.com/img/placeholder3.png",
            rating: {
                rate: 4.8,
                count: 150
            }
        },
        {
            id: 4,
            title: "Product 4",
            price: 45.99,
            quantity: 1,
            category: "category 4",
            description: "Desc for product 4",
            image: "https://fakestoreapi.com/img/placeholder4.png",
            rating: {
                rate: 4.2,
                count: 200
            }
        }
    ];
    const mockSetCartList = vi.fn();
    const renderComponent = (product = cartList[0]) =>
        render(<CartItem product={product} cartList={cartList} setCartList={mockSetCartList} />)

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

    it('Remove product from cart', async () => {
        renderComponent()

        const removeButton = screen.getByRole('button', { name: 'Remove' })
        // const cartItems = screen.getAllByTestId('cartItem');
        await userEvent.click(removeButton)

        expect(mockSetCartList).toHaveBeenCalled()
        // expect(cartItems).toHaveLength(0)
    })

})
