import { useContext, useEffect } from "react";
import Nav from "../components/Nav";
import { Title } from "../components/Title";
import { MyButton } from "../components/MyButton";
import { MyLink } from "../components/MyLink";
import { useSelector } from "react-redux";
import { GlobalContext } from "../context/globalContextProvider";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Header = ({ productEkle, fetchProducts }) => {
  const { title, description } = useSelector((store) => store.global);
  const user = useSelector((s) => s.global.user);
  const { lang, theme } = useContext(GlobalContext);

  const [localTheme, setLocalTheme] = useLocalStorage("local-theme", "light");
  const [localLang, setLocalLang] = useLocalStorage("local-lang", "tr");

  const toggleTheme = () => {
    setLocalTheme(localTheme === "light" ? "dark" : "light");
  };

  const toggleLang = () => {
    setLocalLang(localLang === "tr" ? "en" : "tr");
  };

  // component Did Mount!
  useEffect(() => {
    console.warn("localTheme: ", localTheme);
  }, [localTheme]);

  useEffect(() => {
    console.log("Header componenti oluşturuldu ve ekrana eklendi");
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log("ComponentDidUpdate: Header");
  });

  return (
    <header className="app-header flex justify-between">
      <div>
        <Title>{title}</Title>
        <p>{description}</p>
      </div>
      <div>
        <Nav />
        <MyButton onClick={productEkle}>+ Product Ekle</MyButton>
        <button onClick={fetchProducts} className="btn btn-primary w-[320px]">
          Ürünleri yükle
        </button>
        <MyLink href="http://duckduckgo.com">Test My Link</MyLink>
        <MyButton onClick={toggleTheme}>Toggle Theme [{localTheme}]</MyButton>
        <MyButton onClick={toggleLang}>Toggle Lang [{localLang}]</MyButton>
      </div>

      <div>
        <div>{user.name || "Anonim"}</div>
        <GlobalContext.Consumer>
          {(globalContext) => (
            <div>
              <span>{globalContext.lang}</span>
              <span>{globalContext.theme}</span>
            </div>
          )}
        </GlobalContext.Consumer>
      </div>
    </header>
  );
};

export default Header;
