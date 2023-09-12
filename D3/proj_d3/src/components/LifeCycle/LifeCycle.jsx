import React, { Component } from 'react'
import ClipLoader from "react-spinners/BeatLoader";
import BookCard from '../card/BookCard'
import { nanoid } from 'nanoid';
import BeatLoader from 'react-spinners/BeatLoader';

class LifeCycle extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [],
      loading: false,
      error: null,
    }
  }

  async getProducts() {
    this.setState({ loading: true })
    try {
      const response = await fetch('https://epibooks.onrender.com')
      const data = await response.json()
      this.setState({ products: data, loading: false })
    } catch (error) {
      this.setState({ error, loading: false })
    }
  }

  // LyfeCycle

  //Monta componente -> sta per essere renderizzato
  componentDidMount() {
    this.getProducts()
  }

  //Aggiorna componente -> stati o props stanno per essere aggiornati
  componentDidUpdate(prevProps, prevState, snapshot) {
    // Controlli su i cambiamenti di stato
  }


  // Smonta il componente
  componentWillUnmount() {
    // Utile negli event listners
  }
  render() {
    const { loading, errors, products } = this.state;
    console.log(this.state.products);
    return (
      <div>
        {loading && !errors &&
          <BeatLoader
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        }
        {errors && <p>Errore nel caricamento</p>}
        {!loading && !errors && products && products.map((book) => {
          return (
            <BookCard
              key={nanoid()}
              title={book.title}
              category={book.category}
              btn="Ciao"
              img={book.img}
            />
          )
        })}
      </div>
    )
  }
}

export default LifeCycle
