import { Outlet } from "react-router";
import { useState } from "react";
import NavMenu from "./src/components/Shared/Nav/NavMenu";
import useStoreProducts from "./src/utils/getProducts";

function App() {
    const { products, error, loading } = useStoreProducts();
    const [cartList, setCartList] = useState([]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Failed to load products</p>;

    return (
        <>
            <NavMenu />
            <main>
                <Outlet context={{ products, cartList, setCartList }} />
            </main>
        </>
    );
}

export default App;
