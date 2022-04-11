import { useSelector } from 'react-redux';
import Link from 'next/link'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const SubFaqSection = () => {
  const { user } = useSelector(state => state.auth);

  return (
    <>
      {
        user?.profile?.publicData?.account_type === 'owner' ? (
          <>
            <div className="pt-6 sm:pt-8 md:pt-10 xl:pt-16 pb-10 sm:pb-14 md:pb-20 lg:pb-24 2xl:pt-20 2xl:pb-52 xl:w-[1024px] 3xl:w-[1180px] mx-auto">
              <div className="text-primary space-y-2 md:space-y-3 lg:space-y-5 mb-5 md:mb-6 lg:mb-10">
                <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-food-truck uppercase">Faq</h1>
              </div>
              <Accordion preExpanded={['a']}>
                <AccordionItem uuid={"a"}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {"What is FishMySpot?"}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      We are an online marketplace that connects pond owners to people
                      that want to fish privately and that are seeking new experiences.
                      FishMySpot covers all of the marketing, booking, and general liability
                      insurance policy for our pond owners.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid={"b"}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {"What are the benefits of sharing my pond?"}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div>
                      <ul className="list-disc list-inside leading-relaxed">
                        <li>Pond Owners help us grow the fishing community by providing local     access   for   youth,   parents,   grandparents,   and   frequent anglers.</li>
                        <li>You get paid every time your pond is fished.</li>
                        <li>You have complete control regarding your pond. You dictate all the days, times, catch/keep, catch/release, amenities, etc..</li>
                        <li>We   cover   the   scheduling,   notifications,   payment   processing, liability   insurance   policy   (up   to   $1   MIL)   and   provide   you   a monthly paycheck for the use of your pond!</li>
                        <li>You   have   the   potential   to   earn   tax   benefits.   (You   earn   tax benefits based on the percentage of times your pond is fished throughout a year.)</li>
                        <li>Reduce   the   fishing   stress   of   public   waters!   Public   lakes   are
                          overfished.</li>
                        <li>YOU provide a lifetime of memories for families who want to fish
                          locally, and that is priceless</li>
                      </ul>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid={"c"}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {"Why share my spot?"}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div>
                      <p>Our mission is to connect families with unique fishing experiences, the
                        community and each other. Our goal is to provide private ponds/lakes
                        for   parents,   grandparents,   the   frequent   fisherman,   and   most
                        importantly, to get kids outside and enjoy nature.</p>
                      <br />
                      <p>Also, public lakes are over-fished, crowded and hard to access. By
                        sharing your spot, you provide local access to your community to fish.
                        It is convenient for parents and less stressful than taking children to a
                        public lake.</p>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid={"d"}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {"How much money do I make a reservation?"}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div>
                      <p>Pond owners earn 70% of each reservation; 80% if additional amenities
                        are added (i.e. boat/canoe/kayak/ pond prowler, pavilion with a grill,
                        access to a restroom, etc.).</p>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid={"e"}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {"How do I sign-up?"}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div>
                      <ul className="list-upper-alpha leading-relaxed">
                        <li>
                          Complete the form on our website {" "}
                          <Link href={"https://fishmyspot.com/list-my-spot/"}>
                            <a className="text-blue-600">FishMySpot</a>
                          </Link>
                          {" "} (The entire form is about 8 different prompts.)
                          <ul className="list-roman leading-relaxed">
                            <li>Agree to License Agreement (electronically by checking box)</li>
                            <li>Agree to Terms  Of Use, Cancellation, and Weather Policies</li>
                            <li>Agree to Angler Terms Of Use (List of rules anglers must abide
                              by prior to a reservation)</li>
                          </ul>
                        </li>
                        <li>
                          Submit Form
                        </li>
                        <li>
                          Business Development Manager or CEO will follow-up with you to
                          provide yard signage, take additional photos if necessary, verify pricing
                          and availability of day/time they selected.
                        </li>
                        <li>
                          Pond owner is added to insurance policy.
                        </li>
                        <li>
                          FishMySpot contacts pond owner to inform them they were added to
                          insurance policy and their pond is live on our website for reservations.
                        </li>
                      </ul>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid={"f"}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {"I am worried about who will come on my property. How will I know when someone reserves?"}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>Our pond owners receive emails with the angler contact information
                      shortly after a reservation is booked. The e-mail includes the date/time
                      of the reservation with the contact information of the angler that
                      booked, including name, phone number, e-mail and number in the
                      party.</p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid={"g"}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {"What about liability? What happens if someone is hurt on my property?"}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>{`FishMySpot has you covered! We insure our pond owners up to a $1MIL
                      dollars of general liability coverage should an accident happen on
                      someone's property. Philadelphia Insurance Company is our provider.`}</p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid={"h"}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {"How do I get paid when someone reserves my pond?"}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>FishMySpot sends checks monthly to pond owners. As we grow, we will
                      implement electronic payments.</p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid={"i"}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {"I do not want fish being taken out of my lake!"}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>As the pond owner, you dictate the date, time, catch-and-release or
                      catch-and-keep. If you do not want fish to be removed, that is to your
                      discretion and we will place that in the License Agreement and on our
                      booking website. However, we encourage you to consider allowing one
                      day a week for catch-and-keep so that you are harvesting your larger
                      fish.  And if you do allow catch-and-keep, we can charge customers a
                      few extra dollars for the reservation since they are permitted to keep
                      the fish.</p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid={"j"}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {"I am worried about someone trashing my pond? Do you come clean it?"}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>Since 2020, we had over 1500+ men, women and children fish on our
                      marketplace and had zero complaints from pond owners and anglers.
                      Our customers are respectful and since they are paying customers,
                      they are more apt to taking care of the property than someone fishing
                      for free. FishMySpot will not come to clean a trashed pond. We will
                      charge a $50 cleanup fee to any angler that trashes a pond and will
                      exempt them and the guests from our network so they cannot fish with
                      our company again. The $50 clean-up will be issued to our pond owner
                      for their time and/resources with the clean-up. </p>
                  </AccordionItemPanel>
                </AccordionItem>

              </Accordion>
            </div>
          </>
        ) : (
          <>
            <div className="pt-6 sm:pt-8 md:pt-10 xl:pt-16 pb-10 sm:pb-14 md:pb-20 lg:pb-24 2xl:pt-20 2xl:pb-52 xl:w-[1024px] 3xl:w-[1180px] mx-auto">
              <div className="text-primary space-y-2 md:space-y-3 lg:space-y-5 mb-5 md:mb-6 lg:mb-10">
                <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-food-truck uppercase">Faq</h1>
              </div>
              <Accordion preExpanded={['a']}>
                <AccordionItem uuid={"a"}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {"What is the purpose of FishMySpot?"}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Our mission is to connect families with unique fishing experiences, the
                      community, and each other. One of our many passions is getting our
                      youth outside, engaged with the outdoors and learn to appreciate
                      nature. Additionally, we are geared to the enthusiastic angler that
                      enjoys fishing at various water holes.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid={"b"}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {`Why use FishMySpot's online marketplace?`}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div>
                      <p>
                        Our offerings of private ponds and lakes are under fished, secluded,
                        private, and make for a great experience for the family or avid
                        fisherman/woman. Specifically, parents can teach their children to fish
                        without the hassle of crowds and drive to public lakes. Children are
                        more likely to catch fish frequently at an under-fished pond than going
                        to a public lake. And if kids catch fish, they will want to continue to
                        fish!
                      </p>
                      <br />
                      <p>Our marketplace is also great for the passionate angler. Frequent
                        fishermen and fisherwomen enjoy the thrill of fishing at new water
                        holes.</p>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid={"c"}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {`Why would I pay to fish at a private spot?`}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Private ponds are quiet, peaceful and under-fished. Friends and family
                      reserve the entire pond/lake for a designated time and have the entire
                      space to yourself. Plus, when you stay close to home, cost of travel
                      decrease and your funds stay in your local community.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid={"d"}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {`How much will it cost to go fishing?`}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      {`Pricing of our ponds are based upon a number of factors, such as, the
                        size of the pond/lake, the variety of fish, catch/keep, catch/release,
                        availability of the pond, and finally the pond owner's requirements.`}
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid={"e"}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {`How does FishMySpot work?`}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <ul className="list-alpha leading-relaxed">
                      <li> Search fishmyspot.com for a spot near you</li>
                      <li> Check for availability with the day/time that is convenient for
                        you.</li>
                      <p className="font-trade-gothic-bold">*Please note, not all of our ponds are open every day of the
                        week or during all   times. </p>
                      <li> Select the pond and day/time.</li>
                      <li> Login to your FishMySpot account. (If you need to create one, it
                        is super easy! Follow the prompts for new account.)</li>
                      <li> Enter the number of anglers, any add-on amenities.</li>
                      <li> Agree with our Terms Of Use, Weather and Cancellation policies.</li>
                      <li> Click reserve.</li>
                      <li> Enter payment information.</li>
                      <li> A booking confirmation e-mail will be sent to you and the pond
                        owner with the address and details of where to park.</li>
                    </ul>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid={"f"}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {`Why can't I see the address of a pond prior to booking?`}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>To respect the privacy of our pond owners, we do not release the
                      address until a reservation has been scheduled.</p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid={"g"}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {`What does the reservation fee cover?`}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>When you book with FishMySpot, the reservation fee covers up to 4
                      adults to fish, over the age of 16. Children are included with the
                      reservation fee and must be accompanied by an adult. Adding an
                      additional angler is easy. Click add angler on the right hand side during
                      the checkout process.</p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid={"h"}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {`Can I keep all the fish I catch?`}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>A majority of our ponds are catch and release. We do have a few ponds
                      that are catch/keep with restrictions. Please be sure to review the site
                      prior to reserving a spot.</p>
                  </AccordionItemPanel>
                </AccordionItem>

              </Accordion>
            </div>
          </>
        )
      }
    </>
  );
};

export default SubFaqSection;