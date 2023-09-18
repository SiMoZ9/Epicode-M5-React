import React, {useContext} from 'react';
import Footer from "../components/Footer/Footer";
import Navigation from "../components/navbar/Navigation";
import {Theme} from "../contexts/ThemeContext";

const MainLayout = ({ children }) => {

    return (
        <>
            <Navigation />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;