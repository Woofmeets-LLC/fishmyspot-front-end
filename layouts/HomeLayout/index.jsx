import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/slices/authSlice';
import Footer from './Footer';
import Header from './Header';

const HomeLayout = ({ children }) => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(login())
    }, [])

    return (
        <>
            {
                isLoading ? "" : (
                    <>
                        <Header />
                        <main>
                            {children}
                        </main>
                        <Footer />
                    </>
                )
            }

        </>
    );
};

export default HomeLayout;