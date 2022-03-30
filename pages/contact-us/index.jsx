import { Formik, Form } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import FormComponent from '../../components/SubPages/ContactUsPage/FormComponent';
import HomeLayout from '../../layouts/HomeLayout';

const ContactUs = () => {

  const initialValues = {
    email: '',
    name: '',
    message: '',
  }

  const handleSubmit = (values, { resetForm }) => {
    const data = {
      service_id: 'service_nkd5d7m',
      template_id: 'template_y72zlzw',
      user_id: 'JqysG9KwXEN15uPyB',
      template_params: {
        'from_name': values.name,
        'to_name': 'FMS Admin',
        reply_to: values.email,
        message: values.message,
      }
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
        return `Your Message sent successfully!`
      },
      error: (err) => {
        setIsSubmitting(false);
        return `Something went wrong. Please try again!`;
      },
    })

    resetForm({
      initialValues,
    })
  }
  return (
    <>
      <Toaster />
      <HomeLayout>
        <div className="container">
          <div className="md:w-3/5 lg:w-1/2 mx-auto py-8 md:py-10 lg:py-12 2xl:py-20">
            <h1 className="text-4xl lg:text-5xl text-secondary uppercase font-food-truck text-center mb-6">Contact Us</h1>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
            >
              <Form>
                <FormComponent />
                <div className="w-full">
                  <button
                    type="submit"
                    className="inline-block w-full bg-secondary py-3 px-4 rounded text-white font-trade-gothic-bold"
                  >Send</button>
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