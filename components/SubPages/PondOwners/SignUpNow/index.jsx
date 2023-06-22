import React from 'react';
import { SignUpWrapper } from '../../../Common';

const SignUpNow = () => {
  return (
    <div
      id="get-started"
      className="my-10 bg-primary/10 py-10 md:my-14 lg:my-20 lg:py-16"
    >
      <div className="container mx-auto  pl-8 pr-6 pt-4 pb-10 smd:w-[420px] md:w-[500px] xl:pl-10 xl:pr-8 2xl:w-[593px] 2xl:pl-14 2xl:pr-12 3xl:pl-20 3xl:pr-[72px] 3xl:pt-6 3xl:pb-10">
        <h3 className="mb-2 text-center font-trade-gothic-bold text-3xl text-primary xs:text-4xl">
          Begin now and start
        </h3>{' '}
        <h3 className="mb-4 text-center font-trade-gothic-bold text-3xl text-primary xs:text-4xl">
          earning today.
        </h3>
        <p className="mb-4 text-center">
          No upfront fee. No reservation minimums. Host on your terms, with the
          flexibility to stop at any time.
        </p>
        <SignUpWrapper mode="owner" />
      </div>
    </div>
  );
};

export default SignUpNow;
