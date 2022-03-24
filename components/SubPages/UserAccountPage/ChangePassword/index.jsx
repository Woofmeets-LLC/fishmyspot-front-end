import { Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import { getSdk } from '../../../../sharetribe/sharetribeSDK';
import { FormInput } from '../../../Common';

const ChangePassword = () => {
  const handleSubmit = (values) => {
    getSdk().currentUser.changePassword({
      currentPassword: values.currentPassword,
      newPassword: values.newPassword
    }, {
      expand: true
    }).then(res => {
      toast.success('Password updated successfully');
    })
      .catch(err => toast.error("Opps, something went wrong"));
  }
  return (
    <Formik
      initialValues={{
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      }}
      validationSchema={yup.object().shape({
        currentPassword: yup.string().required("Required").min(8, "Too Short!"),
        newPassword: yup.string().required("Required").min(8, "Too Short!"),
        confirmPassword: yup.string()
          .oneOf([yup.ref('newPassword'), null], 'Password does not match'),
      })}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      <Form>
        <div className='bg-white md:w-[600px] lg:w-[700px] 2xl:w-[746px] py-5 px-4 sm:p-5 md:p-8 2xl:pl-11 2xl:pt-11 2xl:pr-16 2xl:pb-12 shadow-md rounded-xl'>
          <div className="mb-3 lg:mb-5">
            <FormInput
              name="currentPassword"
              label="Current Password"
              type="password"
              placeholder="current password"
            />
          </div>
          <div className="mb-3 lg:mb-5">
            <FormInput
              name="newPassword"
              label="New Password"
              type="password"
              placeholder="new password"
            />
          </div>
          <div className="mb-3 lg:mb-5">
            <FormInput
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="confirm password"
            />
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="py-1 px-3 md:py-2 md:px-4 lg:px-5 2xl:py-3 2xl:px-6 text-base 2xl:text-lg text-white font-trade-gothic-bold bg-secondary rounded"
            >
              Update
            </button>
          </div>
        </div>
      </Form>
    </Formik>

  );
};

export default ChangePassword;