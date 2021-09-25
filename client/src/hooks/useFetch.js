import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(url)
        .then((res) => setData(res.data));
      setCompleted(true);
    };
    fetchData();
  }, [url]);
  return { data, completed };
};
