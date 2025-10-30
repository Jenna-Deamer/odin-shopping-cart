import { useParams, Navigate } from 'react-router-dom';
import { validCategories } from "./categories";
import capitalizeFirstLetter from "../../utils/upperCaseFirstLetter"

function ShopPage() {
    let { category } = useParams();
    if (category && !validCategories.includes(category)) {
        return <Navigate to='/error' />
    }

    if (category) {
        category = capitalizeFirstLetter(category);
    }

    return (
        <div>
            <h1>{category ? `${category} Products` : "All Products"}</h1>
        </div>

    )
}

export default ShopPage
