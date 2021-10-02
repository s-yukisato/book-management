import { useEffect, useReducer, useRef } from "react";
import axios from "axios";

export function useFetch(url) {
  const cache = useRef({});

  const cancelRequest = useRef(false);

  const initialState = {
    status: "idle",
    error: null,
    data: [],
  };

  const fetchReducer = (state, action) => {
    switch (action.type) {
      case "FETCHING":
        return { ...initialState, status: "fetching" };
      case "FETCHED":
        return { ...initialState, status: "fetched", data: action.payload };
      case "FETCH_ERROR":
        return { ...initialState, status: "error", error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) return;

    console.log("fetching data");

    const fetchData = async () => {
      dispatch({ type: "FETCHING" });

      if (cache.current[url]) {
        const data = cache.current[url];
        dispatch({ type: "FETCHED", payload: data });
        return;
      }
      console.log("No catch");
      try {
        const { data } = await axios.get(url);
        cache.current[url] = data;
        // if (cancelRequest) return;
        dispatch({ type: "FETCHED", payload: data });
      } catch (error) {
        // if (cancelRequest) return;
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      }
    };

    fetchData();

    return () => {
      cancelRequest.current = true;
    };
  }, [url]);

  return state;
}
