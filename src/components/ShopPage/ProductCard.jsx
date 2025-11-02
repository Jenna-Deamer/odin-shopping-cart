import { useState } from "react";
import styles from './Shop.module.css';


export const ProductCard = ({ product, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDecrement = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <div className={styles.productCard} data-testid='product-card'>
            <img src={product.image} alt={product.title} />
            <div className={styles.productDetails}>
                <h2>{product.title}</h2>
                <p>${product.price}</p>
            </div>

            <div className={styles.productButtons}>
                <div className={styles.productQtyButtons}>
                    <button onClick={handleDecrement}>-</button>
                    <p>{quantity}</p>
                    <button onClick={handleIncrement}>+</button>
                </div>
                <button className={styles.addCartBtn} onClick={() => onAddToCart({...product, quantity})}>
                    Add to Cart
                </button>
            </div>
        </div>

    )
}

export default ProductCard
