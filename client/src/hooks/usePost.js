import { useEffect } from "react";
import axios from "axios";

export const usePost = (url, data) => {
  useEffect(() => {
    const postData = async () => {
      await axios
        .post(url, data)
        .then((res) => {
          if (res.statusCode !== 201) {
            console.error(res);
          }
        });
    };
    postData();
  }, [url, data]);

  return data;
};
