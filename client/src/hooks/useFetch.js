import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('http://localhost:3001/api/v1/document')
        .then((res) => setData(res.data));
    };
    fetchData();
  }, []);

  return data;
};
