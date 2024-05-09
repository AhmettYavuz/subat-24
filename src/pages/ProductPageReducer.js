
import { useEffect, useState } from "react";
import Counter from "../components/Counter";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../store/acitons/productActions";

// state veya prop değişirse React Component render edilir - yenilenir

const ProductPage = () => {
  const productsData = useSelector((store) => store.products);
  const dispatch = useDispatch();

  const [filterText, setFilterText] = useState("");
  // let filterText = "";

  const inputChangeHandler = (e) => {
    setFilterText(e.target.value);
    // filterText = e.target.value;
  };

  useEffect(() => {
    dispatch(getProductsAction());
  } , [])


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
