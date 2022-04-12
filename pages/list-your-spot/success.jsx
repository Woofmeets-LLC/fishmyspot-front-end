import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import HomeLayout from '../../layouts/HomeLayout';

const Success = () => {
    const auth = useSelector(state => state.auth);
    const router = useRouter();

    useEffect(() => {
        if (router?.isReady && router?.query?.listed != "true") {
            router?.push('/');
        }
    }, [router]);
    return (
        <HomeLayout
            isPrivate
            guards={{
                account_type: "owner",
                fallbackUrl: "/",
            }}>
            <div className="my-16 lg:my-20 text-center text-primary space-y-5 2xl:space-y-7">
                {
                    (router?.isReady && router?.query?.listed == "true")
                        ? (
                            <>
                                <h2 className="text-xl xl:text-2xl 3xl:text-3xl font-trade-gothic">Thank you, {auth?.user?.profile?.displayName}!</h2>
                                <h1 className="text-3xl 2xl:text-4xl 3xl:text-5xl uppercase font-food-truck underline">Submitted your spot successfully!!</h1>
                                <p className="w-4/5 md:w-3/5 lg:w-1/2 2xl:w-2/5 3xl:w-1/3 mx-auto">Your listing has been submitted. There is just one more step! We are reviewing your request and a member of our team will reach out to you. Your spot will be shared within two business days.</p>
                            </>
                        )
                        : (
                            <div className="flex justify-center items-center flex-wrap my-10">
                                <ClipLoader size={50} color={'#1971ff'} />
                                <h2 className="w-full text-center font-semibold mt-2">Loading...</h2>
                            </div>
                        )
                }
            </div>
        </HomeLayout>
    );
};

export default Success;