import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const usePost = (url, values, to) => {
  const [error, setError] = useState(null);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(url, values);

    if (data.status === 201) {
      history.push(to);
    } else if (data.status === 400) {
      setError(data.message);
    }
  };

  return [error, handleSubmit];
};
