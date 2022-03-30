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

    // This function will manage the dropdown menus of available time of listing creation and listing edit
    const closeDropdowns = (e) => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Everyday'];

        days.forEach(day => {
            // The logic for each day, based on the day name in the available time page/part

            const allDropdowns = document.querySelectorAll(`[data-dropdown-${day.toLocaleLowerCase()}]`);

            // Checking if the clicked element is a dropdown menu
            if (`dropdown${day}` in e.target.dataset) {
                const isChecked = document.querySelector(`[data-checkbox-${day.toLocaleLowerCase()}]`)?.dataset[`checkbox${day}`] == 'true';

                // Checking if the day checkbox selected or not
                if (isChecked) {
                    const dropdownWrapper = document.querySelector(`[data-dropdown-wrap-${day.toLocaleLowerCase()}]`);
                    const isDropdownOpen = document.querySelector(`[data-dropdown-${day.toLocaleLowerCase()}]`).dataset[`dropdown${day}`] == 'false';

                    // Checking if the dropdown menu is open or not. If open then it will close or else it will open
                    if (isDropdownOpen) {
                        dropdownWrapper.classList.add('block');
                        dropdownWrapper.classList.remove('hidden');
                    } else {
                        dropdownWrapper.classList.add('hidden');
                        dropdownWrapper.classList.remove('block');
                    }

                    // it is updating the dropdown menu dataset
                    allDropdowns?.forEach(el => {
                        el.dataset[`dropdown${day}`] = el.dataset[`dropdown${day}`] == 'true' ? 'false' : 'true';
                    });
                }
            } else if (day.toLocaleLowerCase() in e.target.dataset) {
                // It will do nothing if the clicked element is a day name
            } else {
                allDropdowns?.forEach(el => {
                    // here closing all the dropdown menus
                    el.dataset[`dropdown${day}`] = 'false';
                });

                // here hiding all the dropdown menus
                document.querySelectorAll(`[data-dropdown-wrap-${day.toLocaleLowerCase()}]`)
                    ?.forEach(el => {
                        el.classList.add('hidden');
                        el.classList.remove('block');
                    });
            }
        })

        if (document.querySelector(`[data-checkbox-everyday]`)?.dataset[`checkboxEveryday`] == 'true') {
            days?.forEach(day => {
                if (day != 'Everyday') {
                    document.querySelectorAll(`[data-dropdown-wrap-${day.toLocaleLowerCase()}]`)
                        ?.forEach(el => {
                            el.classList.add('hidden');
                            el.classList.remove('block');
                        });
                }
            })
        }
    }

    return (
        <div onClick={closeDropdowns}>
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

        </div>
    );
};

export default HomeLayout;