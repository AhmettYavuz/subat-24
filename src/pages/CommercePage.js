import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const limit = 20;
const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const CommercePage = () => {
  const [page, setPage] = useState(1);

  const { isPending, error, data } = useQuery({
    queryKey: ["products", page, limit],
    queryFn: () =>
      axios
        .get("https://workintech-fe-ecommerce.onrender.com/products", {
          params: { offset: limit * (page - 1), limit },
        })
        .then((res) => res.data),
  });

  return (
    <div>
      <h1>E-Commerce Page</h1>
      <hr />
      <div className="products-container">
        <select
          onChange={(e) => {
            setPage(e.target.value);
          }}
          value={page}
        >
          {pages.map((p) => (
            <option value={p}>{p}</option>
          ))}
        </select>
        {data?.products?.map((product) => (
          <div>
            <img src={product.images[0]?.url} />
            {product.name}
          </div>
        ))}
      </div>
    </div>
  );
};
