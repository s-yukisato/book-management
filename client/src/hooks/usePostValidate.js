import { useState } from 'react';


export const useUserNameValidate = () => {
    const [error, setError] = useState("")

    const validateInput = (inputValue) => {
        const minPostLength = 4;
        const maxPostLength = 16;
        const regex = /[A-Za-z0-9]/;
        
        if (!inputValue) {
            setError("ユーザー名を入力してください")
        } else if (inputValue.length < minPostLength || inputValue.length > maxPostLength) {
            setError(`ユーザー名は${minPostLength}文字以上${maxPostLength}文字以下にしてください`)
        } else if (!regex.test(inputValue)) {
            setError("正しい形式で入力してください")
        } else {
            setError("")
        }
    }

    return [error, validateInput]
}

export const useEmailValidate = () => {
    const [error, setError] = useState("")

    const validateInput = (inputValue) => {
        const minPostLength = 6;
        const maxPostLength = 64;
        const regex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
        
        if (!inputValue) {
            setError("メールアドレスを入力してください")
        } else if (inputValue.length < minPostLength || inputValue.length > maxPostLength) {
            setError(`メールアドレスはは${minPostLength}文字以上${maxPostLength}文字以下にしてください`)
        } else if (!regex.test(inputValue)) {
            setError("正しい形式で入力してください")
        } else {
            setError("")
        }
    }

    return [error, validateInput]
}


export const usePasswordValidate = () => {
    const [error, setError] = useState("")

    const validateInput = (inputValue) => {
        const minPostLength = 8;
        const maxPostLength = 64;
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[\w\W]{8,64}$/;
        
        if (!inputValue) {
            setError("パスワードを入力してください")
        } else if (inputValue.length < minPostLength || inputValue.length > maxPostLength) {
            setError(`パスワードは${minPostLength}文字以上${maxPostLength}文字以下にしてください`)
        } else if (!regex.test(inputValue)) {
            setError("パスワードは半角英小文字、大文字、数字を含んでいる必要があります")
        } else {
            setError("")
        }
    }

    return [error, validateInput]
}