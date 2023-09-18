import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const BookDetails = () => {
    const {bookId} = useParams();
    const [bookDetails, setBookDetails] = useState(null)
    const getBookById = async () => {
        try {
            const res = await fetch(`https://epibooks.onrender.com/${bookId}`);
            const data = await res.json();
            setBookDetails(data);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getBookById();
    }, [bookId]) //Aggiorna ad ogni cambiamento di id

    return (
        <div>
            Pagina del libro con id {bookId}
            {bookDetails && <div>
                <img width={150} src={bookDetails[0].img} alt="" />
                <div>{bookDetails[0].asin}</div>
                <div>{bookDetails[0].category}</div>
                <div>{bookDetails[0].price}</div>
                <div>{bookDetails[0].title }</div>
            </div>}
        </div>
    );
};

export default BookDetails;
