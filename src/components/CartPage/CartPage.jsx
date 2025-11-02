import { useOutletContext } from "react-router";

function CartPage() {
    const {cartList, setCartList } = useOutletContext();
    console.log(cartList)
  return (
    <>
    <h1>Your Cart</h1>
    </>
  
  )
}

export default CartPage
