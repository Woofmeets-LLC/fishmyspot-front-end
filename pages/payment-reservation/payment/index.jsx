import { useRouter } from 'next/router';
import React from 'react';
import SubCheckoutForm from '../../../components/SubPages/PaymentPage/SubCheckoutForm';
import SubStripeWrapper from '../../../components/SubPages/PaymentPage/SubStripeWrapper';

const Payment = () => {
    const router = useRouter();
    console.log({
        tran: router?.query?.tran,
        sk: router?.query?.sk
    });
    return (
        // <HomeLayout>

        router?.query?.sk && router?.query?.tran
            ? <SubStripeWrapper>
                <SubCheckoutForm id={router?.query?.tran} secret={router?.query?.sk} />
            </SubStripeWrapper>
            : null
        // </HomeLayout>
    );
};

export default Payment;
