import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
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
                isLoading
                    ? (
                        <div className="h-screen w-screen flex justify-center items-center flex-wrap">
                            <div className="flex justify-center items-center flex-col">
                                <ClipLoader size={50} color={'#1971ff'} />
                                <h2 className="w-full text-center font-semibold mt-2">Loading...</h2>
                            </div>
                        </div>
                    )
                    : (
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