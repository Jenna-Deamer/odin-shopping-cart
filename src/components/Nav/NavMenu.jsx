import styles from './NavMenu.module.css';
import { Link } from "react-router";

function NavMenu() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link tp="/">Store Name</Link></li>
        <li><Link to="shop">Shop</Link></li>
        <li className={styles.cart}><Link href="cart">Cart</Link></li>
      </ul>
    </nav>
  );
}

export default NavMenu;
