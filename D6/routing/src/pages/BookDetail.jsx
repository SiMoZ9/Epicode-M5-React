import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useWindowSize from "../hooks/useWindowSize";

const BookDetails = () => {
    const {bookId} = useParams();

    const {loading, data, error} = useFetch(`https://epibooks.onrender.com/${bookId}`)
    console.log(data)

    const size = useWindowSize()
    console.log(size)

    return (
        <div>
            Pagina del libro con id {bookId}
            {loading && <p>Caricando...</p>}
            {data && <div>
                <img width={150} src={data[0].img} alt="" />
                <div>{data[0].asin}</div>
                <div>{data[0].category}</div>
                <div>{data[0].price}</div>
                <div>{data[0].title }</div>
            </div>}

            <div>
                <button>
                    <Link to={"/"}>
                        Torna alla home
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default BookDetails;
