import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "reactstrap";

export const ProductDetailPage = ({ productsData }) => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const history = useHistory();

  console.log("Product id: ", productId);

  const geriGit = () => {
    history.goBack();
  };

  useEffect(() => {
    productsData.forEach((p) => {
      if (p.id == productId) {
        setProduct(p);
      }
    });
  }, [productsData, productId]);

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
