import { Form, Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import FormComponent from '../../components/SubPages/ContactUsPage/FormComponent';
import HomeLayout from '../../layouts/HomeLayout';

const ContactUs = () => {
  const initialValues = {
    email: '',
    name: '',
    message: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const data = {
      service_id: 'service_0z8txkg',
      template_id: 'template_x5vkq6b',
      user_id: 'D9WeGnhaGJceVldKx',
      template_params: {
        from_name: values.name,
        to_name: 'FMS Admin',
        reply_to: values.email,
        message: values.message,
      },
    };
    const sentEmail = fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    toast.promise(sentEmail, {
      duration: 3000,
      loading: 'Message sending...',
      success: (res) => {
        return `Your Message sent successfully!`;
      },
      error: (err) => {
        setIsSubmitting(false);
        return `Something went wrong. Please try again!`;
      },
    });

    resetForm({
      initialValues,
    });
  };
  return (
    <>
      <Toaster />
      <HomeLayout>
        <div className="container">
          <div className="mx-auto py-8 md:w-3/5 md:py-10 lg:w-1/2 lg:py-12 2xl:py-20">
            <h1 className="mb-6 text-center font-food-truck text-4xl uppercase text-secondary lg:text-5xl">
              Contact Us
            </h1>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                <FormComponent />
                <div className="w-full">
                  <button
                    type="submit"
                    className="inline-block w-full rounded bg-secondary py-3 px-4 font-trade-gothic-bold text-white"
                  >
                    Send
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </HomeLayout>
    </>
  );
};

export default ContactUs;
