import { useParams, Navigate } from 'react-router-dom';
import { validCategories } from "./categories";
import capitalizeFirstLetter from "../../utils/upperCaseFirstLetter"
import { useOutletContext } from "react-router";

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
            <section data-testid="products-wrapper">
                {products.map((product) => (
                    <div key={product.id}>
                        <div className='product-details'>
                            <p>{product.title}</p>
                            <p>{product.price}</p>
                        </div>

                        <img src={product.image} />

                    </div>
                ))}
            </section>
        </section>

    )
}

export default ShopPage
