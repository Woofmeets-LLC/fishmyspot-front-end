import { Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { getSdk } from '../../../../sharetribe/sharetribeSDK';
import { updateUser } from '../../../../store/slices/authSlice';
import PersonalInformation from './PersonalInformation';

const PersonalInfo = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    getSdk()
      .currentUser.updateProfile(
        {
          firstName: values.firstName,
          lastName: values.lastName,
          publicData: {
            dateOfBirth: values.dateOfBirth,
            phone: values.phone,
            address: values.address,
          },
        },
        {
          expand: true,
        }
      )
      .then(() => {
        dispatch(updateUser());
        toast.success('Profile updated successfully');
      })
      .catch((err) => toast.error('Opps, something went wrong'));
  };

  return (
    <div className="rounded-xl bg-white py-5 px-4 shadow-md sm:p-5 md:w-[600px] md:p-8 lg:w-[700px] 2xl:w-[746px] 2xl:pl-11 2xl:pt-11 2xl:pr-16 2xl:pb-12">
      <Formik
        initialValues={{
          firstName: user?.profile?.firstName,
          lastName: user?.profile?.lastName,
          email: user?.email,
          phone: user?.profile?.publicData?.phone || '',
          dateOfBirth: user?.profile?.publicData?.dateOfBirth || '',
          address: user?.profile?.publicData?.address || '',
        }}
        validationSchema={yup.object().shape({
          firstName: yup.string().required('Required'),
          lastName: yup.string().required('Required'),
          dateOfBirth: yup.string().required('Required'),
          phone: yup.string().required('Required'),
          address: yup.string().required('Required'),
        })}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        <Form>
          <PersonalInformation />
        </Form>
      </Formik>
    </div>
  );
};

export default PersonalInfo;
