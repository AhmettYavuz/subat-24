import { useEffect, useState } from "react";
import Counter from "../components/Counter";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../store/acitons/productActions";
import { useAxios } from "../hooks/useAxios";

// state veya prop değişirse React Component render edilir - yenilenir

const ProductPage = () => {
  const [fetchProducts, productsData, err, loading] = useAxios({
    initialValue: [],
  });

  const [filterText, setFilterText] = useState("");

  const inputChangeHandler = (e) => {
    setFilterText(e.target.value);
  };

  useEffect(() => {
    fetchProducts({
      endpoint: "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products",
      reqType: "get",
    });
  }, []);

  return (
    <>
      <h2>Products Page | filtered by {filterText}</h2>
      <div>
        <label>
          Ara
          <input
            type="text"
            onChange={inputChangeHandler}
            data-cy="filter-input"
          />
        </label>
      </div>
      <div className="products-container">
        {productsData
          .filter((product) =>
            product.name.toLowerCase().includes(filterText.toLowerCase())
          )
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </>
  );
};

export default ProductPage;
