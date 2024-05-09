import { useState } from "react";
import { MyButton } from "../components/MyButton";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { API, renewAPI } from "../api/api";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    remember: true,
  });
  const location = useLocation();

  console.log("location: ", location);

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log("login submit ", loginData);
    API.post(
      "https://workintech-fe-ecommerce.onrender.com/login",
      loginData
    ).then((res) => {
      console.log("login res: ", res.data);
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: "SET_USER",
        payload: res.data,
      });
      renewAPI();
      history.push(location?.state?.referrer || "/");
    });
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={loginSubmit}>
        <div className="p-2">
          <label className="w-[30%]">Email</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={changeHandler}
          />
        </div>
        <div className="p-2">
          <label className="w-[30%]">Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={changeHandler}
          />
        </div>
        <div className="p-2">
          <label className="w-[30%]">Remember Me</label>
          <input
            type="checkbox"
            name="remember"
            checked={loginData.remember}
            onChange={changeHandler}
          />
        </div>
        <div className="p-2">
          <MyButton type="submit" onClick={loginSubmit}>
            Login
          </MyButton>
        </div>
      </form>
    </div>
  );
};
