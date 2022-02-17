import React from 'react';
import Footer from './Footer';
import Header from './Header';

const HomeLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default HomeLayout;