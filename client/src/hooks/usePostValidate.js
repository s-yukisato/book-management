import { useState } from 'react'


export const useEmailValidate = () => {
    const [error, setError] = useState("")

    const validateInput = (inputValue) => {
        const maxPostLength = 255;
        const regex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/;
        
        if (!inputValue) {
            setError("メールアドレスを入力してください")
        } else if (inputValue.length > maxPostLength) {
            setError("メールアドレスが長すぎます")
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
        const maxPostLength = 255;
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.?/-])[a-zA-Z0-9.?/-]{8,24}$/;
        
        if (!inputValue) {
            setError("パスワードを入力してください")
        } else if (inputValue.length > maxPostLength) {
            setError("パスワードが長すぎます")
        } else if (!regex.test(inputValue)) {
            setError("正しい形式で入力してください")
        } else {
            setError("")
        }
    }

    return [error, validateInput]
}