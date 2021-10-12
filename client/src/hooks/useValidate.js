import { useState } from "react";

export const useUserNameValidate = () => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const validate = (inputValue) => {
    const minPostLength = 4;
    const maxPostLength = 16;

    setError(true);
    if (!inputValue) {
      setMessage("ユーザー名を入力してください");
    } else if (
      inputValue.length < minPostLength ||
      inputValue.length > maxPostLength
    ) {
      setMessage(
        `ユーザー名は${minPostLength}文字以上${maxPostLength}文字以下にしてください`
      );
    } else {
      setError(false);
      setMessage("");
    }
  };

  return { error, message, validate };
};

export const useEmailValidate = () => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const validate = (inputValue) => {
    const minPostLength = 6;
    const maxPostLength = 64;
    const regex =
      /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;

    setError(true);
    if (!inputValue) {
      setMessage("メールアドレスを入力してください");
    } else if (
      inputValue.length < minPostLength ||
      inputValue.length > maxPostLength
    ) {
      setMessage(
        `メールアドレスは${minPostLength}文字以上${maxPostLength}文字以下にしてください`
      );
    } else if (!regex.test(inputValue)) {
      setMessage("正しい形式で入力してください");
    } else {
      setMessage("");
      setError(false);
    }
  };

  return { error, message, validate };
};

export const usePasswordValidate = () => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const validate = (inputValue) => {
    const minPostLength = 8;
    const maxPostLength = 64;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[\w\W]{8,64}$/;

    setError(true);
    if (!inputValue) {
      setMessage("パスワードを入力してください");
    } else if (
      inputValue.length < minPostLength ||
      inputValue.length > maxPostLength
    ) {
      setMessage(
        `パスワードは${minPostLength}文字以上${maxPostLength}文字以下にしてください`
      );
    } else if (!regex.test(inputValue)) {
      setMessage(
        "パスワードは半角英小文字、大文字、数字を含んでいる必要があります"
      );
    } else {
      setError(false);
      setMessage("");
    }
  };

  return { error, message, validate };
};


export const usePageValidate = () => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const validate = (inputValue) => {
    const regex = /^[0-9]*$/;

    setError(true);
    if (!inputValue) {
      setMessage("ページ数を入力してください");
    } else if (!regex.test(inputValue)) {
      setMessage(
        "半角数字のみ使用可能です"
      );
    } else {
      setError(false);
      setMessage("");
    }
  };

  return { error, message, validate };
};