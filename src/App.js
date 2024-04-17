import { useEffect, useState } from "react";
import axios from "axios";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import ProductPage from "./pages/ProductPage";

import Slide from "./components/Slide";
import { Switch, Route, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CounterPage } from "./pages/CounterPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { ContactPage } from "./pages/ContactPage";

import "./App.css";

function App() {
  const [productsData, setProductsData] = useState([]);
  const [showSlide, setShowSlide] = useState(true);
  const location = useLocation();

  const productEkle = () => {
    setProductsData([
      ...productsData,
      {
        id: "yeni-eklenen-product-" + Math.round(Math.random() * 999999),
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1200%2F1*odW0CyTVxMVt5s3yhjjOhw.png&f=1&nofb=1&ipt=6d4453ed13c1d4eb06551eab3c1efbdf67c5acaac3bec8f8720b51c990b75e0b&ipo=images",
        name: "React JS",
        description:
          "React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.",
        price: 250,
      },
    ]);
  };

  const ilkUrunIsminiDegistir = () => {
    const newProducts = [...productsData];
    newProducts[0].name = "Yeni İsim";
    setProductsData(productsData);
  };

  const fetchProducts = () => {
    axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => {
        console.log(res.data); // Object Array === [ {}, {}, {} ... ]
        setProductsData(res.data);
      });
  };

  useEffect(() => {
    // component did mount
    // tüm uygulama yüklendi
    fetchProducts();

    return () => {
      // component will unmount
    };
  }, []);

  useEffect(() => {
    console.log("location: ", location);
    if (location.pathname === "/products") {
      setShowSlide(false);
    } else {
      setShowSlide(true);
    }
  }, [location]);

  return (
    <div className="app">
      <Header
        productsCount={productsData.length}
        productEkle={productEkle}
        fetchProducts={fetchProducts}
      />
      {showSlide && <Slide />}
      <div className="page-body">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/products" exact>
            <ProductPage productsData={productsData} />
          </Route>
          <Route path="/product-detail/:productId" exact>
            <ProductDetailPage productsData={productsData} />
          </Route>
          <Route path="/counter" exact>
            <CounterPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
        </Switch>
      </div>
      <Footer productsCount={productsData.length} />
    </div>
  );
}

export default App;

export const PI = 3;
export const userName = "Anonim";
