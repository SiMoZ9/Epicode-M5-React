import  { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    books: [],
    isLoading: false,
    error: null
}

export const getBooksFromApi = createAsyncThunk(
    'books/getAllBooks',
    async () => {
        try {
            const response = await fetch('https://epibooks.onrender.com/')
            return await response.json()
        } catch (e) {
            console.log(e)
        }
    }
)

const booksSlice = createSlice({
    name: 'getBooks',
    initialState,
    reducers: {
        emptyBooks: (state, action) => {
            state.books = ['ciao']
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBooksFromApi.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getBooksFromApi.fulfilled, (state, action) => {
                state.isLoading = false
                state.books = action.payload
            })
            .addCase(getBooksFromApi.rejected, (state) => {
                state.isLoading = false
                state.error = 'Errore durante la ricezione dei dati dal server.'
            })
    }
})


export const { emptyBooks } = booksSlice.actions
export const allBooks = (state) => state.booksStore.books
export const isBookLoading = (state) => state.booksStore.isLoading
export const booksError = (state) => state.booksStore.error

export default booksSlice.reducer