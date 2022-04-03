import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {

    return (
        <footer className="bg-primary">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-20 text-white py-10 xl:py-16 3xl:py-20">
                    <div className="md:-mt-6 col-span-2 md:col-span-1">
                        <div className="w-[200px] h-[100px] flex items-center">
                            <img className="w-1/2" src="/images/footer-logo.png" alt="" />
                        </div>
                        <div className="font-trade-gothic">
                            Our mission at FishMySpot is to help families and avid anglers discover unique fishing experiences while connecting with nature, the community, and each other.
                        </div>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <div className="w-28 lg:mx-auto">
                            <h2 className="text-xl uppercase font-trade-gothic-bold mb-2">About</h2>
                            <Link href="/">
                                <a className="block font-trade-gothic mb-2">Home</a>
                            </Link>
                            <Link href="/about">
                                <a className="block font-trade-gothic mb-2">About</a>
                            </Link>
                            <Link href="/blogs">
                                <a className="block font-trade-gothic mb-2">Blog</a>
                            </Link>
                            {/* <Link href="/family">
                                <a className="block font-trade-gothic mb-2">Family</a>
                            </Link> */}
                            <Link href="/benefits-guide">
                                <a className="block font-trade-gothic mb-2">Benefits</a>
                            </Link>
                            <Link href="/contact-us">
                                <a className="block font-trade-gothic mb-2">Contact</a>
                            </Link>
                            <Link href="/faq">
                                <a className="block font-trade-gothic mb-2">FAQ</a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <h2 className="text-xl uppercase font-trade-gothic-bold mb-2">Terms & Policies</h2>
                        <Link href="/terms-of-use">
                            <a className="block font-trade-gothic mb-2">Terms of Use</a>
                        </Link>
                        <Link href="/help">
                            <a className="block font-trade-gothic mb-2">Help Center</a>
                        </Link>
                        <Link href="/privacy">
                            <a className="block font-trade-gothic mb-2">Privacy Policy</a>
                        </Link>
                        <Link href="/acceptable-use-policy">
                            <a className="block font-trade-gothic mb-2">Acceptable Use Policy</a>
                        </Link>
                        <Link href="/trust-and-safety">
                            <a className="block font-trade-gothic mb-2">Trust & Safety</a>
                        </Link>
                        <Link href="/cookie-policy">
                            <a className="block font-trade-gothic mb-2">Cookie Policy</a>
                        </Link>
                        <Link href="/terms-of-service">
                            <a className="block font-trade-gothic mb-2">Terms of Service</a>
                        </Link>
                    </div>
                    <div className="col-span-full sm:mx-auto md:col-span-1 md:mx-0 lg:col-span-full lg:mx-auto xl:col-span-1">
                        <h2 className="text-xl uppercase font-trade-gothic-bold mb-2 sm:text-center md:text-left lg:text-center xl:text-left">Follow us</h2>
                        <div className="space-x-4 mt-7 2xl:mt-10">
                            <a
                                className="inline-block"
                                href="https://www.facebook.com/fishmyspotllc" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-3xl 3xl:text-4xl" />
                            </a>
                            <a
                                className="inline-block"
                                href="https://www.instagram.com/fishmyspot/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-3xl 3xl:text-4xl" />
                            </a>
                            <a
                                className="inline-block"
                                href="https://www.linkedin.com/company/fishmyspot" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className="text-3xl 3xl:text-4xl" />
                            </a>
                            <a
                                className="inline-block"
                                href="https://twitter.com/FishMySpot" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-3xl 3xl:text-4xl" />
                            </a>
                            <a
                                className="inline-block"
                                href="https://www.youtube.com/channel/UCnzLuJ3etJZB7mxIHFE8tuA" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="text-3xl 3xl:text-4xl" />
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="md:w-1/2 mx-auto" />
                <div className="text-white py-6 text-center">&copy; 2018 – 2021 by FishMySpot</div>
            </div>
        </footer>
    );
};

export default Footer;