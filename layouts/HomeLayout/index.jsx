/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { getSdk } from '../../sharetribe/sharetribeSDK';
import { login } from '../../store/slices/authSlice';
import { setShowLoginModal } from '../../store/slices/modalsSlice';
import { setStripeAccount } from '../../store/slices/stripeAccountSlice';
import Footer from './Footer';
import Header from './Header';

const HomeLayout = ({
    children,
    isPrivate = false,
    guards = {
        account_type: '',
        fallbackUrl: '',
    },
    title = "Fish My Spot",
    ogTags = {
        title: '',
        description: 'You will find best fishing spots in your area',
        image: '/fish-my-spot-featured-image.jpg',
    }
}) => {
    const dispatch = useDispatch();
    const { isLoading, isLoggedIn, user } = useSelector(state => state.auth);
    const [guardChecking, setGuardChecking] = useState(true);

    const { push } = useRouter();

    useEffect(() => {
        // It will update user data in redux in every reload if user is logged in
        dispatch(login());

        // It will update stripe data in redux in every reload if found
        getSdk().stripeAccount.fetch()
            .then(res => {
                const stripeData = res?.data?.data;
                const isTransferActivated = stripeData?.attributes?.stripeAccountData?.capabilities?.card_payments == 'active' || stripeData?.attributes?.stripeAccountData?.capabilities?.transfers == 'active';

                dispatch(setStripeAccount({ ...stripeData, isTransferActivated, loaded: true }));
            })
            .catch(error => {
                dispatch(setStripeAccount({
                    attributes: null,
                    id: null,
                    type: null,
                    isTransferActivated: null,
                    loaded: true,
                }));
            });
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


    useEffect(() => {
        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        (function () {
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = "https://embed.tawk.to/5e99c02035bcbb0c9ab226f8/default";
            s1.charset = "UTF - 8";
            s1.setAttribute("crossorigin", "*");
            s0.parentNode.insertBefore(s1, s0);
        })();

    }, [])

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
                            <Head>
                                <title>{ogTags.title ? ogTags.title : title}</title>
                                {
                                    Object.keys(ogTags)
                                        ?.map(key => {
                                            // Returning if og tag has no value
                                            if (!ogTags[key]) return null;

                                            // Return og tag
                                            return <meta key={key} property={`og:${key}`} content={ogTags[key]} />
                                        })
                                }
                            </Head>
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