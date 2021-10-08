import { useEffect } from "react";
import axios from "axios";

import { API_URI } from "../config";

export const useCsrfToken = () => {
  useEffect(() => {
    const getCsrfToken = async () => {
      const { data } = await axios.get(`${API_URI}/csrf-token`);
      axios.defaults.headers.post["X-CSRF-Token"] = data.csrfToken;
    };
    axios.defaults.withCredentials = true;
    getCsrfToken();
  }, []);
};
