import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { LoginModal, SignUpModal } from '../../../components/Common';
import { getSdk } from '../../../sharetribe/sharetribeSDK';
import { logoutAction } from '../../../store/slices/authSlice';
import {
  setShowLoginModal,
  setShowSignUpModal,
} from '../../../store/slices/modalsSlice';
import SearchBar from './SearchBar';

const backdropVariants = {
  hidden: {
    opacity: 0,
    minHeight: '0px',
  },
  visible: {
    opacity: 1,
    minHeight: '100px',
  },
  exit: {
    opacity: 0,
    minHeight: '0px',
  },
};

const Header = () => {
  // States
  const [isActive, setIsActive] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const { isTransferActivated } = useSelector((state) => state.stripeAccount);
  const { isFirst, latLng } = useSelector((state) => state.place);

  // Dispatch
  const dispatch = useDispatch();

  const [isLimitedUser, setIsLimitedUser] = useState(false);

  useEffect(() => {
    getSdk()
      .authInfo()
      .then((authInfo) => {
        if (
          authInfo &&
          authInfo?.isAnonymous === false &&
          authInfo?.scopes?.[0] === 'user:limited'
        ) {
          setIsLimitedUser(true);
        }
      });
  }, []);

  const createAccountLink = () => {
    const originURL = window.location.origin;
    getSdk()
      .stripeAccountLinks.create({
        failureURL: originURL,
        successURL: originURL + '/become-a-seller',
        type: 'account_onboarding',
        collect: 'currently_due',
      })
      .then((res) => {
        if (typeof window !== 'undefined') {
          window.location = res.data?.data?.attributes?.url;
        }
      })
      .catch((err) => {});
  };

  // For stripe connection
  const createStripeAccount = () => {
    getSdk()
      .stripeAccount.create(
        {
          country: 'US',
          requestedCapabilities: ['transfers', 'card_payments'],
        },
        {
          expand: true,
        }
      )
      .then((res) => {
        createAccountLink();
      })
      .catch((err) => {});
  };

  const recentVerificationEmail = () => {
    getSdk()
      .currentUser.sendVerificationEmail()
      .then((res) => {
        // res.data
        toast.success('Verification email sent.', { duration: 3000 });
      });
  };

  return (
    <>
      <SignUpModal />
      <LoginModal />
      <Toaster />
      <header className="sticky top-0 z-[1000] bg-white shadow">
        {isLimitedUser && (
          <div className="bg-yellow-500 p-4 text-yellow-50">
            <p className="text-center">
              You are logged in as {user?.email} with limited functionalities!
            </p>
          </div>
        )}
        <div className="container relative flex h-[70px] items-center 2xl:h-[85px] 3xl:h-[102px]">
          <Link href="/">
            <a>
              <div className="mr-4 flex h-full w-[95px] items-center 2xl:mr-6 2xl:w-[118px] 3xl:w-[134px]">
                <img src="/images/logo.png" className="w-full" alt="logo" />
              </div>
            </a>
          </Link>
          <div className="hidden h-full w-[300px] items-center border-l px-8 md:flex lg:w-[400px] lg:px-16 xl:w-[550px] 2xl:w-[620px] 3xl:w-[750px]">
            <SearchBar />
          </div>

          {/* Before login right side items */}
          {!isLoggedIn && (
            <>
              <div
                style={{ transition: 'all 0.2s ease!important' }}
                className={`absolute top-[74px] right-0 block w-[150px] transform space-y-2 bg-white px-2 transition md:static md:ml-auto md:flex md:h-[70px] md:w-auto md:items-center md:space-y-0 md:space-x-10 2xl:h-[85px] 3xl:h-[102px] ${
                  isActive
                    ? 'h-auto rounded border py-2 md:border-0'
                    : 'h-0 overflow-hidden py-0'
                }`}
              >
                <Link href="/pond-owners">
                  <a
                    className={`block font-trade-gothic-bold text-primary md:inline-block 2xl:text-[18px]`}
                  >
                    For Pond Owners
                  </a>
                </Link>
                <Link href="/services">
                  <a
                    className={`block font-trade-gothic-bold text-primary md:inline-block 2xl:text-[18px]`}
                  >
                    Fish Now
                  </a>
                </Link>
                <button
                  onClick={() => !isLoggedIn && dispatch(setShowSignUpModal())}
                  className="block font-trade-gothic-bold text-primary md:hidden lg:inline-block 2xl:text-[18px]"
                >
                  Sign-up
                </button>
                <button
                  onClick={() => !isLoggedIn && dispatch(setShowLoginModal())}
                  className="block font-trade-gothic-bold text-primary md:inline-block 2xl:text-[18px]"
                >
                  Log-in
                </button>
              </div>
              <div className="ml-auto block md:hidden">
                <button
                  onClick={() => setIsActive((prevValue) => !prevValue)}
                  className=" block h-[70px] py-4 px-2 text-2xl text-primary md:py-5 lg:hidden lg:text-3xl"
                >
                  <div className="relative flex cursor-pointer flex-col items-end lg:hidden">
                    <span
                      className={`transform rounded-sm bg-primary transition duration-500 ${
                        isActive
                          ? 'mb-2 h-1 w-7 translate-y-3 rotate-45'
                          : 'mb-[6px] h-[3px] w-7 translate-y-0 rotate-0'
                      }`}
                    ></span>
                    <span
                      className={` w-5 transform rounded-sm bg-primary transition duration-500 ${
                        isActive
                          ? 'mb-2 h-1 opacity-0'
                          : 'opacity-1 mb-[6px] h-[3px]'
                      }`}
                    ></span>
                    <span
                      className={`w-7 transform rounded-sm bg-primary transition duration-500 ${
                        isActive
                          ? 'h-1 -translate-y-3 -rotate-45'
                          : 'h-[3px] translate-y-0 rotate-0'
                      }`}
                    ></span>
                  </div>
                </button>
              </div>
            </>
          )}

          {/* After login  right side items*/}
          {isLoggedIn && (
            <div
              style={{ transition: 'all 0.2s ease!important' }}
              className={`ml-auto flex h-[70px] w-auto transform items-center space-y-0 space-x-10 rounded border-0 bg-white px-2 py-2 transition 2xl:h-[85px] 3xl:h-[102px]`}
            >
              {user?.profile?.publicData?.account_type == 'owner' && (
                <Link href="/become-a-seller">
                  <a
                    className={`hidden font-trade-gothic-bold text-primary md:inline-block 2xl:text-[18px]`}
                  >
                    List your spot +
                  </a>
                </Link>
              )}
              {user?.profile?.publicData?.account_type == 'angler' && (
                <Link href="/services">
                  <a
                    className={`hidden font-trade-gothic-bold text-primary md:inline-block 2xl:text-[18px]`}
                  >
                    Fish Now
                  </a>
                </Link>
              )}
              <div className="ml-auto flex items-center rounded-full border px-3 shadow">
                <div className="block">
                  <button
                    onClick={() => setIsMenuActive((prevValue) => !prevValue)}
                    className=" block  py-1 px-2 text-2xl text-primary lg:text-3xl"
                  >
                    <div className=" relative flex cursor-pointer flex-col items-end">
                      <span
                        className={`h-[3px] transform rounded-sm bg-primary transition duration-500 ${
                          isMenuActive
                            ? 'mb-2 w-5 translate-y-[11px] rotate-[48deg]'
                            : 'mb-1 w-5 translate-y-0 rotate-0'
                        }`}
                      ></span>
                      <span
                        className={` h-[3px] w-5 transform rounded-sm bg-primary transition duration-500 ${
                          isMenuActive ? 'mb-2 opacity-0' : 'opacity-1 mb-1'
                        }`}
                      ></span>
                      <span
                        className={`h-[3px] w-5 transform rounded-sm bg-primary transition duration-500 ${
                          isMenuActive
                            ? '-translate-y-[11px] -rotate-[48deg]'
                            : 'translate-y-0 rotate-0'
                        }`}
                      ></span>
                    </div>
                  </button>
                </div>
                <FaUserCircle className="cursor-pointer p-2 text-[40px] text-primary" />
              </div>
            </div>
          )}

          {/* Menu after login */}
          <AnimatePresence>
            {isLoggedIn && isMenuActive && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={backdropVariants}
                className={`absolute top-[74px] right-[20px] block h-auto w-[150px] space-y-2 rounded border bg-white px-4 py-2 md:ml-auto md:w-auto`}
              >
                {user?.profile?.publicData?.account_type == 'owner' && (
                  <Link href="/become-a-seller">
                    <a
                      className={`block font-trade-gothic-bold text-sm text-primary md:hidden md:text-base lg:text-base 2xl:text-[18px]`}
                    >
                      List your spot +
                    </a>
                  </Link>
                )}
                {user?.profile?.publicData?.account_type == 'angler' && (
                  <Link href="/services">
                    <a
                      className={`block font-trade-gothic-bold text-sm text-primary md:hidden md:text-base lg:text-base 2xl:text-[18px]`}
                    >
                      Fish Now
                    </a>
                  </Link>
                )}
                <Link href="/messages">
                  <a
                    className={`block font-trade-gothic-bold text-sm text-primary md:text-base lg:text-base 2xl:text-[18px]`}
                  >
                    Message
                  </a>
                </Link>
                {/* <Link href="/notifications" >
                                    <a className="block text-primary font-trade-gothic-bold text-sm md:text-base lg:text-base 2xl:text-[18px]">Notification </a>
                                </Link> */}
                {user?.profile?.publicData?.account_type === 'angler' && (
                  <Link href="/favorite-pond-list">
                    <a className="block font-trade-gothic-bold text-sm text-primary md:text-base lg:text-base 2xl:text-[18px]">
                      Favorite Ponds{' '}
                    </a>
                  </Link>
                )}
                <Link
                  href={
                    user?.profile?.publicData?.account_type === 'angler'
                      ? '/settings'
                      : '/seller-dashboard'
                  }
                >
                  <a className="block font-trade-gothic-bold text-sm text-primary md:text-base lg:text-base 2xl:text-[18px]">
                    Dashboard{' '}
                  </a>
                </Link>
                {/* <Link href="/cancellation" >
                                    <a className="block text-primary font-trade-gothic-bold text-sm md:text-base lg:text-base 2xl:text-[18px]">Cancellation  </a>
                                </Link> */}
                {user?.profile?.publicData?.account_type === 'angler' && (
                  <Link href="/help">
                    <a className="block font-trade-gothic-bold text-sm text-primary md:text-base lg:text-base 2xl:text-[18px]">
                      Help{' '}
                    </a>
                  </Link>
                )}
                <button
                  onClick={() => dispatch(logoutAction())}
                  className="block font-trade-gothic-bold text-sm text-primary md:text-base lg:text-base 2xl:text-[18px]"
                >
                  Logout
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="container px-10 pb-4 md:hidden">
          <SearchBar />
        </div>
      </header>
      {isLoggedIn && !user?.emailVerified && (
        <div className="bg-secondary text-center text-white">
          <div className="container">
            Please{' '}
            <button className="underline" onClick={recentVerificationEmail}>
              verify your email
            </button>
            . Without email verification you can not{' '}
            {user?.profile?.publicData?.account_type == 'angler'
              ? 'book ponds.'
              : 'list your spots.'}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
