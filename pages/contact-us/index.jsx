import { Formik, Form } from 'formik';
import HomeLayout from '../../layouts/HomeLayout';
import FormComponent from './FormComponent';

const ContactUs = () => {
  const handleSubmit = (values) => {
    console.log(values);
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
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => console.log(res))
  }
  return (
    <HomeLayout>
      <div className="container">
        <div className="md:w-3/5 lg:w-1/2 mx-auto py-8 md:py-10 lg:py-12 2xl:py-20">
          <h1 className="text-4xl lg:text-5xl text-secondary uppercase font-food-truck text-center mb-6">Contact Us</h1>
          <Formik
            initialValues={{
              name: '',
              email: '',
              message: '',
            }}
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
  );
};

export default ContactUs;