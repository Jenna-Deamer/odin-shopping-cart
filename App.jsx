import { Outlet } from "react-router";
import NavMenu from "./src/components/Shared/Nav/NavMenu";
import useStoreProducts from "./src/utils/getProducts";

function App() {
  const { products, error, loading } = useStoreProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to load products</p>;

  console.log(products);

  return (
    <>
      <NavMenu />
      <main>
        <Outlet context={{ products }} />
      </main>
    </>
  );
}

export default App;
