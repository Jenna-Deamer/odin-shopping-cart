import { useState } from 'react';
import styles from './Cart.module.css';

export const CartItem = ({ product, setCartList, cartList }) => {
    const [quantity, setQuantity] = useState(product.quantity);

    const handleIncrement = () => {
        setQuantity((prev) => prev + 1);

        setCartList((prevCart) =>
            prevCart.map((item) =>
                // If this is the product being updated, return a new object with updated quantity
                item.id === product.id ?   // Otherwise, return the item unchanged in new arr
                { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);

            setCartList((prevCart) =>
                prevCart.map((item) =>

                    item.id === product.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            );
        }
    };

    const handleRemoveProduct = (id) =>{
        let filteredArr = cartList.filter(product => product.id !== id)
        setCartList(filteredArr)
    }

    return (
        <div data-testid="cartItem" className={styles.cartItem}>
            <div className={styles.cartHeader}>
                <h2>{product.title}</h2>
                <p>${product.price}</p>
            </div>

            <img src={product.image} alt={product.title} />

            <div className={styles.cartButtons}>
                <div className={styles.productQtyButtons}>
                    <button onClick={handleDecrement}>-</button>
                    <p>{quantity}</p>
                    <button onClick={handleIncrement}>+</button>
                </div>
                <button className={styles.removeButton} onClick={() => {handleRemoveProduct(product.id)}}>Remove</button>
            </div>
        </div>
    );
};

export default CartItem;
