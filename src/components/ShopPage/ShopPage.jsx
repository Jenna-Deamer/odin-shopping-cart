import { useParams, Navigate } from 'react-router-dom';
import capitalizeFirstLetter from "../../utils/upperCaseFirstLetter"
import { useOutletContext } from "react-router";
import styles from './Shop.module.css';
import ProductCard from "./ProductCard";

function ShopPage() {

    let { category } = useParams();
    const { products, cartList, setCartList } = useOutletContext();
    let filteredProducts = products;

    if (category) {
        const lower = category.toLowerCase();

        if (/(?<!wo)\bmen('?s)?\b/.test(lower)) {
            filteredProducts = products.filter(p => /(?<!wo)\bmen('?s)?\b/i.test(p.category));
        } else if (/\bwomen('?s)?\b/.test(lower)) {
            filteredProducts = products.filter(p => /\bwomen('?s)?\b/i.test(p.category));
        } else {
            filteredProducts = products.filter(p => p.category === category);
        }
    }
    const formattedCategory = category ? capitalizeFirstLetter(category) : null;

    const handleAddToCart = (selectedProduct) => {
        setCartList(prevCart => [...prevCart, selectedProduct]);
    }

    return (
        <section>
            <h1>{formattedCategory ? `${formattedCategory} Products` : "All Products"}</h1>
            <div className={styles.productCardWrapper} data-testid='products-wrapper'>

                {filteredProducts.map(product => (
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
