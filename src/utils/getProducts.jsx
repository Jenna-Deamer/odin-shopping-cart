import { useEffect, useState } from "react";

const useStoreProducts = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) throw new Error('Network error');
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { products,setProducts, error, loading };
};

export default useStoreProducts;
