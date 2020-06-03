// import { useEffect } from "react";
import axios from "axios";
import { useCallback, useState } from "react";
axios.defaults.baseURL = "https://backend.machanenc.am/";

export const useFetch = () => {
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  const callAPI = useCallback(async (url, method = "GET", data = null) => {
    try {
      setLoading(true);

      if (data) data = JSON.stringify(data);
      const res = await axios({
        method,
        url,
        data
      });
      return res.data.channels.data;
    } catch (err) {
      setError(e => [...e, err.message]);
    } finally {
      setLoading(false);
    }
  }, []);

  return { callAPI, error, loading };
};
