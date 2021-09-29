import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";


export const useLogin = (values) => {
  const url = "http://localhost:3001/api/v1/user";

  const [error, setError] = useState(null);

  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  const login = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      `${url}${history.location.pathname}`,
      values
    );

    if (data.status === 200 || data.status === 201) {
      history.replace(from);
    } else if (data.status === 400) {
      setError(data.message);
    } else {
      setError("現在メンテナンス中です");
    }
  };

  return [error, login];
};
