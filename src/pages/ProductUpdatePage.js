import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { API } from "../api/api";
import { useAxios } from "../hooks/useAxios";

export const ProductUpdatePage = ({ productsData }) => {
  const [product, setProduct] = useState({});
  const [getProduct, productRaw] = useAxios({ initialValue: {} });

  const { productId } = useParams();
  const history = useHistory();

  console.log("Product id: ", productId);

  const geriGit = () => {
    history.goBack();
    // history.push("/");
  };

  const changeHandler = (event) => {
    // inputtaki value => state
    const { name, value, type, checked } = event.target;
    setProduct({ ...product, [name]: type === "checkbox" ? checked : value });
  };

  const formSubmitHandler = (e) => {
    // sayfa yenilenmesini engelle!
    e.preventDefault();

    API.post("endpoint-URL", product).then((res) => {
      // başarıyla kaydedildi
      // todo: Tüm ürün datasını yeniden çek
      // todo: ürünler sayfasına yönlendir
      history.push("/products");
    });
  };

  const reset = () => {
    // reset product data
    setProduct({ ...productRaw });
  };

  useEffect(() => {
    getProduct({
      endpoint:
        "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products/" + productId,
      reqType: "get",
    }).then((data) => {
      console.log("GetProducts Sonuçlandı data: ", data);
      setProduct(data);
    });
  }, [productId]);

  // useEffect(() => {
  //   setProduct({ ...productRaw });
  // }, [productRaw]);

  return (
    <div>
      <h1>
        <Button color="link" onClick={geriGit}>
          {"<"}
        </Button>
        Product Update of {product.name}
      </h1>
      <hr />
      <Form onSubmit={formSubmitHandler}>
        <FormGroup>
          <Label for="isim-input">İsim</Label>
          <Input
            id="isim-input"
            type="text"
            name="name"
            // controlled component!
            // Input value su react tarafından kontrol ediliyor
            value={product.name}
            onChange={changeHandler}
            placeholder="Lütfen isimn giriniz..."
          />
          {/* {errors.name && <p className="error">{errors.name}</p>} */}
        </FormGroup>
        <FormGroup>
          <Label for="desc-input">Açıklama</Label>
          <Input
            id="desc-input"
            type="text"
            name="description"
            // controlled component!
            value={product.description}
            onChange={changeHandler}
            placeholder="Lütfen açıklama giriniz..."
          />
          {/* {errors.name && <p className="error">{errors.name}</p>} */}
        </FormGroup>
        <FormGroup>
          <Label for="img-input">Görsel URL</Label>
          <Input
            id="img-input"
            type="text"
            name="img"
            // controlled component!
            value={product.img}
            onChange={changeHandler}
            placeholder="Lütfen görsel URL bilgisini giriniz..."
          />
          {/* {errors.name && <p className="error">{errors.name}</p>} */}
        </FormGroup>
        <FormGroup>
          <Label for="price-input">Fiyat</Label>
          <Input
            id="price-input"
            type="text"
            name="price"
            // controlled component!
            value={product.price}
            onChange={changeHandler}
            placeholder="Lütfen ücret bilgisini giriniz..."
          />
          {/* {errors.name && <p className="error">{errors.name}</p>} */}
        </FormGroup>
        <Button type="submit">Kaydet</Button>
        <Button type="button" onClick={reset}>
          Sıfırla
        </Button>
      </Form>
    </div>
  );
};
