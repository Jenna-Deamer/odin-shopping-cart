import { useOutletContext } from "react-router";
import CartItem from "./CartItem";
import styles from './Cart.module.css';

function CartPage() {
    const { cartList, setCartList, total } = useOutletContext();

    console.log(cartList)

    if (!cartList || cartList.length === 0) {
        return (
            <section>
                <h1>Your Cart</h1>
                <h2>Nothing in your cart</h2>
            </section>
        );
    }

    return (
        <section>
            <h1>Your Cart</h1>

            <div className={styles.cartWrapper}>
                <div className={styles.cartItemList}>
                    {cartList.map(product => (
                        <CartItem
                            key={product.id}
                            product={product}
                            cartList={cartList}
                            setCartList={setCartList}
                        />
                    ))}
                </div>

                <div className={styles.checkoutWrapper}>
                    <h2>Total ${total.toFixed(2)}</h2>
                    <button>Check Out</button>
                </div>
            </div>


        </section>

    )
}

export default CartPage
