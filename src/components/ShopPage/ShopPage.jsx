import { useParams, Navigate } from 'react-router-dom';
import { validCategories } from "./categories";
import capitalizeFirstLetter from "../../utils/upperCaseFirstLetter"
import { useOutletContext } from "react-router";
import styles from './Shop.module.css';
import ProductCard from "./ProductCard";


function ShopPage() {
    let { category } = useParams();
    const { products, cartList, setCartList } = useOutletContext();

    if (category && !validCategories.includes(category)) {
        return <Navigate to='/error' />
    }

    if (category) {
        category = capitalizeFirstLetter(category);
    }

    const handleAddToCart = (selectedProduct) => {
        setCartList(prevCart => [...prevCart, selectedProduct]);
    }

    return (
        <section>
            <h1>{category ? `${category} Products` : "All Products"}</h1>
            <div className={styles.productCardWrapper} data-testid='products-wrapper'>

                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </section>
    )
}

export default ShopPage
