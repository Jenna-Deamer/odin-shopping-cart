import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import NavMenu from "./src/components/Shared/Nav/NavMenu";
import useStoreProducts from "./src/utils/getProducts";

function App() {
    const { products, error, loading } = useStoreProducts();
    const [cartList, setCartList] = useState([]);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        setTotalItems(cartList.reduce((sum, product) => sum + (product.quantity || 0), 0));
    }, [cartList]);

    console.log(totalItems)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Failed to load products</p>;

    return (
        <>
            <NavMenu  totalItems={totalItems}/>
            <main>
                <Outlet context={{ products, cartList, setCartList }} />
            </main>
        </>
    );
}

export default App;
