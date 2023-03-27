/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import ResetPasswordForm from '../../components/Common/Modals/ResetPasswordModal/ResetPasswordForm';
import HomeLayout from '../../layouts/HomeLayout';
import { getSdk } from '../../sharetribe/sharetribeSDK';

const ResetPassword = () => {
  const { query, push } = useRouter();
  const { t, e } = query;

  const { isLoading, isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    isLoggedIn && push('/');
  }, [isLoggedIn]);

  useEffect(() => {
    !isLoading && !t && !e && push('/');
  }, [query]);

  const initialValues = {
    newPassword: '',
    confirmPassword: '',
  };

  const validationSchema = yup.object().shape({
    newPassword: yup.string().required('Required').min(8, 'Too Short!'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('newPassword'), null], 'Password does not match'),
  });

  const handleSubmit = (values) => {
    // setIsSuccess(true);
    getSdk()
      .passwordReset.reset(
        {
          email: e,
          passwordResetToken: t,
          newPassword: values?.newPassword,
        },
        {}
      )
      .then((res) => {
        // res.data
        toast.success('Password reset successfully', { duration: 4000 });
        push('/');
      })
      .catch((err) => {
        toast.error('Opps, something went wrong', { duration: 2000 });
        push('/');
      });
  };

  return (
    <HomeLayout>
      {!isLoggedIn && t && e && (
        <div className="container">
          <div className="mx-auto md:w-2/3 lg:w-1/3">
            <Toaster />
            <div className="sidebar pr-2">
              <div className="pb-8">
                <div className="mb-2 2xl:mb-4">
                  <img
                    className="mx-auto mt-4 h-28 w-28 2xl:h-[125px] 2xl:w-[125px]"
                    src="/images/key-circle.png"
                    alt=""
                  />
                </div>
                <h2 className="mb-3 text-center font-food-truck text-3xl text-primary xl:text-4xl 2xl:mb-5 2xl:text-[44px] 3xl:text-5xl">
                  {' '}
                  RESET PASSWORD
                </h2>
                <p className="mb-4 px-2 text-center font-trade-gothic 2xl:mb-6">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut
                </p>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  enableReinitialize={true}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <ResetPasswordForm />
                    <button
                      type="submit"
                      className="mt-5 block w-full bg-highlight-3 py-2 text-center font-trade-gothic-bold text-white 2xl:mt-8"
                    >
                      Save
                    </button>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      )}
    </HomeLayout>
  );
};

export default ResetPassword;
