import React from 'react';
import {Navbar} from "react-bootstrap";
import Footer from "../components/footer/Footer";

const MainLayout = ({childer}) => {
    return (
        /*
        *   Children significa
        *           Qualsiasi componente che trovo nel mio wrapper
        * */
        <>
            <Navbar />
            {childer}
            <Footer />
        </>
    );
};

export default MainLayout;
