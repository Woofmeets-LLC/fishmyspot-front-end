import Link from 'next/link';

const AboutFishMySpotContent = () => {
  return (
    <div className='text-primary font-trade-gothic'>
      <div className='mb-3'>
        <h3 className='text-2xl mb-6 xl:mb-10'>About FishMySpot</h3>
        <p className='text-lg'>Getting started</p>
      </div>
      <div className='mb-6'>
        <h5 className='text-base'>How do I create an account?</h5>
        <div className='text-sm mt-5 space-y-2'>
          <p>
            If you {"don't"} have an FishMySpot account yet, go to {" "}
            <Link href={"/"}>
              <a>https://fishmyspot.com</a>
            </Link> {" "}
            and click {" "}
            <Link href={"/"}>
              <a className="text-blue-300 cursor-pointer">Sign Up.</a>
            </Link>
          </p>
          {/* <p>
            After you sign up, be sure to complete your account before booking a reservation.
          </p> */}
        </div>
      </div>
      <div className='mb-6'>
        <h5 className='text-base'>Who can host on FishMySpot?</h5>
        <div className='text-sm mt-5'>
          <p>
            Any landowner with a pond or lake can host on our platform. Additionally, we ensure all of our ponds are stocked.
          </p>
        </div>
      </div>

    </div>
  );
};

export default AboutFishMySpotContent;