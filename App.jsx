import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import NavMenu from "./src/components/Shared/Nav/NavMenu";
import useStoreProducts from "./src/utils/getProducts";

function App() {
    const { products, error, loading, setProducts } = useStoreProducts();
    const [cartList, setCartList] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotalItems(cartList.reduce((sum, product) => sum + (product.quantity || 0), 0));
        setTotal(cartList.reduce((sum, product) => sum + (product.price) * (product.quantity),0))
    }, [cartList]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Failed to load products</p>;

    return (
        <>
            <NavMenu  totalItems={totalItems}/>
            <main>
                <Outlet context={{ setProducts,products, cartList, setCartList, total }} />
            </main>
        </>
    );
}

export default App;
