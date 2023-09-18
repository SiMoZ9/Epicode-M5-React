import React, { useEffect, useState, useRef} from 'react';
import BookCard from "../card/BookCard";
import BeatLoader from "react-spinners/BeatLoader"
import {nanoid} from "nanoid";

const LifeCycleExample = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const colRef = useRef(null)
    const inputRef = useRef(null)

    console.log(colRef.current);
    const getBooksFromApi = async () => {
        setLoading(true)
        try {
            const response = await fetch('https://epibooks.onrender.com')
            const data = await response.json()
            setBooks(data)
            setLoading(false)
        } catch (error) {
            if (error) setError(error)
        }
    }

    // Equivalente di getElementById()

    useEffect(() => {
        // equivalente componentDidMount()
        getBooksFromApi()

        return () => {
            // equivalente componentWillUnmount()
            // logica che viene eseguita quando il componente viene smontato.
        }

        // array delle dipendenze = componentDidUpdate()
    }, [])

    return (
        <div>
            {error && <h1>OOps errore durante il caricamento dei libri...</h1>}
            {loading && !error && (
                <BeatLoader
                    loading={loading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            )}
            <div className="container">
                <div className='row d-flex flex-wrap'>
                    <div ref={colRef} className='col d-flex flex-wrap gap-5'>
                        {!loading && !error && books && books.slice(0,5).map((book) => {
                            return (
                                <BookCard
                                    key={nanoid()}
                                    title={book.title}
                                    category={book.category}
                                    btn="CIAO"
                                    img={book.img}
                                    asin={book.asin}
                                />
                            )
                        })}
                    </div>
                </div>

                </div>
        </div>
    )
}

export default LifeCycleExample;

