import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {allBooks, emptyBooks} from "../../reducers/booksReducer";


const Footer = () => {

    const dispatch = useDispatch()

    const books = useSelector(allBooks)
    console.log('FOOTER',books)

    return (
        <div>
            questo è un footer
            <button onClick={() => dispatch(emptyBooks())}>CLICCAMI</button>
        </div>
    );
};

export default Footer;