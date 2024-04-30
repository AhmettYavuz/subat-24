import { useEffect } from "react";
import Nav from "../components/Nav";
import { Link } from "../components/Link";
import { Title } from "../components/Title";
import { Button } from "reactstrap";
import { MyButton } from "../components/MyButton";
import { MyLink } from "../components/MyLink";
import { useSelector } from "react-redux";

const Header = ({  productEkle, fetchProducts }) => {
  const { title, description } = useSelector((store) => store.global);
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
      <Title>{title}</Title>
      <p>{description}</p>
      <Nav />
      <MyButton onClick={productEkle}>+ Product Ekle</MyButton>
      <button onClick={fetchProducts} className="btn btn-primary w-[320px]">
        Ürünleri yükle
      </button>
      <MyLink href="http://duckduckgo.com">Test My Link</MyLink>
    </header>
  );
};

export default Header;
