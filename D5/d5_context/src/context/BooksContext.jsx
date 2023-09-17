import React, {createContext, useEffect, useState} from "react";

export const PostProvider = createContext();
export const PostContext = ({children}) => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getBooksFromApi = async () => {
        try {
            setLoading(true)
            const res = await fetch('https://dummyjson.com/products')
            const data = await res.json()
            setBooks(data)
            setLoading(false)
        } catch (e) {
            setError(e)
        }
    }

    useEffect(() => {
        getBooksFromApi()
    }, [])

    return (
        <PostProvider.Provider value={{books, loading, error}}>
            {children}
        </PostProvider.Provider>
    )

}

