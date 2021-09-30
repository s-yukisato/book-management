import axios from "axios";

export const deleteRecord = async (id) => {
  const result = await axios
    .delete(`http://localhost:3001/api/v1/record/${id}`)
    .then((res) => "削除しました")
    .catch((err) => "エラーが発生しました");

  return { result };
};

