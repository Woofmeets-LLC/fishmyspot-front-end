/* eslint-disable react-hooks/exhaustive-deps */
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { login } from '../../store/slices/authSlice';
import { setShowLoginModal } from '../../store/slices/modalsSlice';
// import Footer from './Footer';
import Header from './Header';

const Footer = dynamic(() => import('./Footer'), { ssr: false });

const HomeLayout = ({
    children,
    isPrivate = false,
    guards = {
        account_type: '',
        fallbackUrl: '',
    }
}) => {
    const dispatch = useDispatch();
    const { isLoading, isLoggedIn, user } = useSelector(state => state.auth);
    const [guardChecking, setGuardChecking] = useState(true);

    const { push } = useRouter();

    useEffect(() => {
        dispatch(login())
    }, [])

    useEffect(() => {
        if (typeof (window) !== 'undefined') {
            if (!isLoading) {
                if (isPrivate) {
                    if (isLoggedIn) {
                        if (guards.account_type) {
                            if (guards.account_type != user?.profile?.publicData?.account_type) {
                                push(guards.fallbackUrl || '/');
                            } else {
                                setGuardChecking(false);
                            }
                        } else {
                            setGuardChecking(false);
                        }
                    } else {
                        push(guards.fallbackUrl || '/');
                        dispatch(setShowLoginModal());
                    }
                } else {
                    setGuardChecking(false);
                }
            }
        }
    }, [isLoading, isLoggedIn])

    return (
        <>
            {
                isLoading || guardChecking
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