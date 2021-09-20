import { useState, useEffect } from 'react';
import axios from 'axios';


const Library = () => {
    const [books, setBooks] = useState([]);
    const getBookData = () => {
        axios.get('http://localhost:3001/books')
            .then(response => setBooks(response.data))
    }
    useEffect(() => { 
        console.log(books)
    }, [books])
    return (
        <div>
            <h1>Library</h1>
            {books.map(book => (
                <div key={book.id}>
                    <p>{book.title}</p>
                    <p>{book.author}</p>
                    <p>{book.price}</p>
                </div>
            ))}
            <button onClick={getBookData}>fetch book data</button>
        </div>
    )
}

export default Library;