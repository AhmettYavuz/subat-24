import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { API } from "../api/api";

const formDataInitial = {
  name: "",
  email: "",
  message: "",
  subscribe: [],
  color: "beyaz",
  messageType: "",
};

const messageTypes = [
  { label: "Şikayet", value: "sikayet" },
  { label: "Teknik Destek", value: "teknik-destek" },
  { label: "Öneri", value: "oneri" },
];

const renkler = [
  "siyah",
  "beyaz",
  "mavi",
  "yeşil",
  "sarı",
  "turuncu",
  "kırmızı",
];

const subscribeList = ["Haberler", "Kampanyalar", "Güncellemeler"];

export const ContactForm = () => {
  const [formData, setFormData] = useState(formDataInitial);
  // falsy values OR error message
  // name: "İsim alanı boş bırakılamaz" OR "" OR false
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    subscribe: "",
    color: "",
    messageType: "",
  });

  const [isValid, setValid] = useState(false);

  const validationCheck = () => {
    // name validation
    if (!formData.name) {
      setErrors((oldErrors) => ({
        ...oldErrors,
        name: "İsim alanı boş bırakılamaz!",
      }));
    } else {
      setErrors((oldErrors) => ({
        ...oldErrors,
        name: "",
      }));
    }
    // subscribe validation
    if (formData.subscribe.length === 0) {
      setErrors((oldErrors) => ({
        ...oldErrors,
        subscribe: "En az bir üyelik oluşturmanız gerekiyor!",
      }));
    } else {
      setErrors((oldErrors) => ({
        ...oldErrors,
        subscribe: "",
      }));
    }
    // message validation
    if (formData.message.length < 10 || formData.message.length > 300) {
      setErrors((oldErrors) => ({
        ...oldErrors,
        message: "Mesajınız 10 ile 300 karakter arasında olmalı...",
      }));
    } else {
      setErrors((oldErrors) => ({
        ...oldErrors,
        message: "",
      }));
    }
  };

  const changeHandler = (event) => {
    // inputtaki value => state
    const { name, value, type, checked } = event.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const checkChangeHandler = (event) => {
    const { name, value, type, checked } = event.target;
    if (checked) {
      setFormData({ ...formData, subscribe: [...formData.subscribe, value] });
    } else {
      const subscribeState = [...formData.subscribe];
      subscribeState.splice(subscribeState.indexOf(value), 1);
      setFormData({ ...formData, subscribe: [...subscribeState] });
    }
  };

  const radioChangeHandler = (event) => {
    const { name, value, checked } = event.target;
    if (checked) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const submitHandler = (e) => {
    console.log("form submit edildi: ", formData);
    e.preventDefault();

    // axios request formData
    if (isValid) {
      API
        .post("https://reqres.in/api/users", formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const reset = () => {
    setFormData(formDataInitial);
  };

  useEffect(() => {
    console.log("FormData Updated! ", formData);
    validationCheck();
  }, [formData]);

  useEffect(() => {
    setValid(!errors.name && !errors.subscribe && !errors.message);
  }, [errors]);

  return (
    <Form onSubmit={submitHandler}>
      <h1>Form Valid {!isValid && " Değil"}</h1>
      <FormGroup>
        <Label for="isim-input">İsim</Label>
        <Input
          id="isim-input"
          type="text"
          name="name"
          // controlled component!
          value={formData.name}
          onChange={changeHandler}
          placeholder="Lütfen isimn giriniz..."
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </FormGroup>
      <FormGroup>
        <Label for="eposta-input">E-posta</Label>
        <Input
          id="eposta-input"
          type="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
        />
      </FormGroup>
      <FormGroup>
        <Label for="msg-type-input">Mesaj Tipini Seçiniz</Label>
        <Input
          id="msg-type-input"
          type="select"
          value={formData.messageType}
          name="messageType"
          onChange={changeHandler}
        >
          <option disabled selected value="">
            Lütfen seçim yapınız...
          </option>
          {messageTypes.map((mt) => (
            <option key={mt.value} value={mt.value}>
              {mt.label}
            </option>
          ))}
        </Input>
      </FormGroup>

      <div>
        <label>:</label>
        <select></select>
      </div>
      <div>
        <label>
          Mesaj
          <textarea
            name="message"
            value={formData.message}
            onChange={changeHandler}
          />
        </label>
        {errors.message && <p className="error">{errors.message}</p>}
      </div>
      <div>
        <h3>Subscribe Listeleri</h3>
        {subscribeList.map((item) => (
          <div>
            <label>
              Subscribe {item}
              <input
                type="checkbox"
                name="subscribe"
                value={item}
                checked={formData.subscribe.includes(item)}
                onChange={checkChangeHandler}
              />
            </label>
          </div>
        ))}
        {errors.subscribe && <p className="error">{errors.subscribe}</p>}
      </div>
      <div className="renk-secimi">
        <h3>Renk Seçimi</h3>
        {renkler.map((renk) => (
          <div>
            <label>
              {renk}
              <input
                type="radio"
                name="color"
                value={renk}
                checked={formData.color === renk}
                onChange={radioChangeHandler}
              />
            </label>
          </div>
        ))}
      </div>
      <Button type="submit" color="primary" disabled={!isValid}>
        Gönder
      </Button>
      <Button type="button" color="danger" onClick={reset}>
        Reset
      </Button>
    </Form>
  );
};
