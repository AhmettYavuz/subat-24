import { useEffect } from "react";
import Nav from "../components/Nav";
import { Link } from "../components/Link";
import { Title } from "../components/Title";
import { Button } from "reactstrap";

const Header = ({ productsCount, productEkle, fetchProducts }) => {
  // component Did Mount!
  useEffect(() => {
    console.log("Header componenti oluşturuldu ve ekrana eklendi");
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log("ComponentDidUpdate: Header");
  });

  return (
    <header className="app-header">
      <Title>Reactet Şubat</Title>
      <Nav productsCount={productsCount} />
      <button onClick={productEkle} style={{ borderRadius: "2rem" }}>
        + Product Ekle
      </button>
      <button onClick={fetchProducts} className="btn btn-primary">
        Ürünleri yükle
      </button>
      <Button color="primary">Ürünleri yükle</Button>
      <Link>test linki</Link>
    </header>
  );
};

export default Header;
