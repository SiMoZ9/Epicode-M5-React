import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import BookDetails from "./pages/BookDetail";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/contact-me" element={<ContactUs/>}/>
            <Route path="/book/:bookId" element={<BookDetails />} />

            {/*Rotta 404
                Sempre ultima route
            */}
            <Route path='*' element={<ErrorPage />} />

            </Routes>

        </BrowserRouter>
    )
}

export default App;
