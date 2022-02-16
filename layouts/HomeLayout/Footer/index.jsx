import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-primary">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-20 text-white py-10 2xl:py-16 3xl:py-20">
                    <div className="md:-mt-6">
                        <div className="w-[134px] mb-8">
                            <img className="w-full" src="/images/logo.png" alt="" />
                        </div>
                        <div className="font-trade-gothic">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        </div>
                    </div>
                    <div className="">
                        <div className="w-28 lg:mx-auto">
                            <h2 className="text-xl uppercase font-trade-gothic-bold mb-2">About</h2>
                            <Link href="/about">
                                <a className="block font-trade-gothic mb-2">Home</a>
                            </Link>
                            <Link href="/about">
                                <a className="block font-trade-gothic mb-2">About</a>
                            </Link>
                            <Link href="/family">
                                <a className="block font-trade-gothic mb-2">Family</a>
                            </Link>
                            <Link href="/press">
                                <a className="block font-trade-gothic mb-2">Press</a>
                            </Link>
                            <Link href="/contact">
                                <a className="block font-trade-gothic mb-2">Contact</a>
                            </Link>
                            <Link href="/faq">
                                <a className="block font-trade-gothic mb-2">FAQ</a>
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="text-xl uppercase font-trade-gothic-bold mb-2">Terms & Policies</h2>
                        <Link href="/about">
                            <a className="block font-trade-gothic mb-2">Terms of Use</a>
                        </Link>
                        <Link href="/about">
                            <a className="block font-trade-gothic mb-2">Help Center</a>
                        </Link>
                        <Link href="/family">
                            <a className="block font-trade-gothic mb-2">Privacy Policy</a>
                        </Link>
                        <Link href="/press">
                            <a className="block font-trade-gothic mb-2">Acceptable Use Policy</a>
                        </Link>
                        <Link href="/contact">
                            <a className="block font-trade-gothic mb-2">Trust & Safety</a>
                        </Link>
                    </div>
                    <div className="">
                        <h2 className="text-xl uppercase font-trade-gothic-bold mb-2">Follow us</h2>
                        <div className="space-x-4 mt-7 2xl:mt-10">
                            <a
                                className="inline-block"
                                href="http://" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-3xl 3xl:text-4xl" />
                            </a>
                            <a
                                className="inline-block"
                                href="http://" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-3xl 3xl:text-4xl" />
                            </a>
                            <a
                                className="inline-block"
                                href="http://" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className="text-3xl 3xl:text-4xl" />
                            </a>
                            <a
                                className="inline-block"
                                href="http://" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-3xl 3xl:text-4xl" />
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="w-1/2 mx-auto" />
                <div className="text-white py-6 text-center">&copy; 2018 – 2021 by FishMySpot</div>
            </div>
        </footer>
    );
};

export default Footer;