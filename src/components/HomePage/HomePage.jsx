import { Link } from "react-router-dom";
import styles from './Home.module.css';
function HomePage() {

    return (
        <>
            <h1>Welcome</h1>

            <div className={styles.categoriesContainer}>
                <Link to="/shop">Shop All</Link>
                <Link to="/shop/women">Shop Women's</Link>
                <Link to="/shop/men">Shop Men's</Link>

            </div>
        </>

    )
}

export default HomePage
