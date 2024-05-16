import { useState } from "react";
import { API } from "../api/api";

/*
  axios.get(endpoint, config)
  axios.delete(endpoint, config)

  axios.post(endpoint, paylaod, config)
  axios.put(endpoint, paylaod, config)
*/

export const useAxios = ({ initialValue }) => {
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // boolean - flag - bayrak

  const doRequest = ({ endpoint, reqType, payload, config }) => {
    setLoading(true);
    return API[reqType](endpoint, payload ? payload : config, config)
      .then((res) => {
        setData(res.data);
        return res.data;
      })
      .catch((err) => {
        setError(err.message);
        throw err;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return [doRequest, data, error, loading];
};
