import React from "react";
import ReactDOM from "react-dom/client";
import App, { PI, userName } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./store/store";

// import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

// Object.prototype.toString = function () {
//   console.log("TO STRING ", this, " İÇİN ÇALIŞTI");
//   return JSON.stringify(this);
// };

// Array.prototype.toString = function () {
//   console.log("ARRAY TO STRING ", this, " İÇİN ÇALIŞTI");
//   return JSON.stringify(this);
// };


const u = {
  name: "ali",
  age: 19,
  email: "ali@veli.com",
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log("u.toString() >>>>> ", u.toString());
console.log("numbers.toString() >>>>> ", numbers.toString());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
      />
    </BrowserRouter>
  </Provider>
);

let pi = 3.14;
pi = 3;

let carpan = pi;
carpan = 5;

// pi == 3

const sayilar = [1, 2, 3, 4, 5];
const ramaklar = [...sayilar];
ramaklar.push(6); // 6
// sayilar.length == 5

// immutability ?

// filter > immutable

sayilar.filter((s) => s > 3);

// splice NOT immutable

sayilar.splice(0, 2, 8, 9);

// immutable YES
const getAverageOfNumbers = (arr) => {
  // reduce immutable
  const copyArr = [...arr];
  const total = arr.reduce((toplam, item) => toplam + item, 0);
  return total / arr.length;
};
