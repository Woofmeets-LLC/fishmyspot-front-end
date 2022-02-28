import React from 'react';

const SingleQuestion = ({ question }) => {
  return (
    <div className='mb-6'>
      <h5 className='text-base'>{question}</h5>
      <div className='text-sm mt-5'>
        <p>
          If you don't have an FishMySpot account yet, go to FishMySpot.com and click
          <span class="text-blue-300 cursor-pointer">{" "}Sign Up.</span>
        </p>
        <br />
        <p>
          You can sign up for an account using your email address, phone number, Facebook account, Google account, or Apple ID. Signing up and creating an FishMySpot account is free.
        </p>
        <br />
        <p>
          After you sign up, be sure to complete your account before booking a reservation.
        </p>
      </div>
    </div>
  );
};

export default SingleQuestion;