import { useEffect } from "react";
import styles from "./ProductCard.module.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product, dataCek }) => {
  console.log("PRODUCT CARD PROPS: ", { product, dataCek });
  const { img, name, description, price } = product;

  // componentDidMount
  useEffect(() => {
    console.log("ComponentDidMount: ProductCard");
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log("ComponentDidUpdate: ProductCard");
  });

  return (
    <div className={`product-card ${styles.card}`} title={product.id}>
      <img src={img} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <Button
        color="primary"
        onClick={() => dataCek(name + " ürünü satın alındı!")}
      >
        Satın Al
      </Button>
      <Link
        className="btn btn-primary ms-1"
        to={"/product-detail/" + product.id}
      >
        İncele
      </Link>
      <Link className="btn btn-warning ms-1" to={"/product-form/" + product.id}>
        Düzenle
      </Link>
    </div>
  );
};

export default ProductCard;
