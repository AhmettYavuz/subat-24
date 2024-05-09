import { useState } from "react";
import { API } from "../api/api";

export const useAxios = ({ reqType, initialValue }) => {
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const doRequest = ({ endpoint, payload, config }) => {
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
