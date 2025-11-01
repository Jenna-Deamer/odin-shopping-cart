import { useParams, Navigate } from 'react-router-dom';
import { validCategories } from "./categories";
import capitalizeFirstLetter from "../../utils/upperCaseFirstLetter"
import { useOutletContext } from "react-router";
import styles from './Shop.module.css';


function ShopPage() {
    let { category } = useParams();
    const { products } = useOutletContext();
    if (category && !validCategories.includes(category)) {
        return <Navigate to='/error' />
    }

    if (category) {
        category = capitalizeFirstLetter(category);
    }
    return (
        <section>
            <h1>{category ? `${category} Products` : "All Products"}</h1>
            <section data-testid="products-wrapper" className={styles.productCardWrapper}>
                {products.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                        <img src={product.image} />
                        <div className={styles.productDetails}>
                            <h2>{product.title}</h2>
                            <p>${product.price}</p>
                        </div>

                        <div className={styles.productButtons}>
                            <div className={styles.productQtyButtons}>
                                <button>-</button>
                                <p>1</p>
                                <button>+</button>
                            </div>
                            <button className={styles.addCartBtn}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </section>
        </section>

    )
}

export default ShopPage
