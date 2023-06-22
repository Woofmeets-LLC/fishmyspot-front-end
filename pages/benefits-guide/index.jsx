import Link from 'next/link';
import { PageTitle, SectionTitleDescription } from '../../components/Common';
import HomeLayout from '../../layouts/HomeLayout';

const BenefitsGuide = () => {
  return (
    <HomeLayout>
      <div className="container">
        <PageTitle
          title="Benefits Guide"
          subTitle={`Are you contemplating listing your pond/lake with FishMySpot? This Benefits 
          Guide will provide you with everything you need to make an informed decision.`}
        />

        <SectionTitleDescription
          title="Why Join FishMySpot?"
          descriptions={[
            `Our mission is to connect families with unique fishing experiences, the community and each other. Our goal is to provide private ponds/lakes for parents and grandparents to get their children outside and engaged with nature. Read on to learn more about the benefits of sharing your pond/lake with FishMySpot.`,
          ]}
        />

        <SectionTitleDescription
          title="Get Paid"
          descriptions={[
            `Each time your pond is fished, you get paid! 
              During the listing process we provide suggested rental 
              rates based on the pond acreage. However, you know your 
              pond and community best, so you are in full control of the 
              pricing. If you do not agree with the suggested rate, simply 
              type over the rates during the listing process to reset the 
              rate. Your profit is 70% of the rental fee; 80% for add-on 
              experiences. Or you can bundle all of your add-ons in to 
              the rental fee. (e.g. canoe, outhouse, fishing poles, etc.) 
              We will send a check or electronic payment each month 
              with your earnings.`,
          ]}
        />

        <section className="mb-8">
          <h2 className="mb-3 font-food-truck text-2xl text-secondary">
            <span className="mr-3 inline-block h-4 w-4 rounded-full bg-secondary"></span>
            Complete Control
          </h2>
          <div className="space-y-2">
            <p className="font-trade-gothic">
              You have complete control when it comes to sharing your pond/lake.
              You dictate the days and hours of when your pond is available. If
              you would like to build in rest days or black out dates, we will
              honor your request. If you want to keep your pond open 24/7 for
              night fishing, that is acceptable as long as their is adequate
              lighting. Additionally, you can require anglers to catch and
              release all fish or they can keep a certain size/ type of fish.
              Lastly, you can enhance the experience for our anglers and
              families by providing additional experience such as:
            </p>
            <ul className="list-inside list-disc">
              <li>Canoe, Kayak, pond prowler, metal boa</li>
              <li>Pavilion/ picnic table</li>
              <li>Lawn Chairs</li>
              <li>Grill</li>
              <li>Provide lunch</li>
              <li>Overnight stay/ camping</li>
              <li>Fishing gear! (fishing poles, lure, etc.)</li>
            </ul>
            <p className="font-trade-gothic">{`You do not have to add features to your listing. The above
              list are ideas to enhance angler's experiences so they leave positive reviews/ posts about your amazing property.
              **If a boat is available, life jackets must be provided.`}</p>
          </div>
        </section>

        <SectionTitleDescription
          title="Insurance"
          descriptions={[
            `Safety is a priority for our pond owners and 
            anglers.  We cover your property under a $1M general 
            liability insurance policy through Philadelphia Insurance 
            Company. After you agree to our Service Agreement, it takes 
            2 business days to be added to our policy. Additionally, our 
            anglers agree to a terms and conditions prior to stepping 

            foot on your property. Should an angler not abide by your 
            requirements, we will ban them from our network.`,
          ]}
        />

        <SectionTitleDescription
          title="Tax Benefits"
          descriptions={[
            `When you share your pond up with 
            FishMySpot, your pond is now an income producing asset. 
            Therefore, you earn tax benefits based on the percentage of 
            times your pond is fished. For example, if your pond is fished 
            1/3 of the year, then you should be able to write-off 1/3 of 
            pond maintenance, landscaping, fish stocking, possibly 
            property taxes per year. *Consult with an accountant.`,
          ]}
        />

        <SectionTitleDescription
          title="Booking"
          descriptions={[
            `Your address is not released to anglers until a 
            reservation is confirmed. We cover the entire booking 
            process from start to finish.  Our anglers reserve your spot 

            on our website. You receive an e-mail with the date, time, 
            and angler information before they step foot on your 
            property. Anglers receive an e-mail and/ text message 
            reminding them of their reservation along with the details of 
            your spot.`,
          ]}
        />

        <SectionTitleDescription
          title="Marketing"
          descriptions={[
            `We cover the marketing for your pond that 
            includes yard signs. If you want to earn more money, we 
            have suggestions that can help. You will receive that 
            information in our Getting Started Guide after you list your 
            pond.`,
          ]}
        />

        <SectionTitleDescription
          title="Additional Resources"
          descriptions={[
            `We have an array of resources to 
            assist you. Call or e-mail if you want additional information 
            on local pond maintenance companies, fish hatcheries, or 
            landscape.`,
          ]}
        />

        <section className="mb-8">
          <h2 className="mb-3 font-food-truck text-2xl uppercase text-secondary">
            <span className="mr-3 inline-block h-4 w-4 rounded-full bg-secondary"></span>
            ARE YOU READY TO LIST?
          </h2>
          <div className="space-y-2">
            <p className="font-trade-gothic">
              Visit{' '}
              <Link href={'/become-a-seller'}>
                <a>https://www.fishmyspot.com/become-a-seller</a>
              </Link>{' '}
              and fill in the requested information. Photos of your pond are
              helpful in creating the design and description of your pond for
              our website.
            </p>
            <div className="w-full">
              <img
                src="/images/list-spot.PNG"
                alt="List Spot"
                className="mx-auto"
              />
            </div>
            <p className="font-trade-gothic">
              Once you have completed the listing process and electronically
              acknowledge and agree to our Service Agreement, your pond will be
              added to our website. If there is anything that needs to be
              changed or added, please communicate with us at
              info@fishmyspot.com.
            </p>
          </div>
        </section>

        <div>
          <h2 className="mb-3 font-food-truck text-3xl uppercase text-secondary">
            Support
          </h2>
        </div>

        <SectionTitleDescription
          title="Reporting Problems/Issues"
          descriptions={[
            `We are here to answer any questions you may have or to report any problems or issues that may arise. Contact  us via email at info@fishmyspot.com or by phone at 1-844-4GO-FISH (46-3474).`,
          ]}
        />

        <section className="mb-10">
          <div className="gap-4 md:grid md:grid-cols-3">
            <div className="w-full lg:h-[400px] xl:h-[420px] 2xl:h-[440px]">
              <img
                src="/images/girl.png"
                alt="Girl"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-center font-trade-gothic text-xl text-primary md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[40px]">
              <p>
                {`"The family that came to
                fish yesterday was
                adorable! I loved seeing
                the excitement of the
                little boy when he caught
                a large mouth bass.
                Made my day! I'm loving
                this!"`}
              </p>
              <p className="mt-4">-Pond Owner Patty C.</p>
            </div>
            <div className="w-full lg:h-[400px] xl:h-[420px] 2xl:h-[440px]">
              <img
                src="/images/boy.png"
                alt="Girl"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default BenefitsGuide;
