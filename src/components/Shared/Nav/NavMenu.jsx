import styles from './NavMenu.module.css';
import { Link } from "react-router-dom";

function NavMenu({totalItems}) {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li className={styles.cart}><Link to="/cart">Cart <small>{totalItems}</small></Link></li>
            </ul>
        </nav>
    );
}

export default NavMenu;
