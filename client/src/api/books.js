import { useState, useEffect } from 'react';
import axios from 'axios';


export const useFetch = () => {
    const [books, setBooks] = useState([]);
    const [loadingCompleted, setLoadingCompleted] = useState(false);


    useEffect(() => {
        const getBookData = async () => {
            await axios.get('http://localhost:3001/api/data')
                .then(res => {
                    setBooks(res.data)
                })
            setLoadingCompleted(true);
        };
        getBookData();
    }, [])

    return [books, loadingCompleted];
}