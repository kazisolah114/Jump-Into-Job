import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;