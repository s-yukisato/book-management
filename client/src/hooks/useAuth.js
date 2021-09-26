import { useEffect, useState } from "react";
import axios from "axios";

export const useAuth = () => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null);

  useEffect(() => {
    const authenticate = async () => {
      const { data } = await axios.get("http://localhost:3001/api/v1/user/auth");
      if (data.status === 200) {
        setUser(data.user)
      } else if (data.status === 400) {
        setError(data.messgae);
      }
    };
    authenticate();
  }, []);


  return [user, error];
};
