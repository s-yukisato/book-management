import { useEffect } from "react";
import axios from "axios";


export const useCsrfToken = () => {
  useEffect(() => {
    const url = "http://localhost:3001";
    const getCsrfToken = async () => {
      const { data } = await axios.get(`${url}/csrf-token`);
      axios.defaults.headers.post["X-CSRF-Token"] = data.csrfToken;
    };
    axios.defaults.withCredentials = true; 
    getCsrfToken();
  }, []);
};
