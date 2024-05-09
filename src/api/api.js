import axios from "axios";

const createInstance = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      Authorization: token,
      "X-USER-ROLE": "client",
    },
  });
};

export let API = createInstance();

export const renewAPI = () => {
  API = createInstance();
};
