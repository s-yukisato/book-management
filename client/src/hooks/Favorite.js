import { useState } from "react";

export const useFavorite = (initialState = false) => {
  const [favorited, setFavorited] = useState(initialState);

  const toggleFavorited = () => {
    setFavorited(!favorited);
  };

  return [favorited, toggleFavorited];
};
