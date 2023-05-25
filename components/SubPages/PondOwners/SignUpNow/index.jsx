import React from 'react';
import { SignUpWrapper } from '../../../Common';

const SignUpNow = () => {
  return (
    <div
      id="get-started"
      className="my-10 bg-primary/10 py-10 md:my-14 lg:my-20 lg:py-16"
    >
      <div className="container mx-auto  pl-8 pr-6 pt-4 pb-10 smd:w-[420px] md:w-[500px] xl:pl-10 xl:pr-8 2xl:w-[593px] 2xl:pl-14 2xl:pr-12 3xl:pl-20 3xl:pr-[72px] 3xl:pt-6 3xl:pb-10">
        <h3 className="mb-4 font-trade-gothic-bold text-4xl text-primary">
          Get started today and start earning income.
        </h3>
        <p className="mb-4">
          No sign up or listing fee. No minimum number of reservations.
        </p>
        <SignUpWrapper mode="owner" />
      </div>
    </div>
  );
};

export default SignUpNow;
