import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_URI } from "../config";

export const useLogin = (values) => {
  const url = `${API_URI}/api/v1/auth`;

  const [error, setError] = useState(null);

  const history = useHistory();

  const login = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      `${url}${history.location.pathname}`,
      values
    );

    if (data.status === 200 || data.status === 201) {
      window.location.reload();
    } else if (data.status === 400) {
      setError(data.message);
    } else {
      setError("現在メンテナンス中です");
    }
  };

  return [error, login];
};
