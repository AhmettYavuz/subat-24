import { useContext, useEffect } from "react";
import Nav from "../components/Nav";
import { Title } from "../components/Title";
import { MyButton } from "../components/MyButton";
import { MyLink } from "../components/MyLink";
import { useSelector } from "react-redux";
import { GlobalContext } from "../context/globalContextProvider";

const Header = ({ productEkle, fetchProducts }) => {
  const { title, description } = useSelector((store) => store.global);

  const { lang, theme } = useContext(GlobalContext);
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
      <div>
        <GlobalContext.Consumer>
          {(globalContext) => (
            <div>
              <span>Lang: {globalContext.lang}</span>
              <span>Theme: {globalContext.theme}</span>
            </div>
          )}
        </GlobalContext.Consumer>
      </div>
      <div>
        <span>Lang: {lang}</span>
        <span>Theme: {theme}</span>
      </div>
    </header>
  );
};

export default Header;
