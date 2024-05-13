import axios from "axios";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { API } from "../api/api";

const subscribeList = ["Haberler", "Kampanyalar", "Güncellemeler"];

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

export const ContactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      ...formDataInitial,
    },
    mode: "all",
  });

  const doSubmit = (data) => {
    console.log(">>>>>>>>>> form datası:", data);
    // axios request formData
    if (true) {
      API.post("https://reqres.in/api/users", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <Form onSubmit={handleSubmit(doSubmit)}>
      <h1 className="form-title">
        Hook Form Valid
        {!isValid && " Değil"}
      </h1>
      <FormGroup>
        <Label for="isim-input">İsim</Label>
        <input
          className="form-control"
          id="isim-input"
          type="text"
          {...register("name", { required: "İsim alanı zorunludur..." })}
          placeholder="Lütfen isimn giriniz..."
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </FormGroup>
      <FormGroup>
        <Label for="subscribe-input">Abone ol</Label>

        {subscribeList.map((field) => {
          console.log("map field: ", field);
          return (
            <div key={field}>
              <label>
                {field}
                <input
                  type="checkbox"
                  value={field}
                  {...register("subscribe")}
                />
              </label>
            </div>
          );
        })}
      </FormGroup>
      <FormGroup>
        <Label for="eposta-input">E-posta</Label>
        <input
          className="form-control"
          id="eposta-input"
          type="text"
          {...register("email", {
            validate: (val) => {
              console.log(val);
              if (val.includes(".com")) {
                return true;
              }
              return "Email alanı '.com' metni içermelidir."; // invalid - hata mesajı
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </FormGroup>
      <FormGroup>
        <Label for="msg-type-input">Mesaj Tipini Seçiniz</Label>
        <select
          className="form-control"
          id="msg-type-input"
          type="select"
          {...register("messageType")}
        >
          <option disabled selected value="">
            Lütfen seçim yapınız...
          </option>
          {messageTypes.map((mt) => (
            <option key={mt.value} value={mt.value}>
              {mt.label}
            </option>
          ))}
        </select>
      </FormGroup>

      <div>
        <label>
          Mesaj
          <input
            className="form-control"
            {...register("message", {
              required: "Mesaj alanı zorunludur.",
              minLength: {
                value: 10,
                message: "Mesajınız en az 10 karakter uzunluğunda olabilir...",
              },
              maxLength: {
                value: 30,
                message:
                  "Mesajınız en fazla 30 karakter uzunluğunda olabilir...",
              },
            })}
          />
          {errors.message && <p className="error">{errors.message.message}</p>}
        </label>
      </div>

      <Button type="submit" color="primary">
        Gönder
      </Button>
      <Button type="button" color="danger">
        Reset
      </Button>
    </Form>
  );
};
