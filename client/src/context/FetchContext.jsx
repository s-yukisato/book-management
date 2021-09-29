import { createContext, useEffect, useContext, useReducer } from "react";

import axios from 'axios'

const initialState = {
    isLoading: true,
    isError: '',
    data: []
}

const dataFetchReducer = (dataState, action) => {
    switch (action.type) {
        case 'FETCH_INIT':
            return {
                isLoading: true,
                isError: '',
                data: []
            }
        case 'FETCH_SUCCESS':
            return {
                isLoading: false,
                isError: '',
                data: action.payload,
            }
        case 'FETCH_ERROR':
            return {
                isLoading: false,
                isError: '読み込みに失敗しました',
                data: []
            }
        default:
            return dataState
    }
}

const FetchContext = createContext();

export const useFetchContext = () => {
    return useContext(FetchContext);
}

const FetchProvider = ({ children }) => {
    const [dataState, dispatch] = useReducer(dataFetchReducer, initialState)

    useEffect(() => {
        axios
            .get('')
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch(err => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, []);
    return <FetchContext.Provider value={{ dataState }}>{children}</FetchContext.Provider>
}

export default FetchProvider