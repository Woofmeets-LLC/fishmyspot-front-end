/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { IoAdd } from 'react-icons/io5';
import { RiListCheck } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { WantToSkipForms } from '../../components/Common';
import TopImageCard from '../../components/SubPages/ListYourSpotPage/SubTopImageCard';
import HomeLayout from '../../layouts/HomeLayout';
import { getRequest } from '../../services/requests';
import { getSdk } from '../../sharetribe/sharetribeSDK';
import { setFishes } from '../../store/slices/listSpotContentsSlice';
import { setStripeAccount } from '../../store/slices/stripeAccountSlice';

const ListYourPond = () => {
  const [loading, setLoading] = useState(false);
  const [stripeLoading, setStripeLoading] = useState(false);

  // Redux
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isLoggedIn, user } = auth;
  const fishes = useSelector((state) => state.listSpotContents.fishes);
  const fishesObject = fishes
    ?.map((fish) => fish.name + '_' + fish.id)
    ?.reduce((prevObj, key) => ({ ...prevObj, [key]: false }), {});
  const { isTransferActivated, loaded, attributes } = useSelector(
    (state) => state.stripeAccount
  );

  useEffect(() => {
    if (loaded) {
      !isTransferActivated;
    }
  }, [loaded]);

  // routes
  const router = useRouter();

  const getStripeAccount = () => {
    getSdk()
      .stripeAccount.fetch()
      .then((res) => {
        const stripeData = res?.data?.data;
        const isTransferActivated =
          stripeData?.attributes?.stripeAccountData?.capabilities
            ?.card_payments == 'active' ||
          stripeData?.attributes?.stripeAccountData?.capabilities?.transfers ==
            'active';

        dispatch(
          setStripeAccount({ ...stripeData, isTransferActivated, loaded: true })
        );
        if (isTransferActivated) {
          setStripeLoading(false);
        } else {
          getStripeAccount();
        }
      })
      .catch((error) => {
        setStripeLoading(false);
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
  };

  // Updating fishes image to redux
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onfocus = () => {
        getStripeAccount();
      };
    }

    getRequest('fishes')
      .then((res) => {
        dispatch(setFishes(res.data));
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    if (router.query?.sl) {
      if (router.query.sl == 'dl') {
        if (typeof window !== 'undefined') {
          window.close();
        }
      }
    }
  }, [router]);

  const [listingData, setListingData] = useState({});
  useEffect(() => {
    if (localStorage?.getItem('listingData')) {
      setListingData(JSON.parse(localStorage?.getItem('listingData')));
    }
  }, []);

  const recentVerificationEmail = () => {
    getSdk()
      .currentUser.sendVerificationEmail()
      .then((res) => {
        // res.data
        toast.success('Verification email sent.', { duration: 3000 });
      });
  };

  const buttonClass =
    'm-[1px] flex cursor-pointer flex-wrap items-center gap-3 rounded-lg border !border-gray-200 !p-4 first-letter:uppercase !sm:p-6 justify-center';
  const iconClass = 'text-3xl sm:text-3xl md:text-4xl';
  const textClass =
    'font-sans text-base font-medium smd:text-[17px] md:text-lg';

  return (
    <HomeLayout
      isPrivate
      guards={{
        account_type: 'owner',
        fallbackUrl: '/',
      }}
    >
      <TopImageCard />

      {!user?.emailVerified ? (
        <div className="container">
          <div className="mx-auto my-10 rounded p-8 text-center font-trade-gothic text-lg text-red-500 shadow md:w-3/4">
            Your email is not verified. Please{' '}
            <button
              className="font-trade-gothic-bold text-secondary underline"
              onClick={recentVerificationEmail}
            >
              verify your email
            </button>{' '}
            first to list your spot.
          </div>
        </div>
      ) : (
        <div className="container my-14 lg:my-20">
          <div className="mx-auto grid gap-4 md:grid-cols-2 lg:w-2/3">
            <Link href="/list-your-spot">
              <a className={buttonClass}>
                <IoAdd className={iconClass} />
                <span className={textClass}>List your spot</span>
              </a>
            </Link>

            <Link href="/own-spot-list">
              <a className={buttonClass}>
                <RiListCheck className={iconClass} />{' '}
                <span className={textClass}>My All Listings</span>
              </a>
            </Link>

            {/* <Link href="/manage-listings"></Link> */}
          </div>
        </div>
      )}
      <WantToSkipForms />
    </HomeLayout>
  );
};

export default ListYourPond;
