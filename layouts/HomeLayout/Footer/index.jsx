import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="container">
        <div className="grid grid-cols-2 gap-10 py-10 text-white md:grid-cols-2 md:gap-20 lg:grid-cols-3 xl:grid-cols-4 xl:py-16 3xl:py-20">
          <div className="col-span-2 md:col-span-1 md:-mt-6">
            <div className="flex h-[100px] w-[200px] items-center">
              <img className="w-1/2" src="/images/footer-logo.png" alt="" />
            </div>
            <div className="font-trade-gothic">
              Our mission at FishMySpot is to help families and avid anglers
              discover unique fishing experiences while connecting with nature,
              the community, and each other.
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <div className="w-28 lg:mx-auto">
              <h2 className="mb-2 font-trade-gothic-bold text-xl uppercase">
                About
              </h2>
              <Link href="/resources">
                <a className="mb-2 block font-trade-gothic">Resources</a>
              </Link>
              <Link href="/about">
                <a className="mb-2 block font-trade-gothic">About</a>
              </Link>
              <Link href="/blogs">
                <a className="mb-2 block font-trade-gothic">Blog</a>
              </Link>
              {/* <Link href="/family">
                <a className="mb-2 block font-trade-gothic">Family</a>
              </Link> */}
              <Link href="/benefits-guide">
                <a className="mb-2 block font-trade-gothic">Benefits</a>
              </Link>
              <Link href="/contact-us">
                <a className="mb-2 block font-trade-gothic">Contact</a>
              </Link>
              <Link href="/buy-gift-card">
                <a className="mb-2 block font-trade-gothic">Gift Card</a>
              </Link>
              <Link href="/faq">
                <a className="mb-2 block font-trade-gothic">FAQ</a>
              </Link>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h2 className="mb-2 font-trade-gothic-bold text-xl uppercase">
              Terms & Policies
            </h2>
            <Link href="/terms-of-use">
              <a className="mb-2 block font-trade-gothic">Terms of Use</a>
            </Link>
            <Link href="/help">
              <a className="mb-2 block font-trade-gothic">Help Center</a>
            </Link>
            <Link href="/privacy">
              <a className="mb-2 block font-trade-gothic">Privacy Policy</a>
            </Link>
            <Link href="/acceptable-use-policy">
              <a className="mb-2 block font-trade-gothic">
                Acceptable Use Policy
              </a>
            </Link>
            <Link href="/trust-and-safety">
              <a className="mb-2 block font-trade-gothic">Trust & Safety</a>
            </Link>
            <Link href="/cookie-policy">
              <a className="mb-2 block font-trade-gothic">Cookie Policy</a>
            </Link>
            <Link href="/terms-of-service">
              <a className="mb-2 block font-trade-gothic">Terms of Service</a>
            </Link>
          </div>
          <div className="col-span-full sm:mx-auto md:col-span-1 md:mx-0 lg:col-span-full lg:mx-auto xl:col-span-1 xl:mx-0">
            <h2 className="mb-2 font-trade-gothic-bold text-xl uppercase sm:text-center md:text-left lg:text-center xl:text-left">
              Follow us
            </h2>
            <div className="mt-7 space-x-4 2xl:mt-10">
              <a
                className="inline-block"
                href="https://www.facebook.com/fishmyspotllc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-3xl 3xl:text-4xl" />
              </a>
              <a
                className="inline-block"
                href="https://www.instagram.com/fishmyspot/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-3xl 3xl:text-4xl" />
              </a>
              <a
                className="inline-block"
                href="https://www.linkedin.com/company/fishmyspot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-3xl 3xl:text-4xl" />
              </a>
              <a
                className="inline-block"
                href="https://twitter.com/FishMySpot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-3xl 3xl:text-4xl" />
              </a>
              <a
                className="inline-block"
                href="https://www.youtube.com/channel/UCnzLuJ3etJZB7mxIHFE8tuA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-3xl 3xl:text-4xl" />
              </a>
            </div>
          </div>
        </div>

        <hr className="mx-auto md:w-1/2" />
        <div className="grid lg:grid-cols-12 lg:gap-2 xl:grid-cols-4 xl:gap-20">
          <div className="lg:col-span-3 xl:col-span-1">
            <p className="py-2 text-center text-white lg:py-6 lg:text-left">
              1-844-446-3474
            </p>
          </div>
          <div className="order-3 lg:order-2 lg:col-span-6 xl:col-span-2">
            <div className="py-2 text-center text-white lg:py-6">
              &copy; 2018 – 2021 by FishMySpot
            </div>
          </div>
          <div className="order-2 lg:order-3 lg:col-span-3 xl:col-span-1">
            <p className="text-center text-white lg:py-6 lg:text-right xl:text-left">
              info@fishmyspot.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
