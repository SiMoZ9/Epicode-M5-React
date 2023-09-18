import {createContext, useEffect, useState} from 'react'

export const PostsProvider = createContext();

export const PostsContext = ({ children }) => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getBooks = async () => {
        try {
            setLoading(true)
            const data = await fetch('https://dummyjson.com/products')
            const response = await data.json()
            setBooks(response)
            setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getBooks()
    }, []);

    return (
        <PostsProvider.Provider value={{ books, loading }}>
            {children}
        </PostsProvider.Provider>
    )
}