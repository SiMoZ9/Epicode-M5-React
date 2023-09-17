import React, {useEffect, useState} from 'react'
import { BeatLoader } from 'react-spinners'
import BookCard from '../card/BookCard'
import { nanoid } from 'nanoid'

function LifeCycles() {

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const getBooksFromAPI = async () => {
        setLoading(true)
        try {
            const res = await fetch('https://dummyjson.com/products')
            const data = await res.json()
            setBooks(data)
            setLoading(false)

        } catch (e) {
            if(e) setError(e)
        }
    }

    useEffect(() => {
        getBooksFromAPI() //componentDidMount

        //componentDidUpdate si riferisce all'array delle dipendenze

        return () => { //componentWillUnmount
            setBooks([])
        }
    }, []) //Nell'array delle dipendenze va messo lo stato che al variare deve sortire gli effetti
            //useEffect viene rieseguito al variare di uno stato definto nell'array delle dipendenze
  return (
      <div>
          {error && <h1>Errore nel caricamento</h1>}
          {loading && !error && (
              <BeatLoader
                  loading={loading}
                  size={150}
                  aria-label='Loading Spinner'
              />
          )}
          {!loading && !error && books && books.slice(0,5).map((book) => {
              return (
                  <BookCard
                      key={nanoid()}
                  />
              )
            
          })}
    </div>
  )
}

export default LifeCycles