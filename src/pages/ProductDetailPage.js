import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import { useAxios } from "../hooks/useAxios";

export const ProductDetailPage = () => {
  const [getProduct, product] = useAxios({ initialValue: {} });
  const { productId } = useParams();
  const history = useHistory();

  const geriGit = () => {
    history.goBack();
  };

  useEffect(() => {
    getProduct({
      endpoint:
        "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products/" + productId,
      reqType: "get",
    });
  }, [productId]);

  return (
    <div>
      <h1>
        <Button color="link" onClick={geriGit}>
          {"<"}
        </Button>
        Product Detail of {product.name}
      </h1>
      <hr />
      <img src={product.img} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};
