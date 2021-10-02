import axios from "axios";

export const saveProject = async (id) => {
  const result = await axios
    .put(`http://localhost:3001/api/v1/project/${id}`)
    .then((res) => "保存しました")
    .catch((err) => "エラーが発生しました");

  return { result };
};

