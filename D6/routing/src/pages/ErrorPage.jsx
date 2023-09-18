import React from 'react';
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Error 404 page not found</h1>

            <button>
                <Link to={"/"}>
                    Torna alla home
                </Link>
            </button>
        </div>
    );
};

export default ErrorPage;
