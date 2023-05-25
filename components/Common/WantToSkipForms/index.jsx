import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsTelephoneFill } from 'react-icons/bs';

const WantToSkipForms = () => {
  return (
    <div className="flex justify-center bg-primary/10">
      <div className="my-10 text-center">
        <h3 className="mb-4 w-72 text-4xl font-semibold">
          Want to skip the forms?
        </h3>
        <div className="">
          <Image
            src="/consultant.png"
            className="overflow-hidden rounded-full"
            height={100}
            width={100}
            alt=""
          />
        </div>
        <p className="mb-4 text-xl font-semibold">Larissa Smith</p>
        <div className="inline-flex flex-col">
          <Link href="/contact-us">
            <a className="rounded bg-secondary py-1 px-3 font-trade-gothic-bold text-base text-white shadow-black drop-shadow-md  md:py-2 md:px-4 lg:px-5 2xl:py-3 2xl:px-6 2xl:text-lg">
              Contact us
            </a>
          </Link>
          <span className="mt-3 mb-2 text-lg font-bold"> Or</span>
          <a
            className="inline-flex items-center justify-center gap-2 font-semibold underline"
            href="tel:+1-844-446-3474"
          >
            <BsTelephoneFill className="text-[15px]" /> 1-844-446-3474
          </a>
        </div>
      </div>
    </div>
  );
};

export default WantToSkipForms;
