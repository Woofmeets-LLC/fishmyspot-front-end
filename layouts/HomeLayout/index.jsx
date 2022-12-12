/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */

import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect, useState } from 'react';
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
  title = 'Fish My Spot',
  ogTags = {
    title: '',
    description: 'You will find best fishing spots in your area',
    image: '/fish-my-spot-featured-image.jpg',
  },
}) => {
  const dispatch = useDispatch();
  const { isLoading, isLoggedIn, user } = useSelector((state) => state.auth);
  const [guardChecking, setGuardChecking] = useState(true);

  const { push } = useRouter();

  // This is for initializing the log rocket SDK

  // useEffect(() => {
  //  LogRocket.init('7rp2z0/fishmyspot');
  // if (isLoggedIn) {
  //   LogRocket.identify(user?.id, {
  //     name: `${user?.profile?.firstName} ${user?.profile?.lastName}`,
  //     email: user?.email,
  // Add your own custom user variables here, ie:
  // account_type: user?.profile?.publicData?.account_type,
  //   });
  // }
  // }, []);

  useEffect(() => {
    // It will update user data in redux in every reload if user is logged in
    dispatch(login());

    // It will update stripe data in redux in every reload if found
    if (user?.profile?.publicData?.account_type == 'owner') {
      getSdk()
        .stripeAccount.fetch()
        .then((res) => {
          const stripeData = res?.data?.data;
          const isTransferActivated =
            stripeData?.attributes?.stripeAccountData?.capabilities
              ?.card_payments == 'active' ||
            stripeData?.attributes?.stripeAccountData?.capabilities
              ?.transfers == 'active';

          dispatch(
            setStripeAccount({
              ...stripeData,
              isTransferActivated,
              loaded: true,
            })
          );
        })
        .catch((error) => {
          dispatch(
            setStripeAccount({
              attributes: null,
              id: null,
              type: null,
              isTransferActivated: null,
              loaded: true,
            })
          );
        });
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!isLoading) {
        if (isPrivate) {
          if (isLoggedIn) {
            if (guards.account_type) {
              if (
                guards.account_type != user?.profile?.publicData?.account_type
              ) {
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
  }, [isLoading, isLoggedIn]);

  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement('script'),
        s0 = document.getElementsByTagName('script')[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/5e99c02035bcbb0c9ab226f8/default';
      s1.charset = 'UTF - 8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-132823088-1"
      />
      <Script strategy="afterInteractive" id="googletagmanager-tag">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-132823088-1');
        `}
      </Script>

      {/* <!-- Meta Pixel Code --> */}
      <Script
        strategy="afterInteractive"
        id="meta-pixel"
        dangerouslySetInnerHTML={{
          __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '477054344548753');
                fbq('track', 'PageView');
              `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=477054344548753&ev=PageView&noscript=1"
        />
      </noscript>
      {/* <!-- End Meta Pixel Code --> */}

      <Head>
        <title>{ogTags.title ? ogTags.title : title}</title>
        {Object.keys(ogTags)?.map((key) => {
          // Returning if og tag has no value
          if (!ogTags[key]) return null;

          // Return og tag
          return (
            <meta
              key={key}
              name={key}
              property={`og:${key}`}
              content={ogTags[key]}
            />
          );
        })}
      </Head>
      {isLoading || guardChecking ? (
        <div className="flex h-screen w-screen flex-wrap items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <ClipLoader size={50} color={'#1971ff'} />
            <h2 className="mt-2 w-full text-center font-semibold">
              Loading...
            </h2>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
};

export default HomeLayout;
