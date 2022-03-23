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

  const { isLoading, isLoggedIn } = useSelector(state => state.auth);

  useEffect(() => {
    isLoggedIn && push('/');
  }, [isLoggedIn])

  useEffect(() => {
    !isLoading && !t && !e && push('/');
  }, [query])

  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  }

  const validationSchema = yup.object().shape({
    newPassword: yup.string().required("Required").min(8, "Too Short!"),
    confirmPassword: yup.string()
      .oneOf([yup.ref('newPassword'), null], 'Password does not match'),
  });


  const handleSubmit = (values) => {
    // setIsSuccess(true);
    getSdk().passwordReset.reset({
      email: e,
      passwordResetToken: t,
      newPassword: values?.newPassword,
    }, {})
      .then(res => {
        // res.data
        console.log(res.data);
        toast.success('Password reset successfully');
        router.push('/');
      })
      .catch(err => toast.error("Opps, something went wrong"))
  }

  return (
    <HomeLayout>
      {
        !isLoggedIn && t && e && (
          <div className="container">
            <div className="md:w-2/3 lg:w-1/3 mx-auto">
              <Toaster />
              <div className="sidebar pr-2">
                <div className="pb-8">
                  <div className="mb-2 2xl:mb-4">
                    <img
                      className="w-28 2xl:w-[125px] h-28 2xl:h-[125px] mx-auto mt-4"
                      src="/images/key-circle.png"
                      alt="" />
                  </div>
                  <h2 className="font-food-truck text-3xl xl:text-4xl 2xl:text-[44px] 3xl:text-5xl text-primary text-center mb-3 2xl:mb-5"> RESET PASSWORD</h2>
                  <p className="font-trade-gothic text-center px-2 mb-4 2xl:mb-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    enableReinitialize={true}
                    onSubmit={handleSubmit}>
                    <Form>
                      <ResetPasswordForm /><button
                        type="submit"
                        className="block w-full bg-highlight-3 text-white text-center font-trade-gothic-bold py-2 mt-5 2xl:mt-8">Save</button>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </HomeLayout>
  );
};

export default ResetPassword;