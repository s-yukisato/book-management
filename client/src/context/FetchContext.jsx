import { createContext, useEffect, useContext, useReducer } from "react";
import axios from 'axios';
import { API_URI } from '../config';


const initialState = {
    isLoading: true,
    isError: false,
    data: []
}

const dataFetchReducer = (dataState, action) => {
    switch (action.type) {
        case 'FETCH_INIT':
            return {
                isLoading: true,
                isError: false,
                data: []
            }
        case 'FETCH_SUCCESS':
            return {
                isLoading: false,
                isError: false,
                data: action.payload,
            }
        case 'FETCH_ERROR':
            return {
                isLoading: false,
                isError: true,
                data: []
            }
        default:
            return dataState
    }
}

const FetchRecordContext = createContext();

export const useFetchRecordContext = () => {
    return useContext(FetchRecordContext);
}

export const FetchRecordProvider = ({ children }) => {
    const [dataState, dispatch] = useReducer(dataFetchReducer, initialState)

    useEffect(() => {
        console.log('fetch')
        axios
            .get(`${API_URI}/api/v1/record`)
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch(err => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, []);

    return <FetchRecordContext.Provider value={{ dataState }}>{children}</FetchRecordContext.Provider>
}


const FetchProjectContext = createContext();

export const useFetchProjectContext = () => {
    return useContext(FetchProjectContext);
}

export const FetchProjectProvider = ({ children }) => {
    const [dataState, dispatch] = useReducer(dataFetchReducer, initialState)

    useEffect(() => {
        console.log('fetch')
        axios
            .get(`${API_URI}/api/v1/project`)
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch(err => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, []);

    return <FetchProjectContext.Provider value={{ dataState }}>{children}</FetchProjectContext.Provider>
}