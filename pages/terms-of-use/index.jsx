import React from 'react';
import { PageTitle, SectionTitleDescription } from '../../components/Common';
import HomeLayout from '../../layouts/HomeLayout';

const TermsOfUse = () => {
    return (
        <HomeLayout>
            <div className="container my-10">
                <PageTitle
                    title="Terms and Conditions with FishMySpot"
                    subTitle={`“Pond Owner” refers to the owner of the pond or lake. “Angler” refers to all individuals that fish, 
                including, guests that are Angler and guest(s) shall abide by the following rules and regulations. Failure 
                to  abide  by  the  listed  rules  and  regulations  will  result  in  removal  from  using  FishMySpot’s  online 
                marketplace`} />

                <ol className="list-decimal pl-7 font-trade-gothic space-y-2 mb-8">
                    <li>FishMySpot  cannot guarantee that you will catch fish! But the chances are higher than fishing at an over fished public lake/pond.</li>
                    <li>All anglers must be 18 years or older to use FishMySpot’s online marketplace. Children are permitted to attend but must be accompanied by an adult, over the age of 18.</li>
                    <li>Angler shall not  enter any plants, work areas, or other designated buildings owned by  Pond Owner.</li>
                    <li>Angler shall stay on existing roadways and shall not block such roadways. Angler shall only traverse roads designated for lake access.</li>
                    <li>Vehicles shall be parked in  designated areas only, unless directed to a different location  by the landowner.</li>
                    <li>Boats used by Angler are restricted to electric trolling motors or gasoline engines at idle speed only. There shall be no riding dikes or levees. No boats shall be in restricted areas.</li>
                    <li>Life jackets must be worn while utilizing any type of water craft. If Pond Owner supplies boat, life jacket must be provided; if Angler provides boat, life jackets must be brought by angler.</li>
                    <li>Anglers cannot wade or swim in pond/lake.</li>
                    <li>There shall be no night fishing unless prior approval is given from the pond owner.</li>
                    <li>Angler shall use caution and watch for electrical power, vehicles, equipment, deep water, and drop-offs.</li>
                    <li>All  fish  are  to  be  released  immediately.  Unless  catch  and  keep  requirements  pertain  to  a specific pond, then follow the requirements outlined in the reservation confirmation.</li>
                    <li>All belongings brought in by angler must be taken out (i.e. bait, trash, fishing rods, etc.).</li>
                    <li>Angler and guest(s) must use caution and obey all posted signs.</li>
                    <li>Angler is not permitted to bring any alcoholic beverages on the premise.</li>
                    <li>Angler may bring the number of guests designated during time of checkout with them, as often as they like, per reservation onto the Property.</li>
                    <li>Angler’s guest(s) shall be subject to the same rules and regulations as set forth herein, and violations by guest(s) shall be considered a violation by Angler and will result in termination to use FishMySpot’s online marketplace.</li>
                </ol>

                <SectionTitleDescription
                    title="Assumption of Risks"
                    descriptions={[
                        "Nevertheless, you voluntarily and freely elect to participate in the above activity with full knowledge and awareness, under applicable law, of the dangers and risks involved with fishing. You hereby agree  to  accept  and  assume  any  and  all  risks  of  sickness,  property  damage,  personal  injury, disability, or death while fishing from FishMySpot’s online marketplace."]} />

                <SectionTitleDescription
                    title="Release and Waiver"
                    descriptions={[
                        "You acknowledge and agree that:",
                        <ol key={"release-and-waiver-list"} className="list-decimal pl-7 font-trade-gothic space-y-2 mb-8">
                            <li>You  have  reasonably  assessed  the  risks  involved  in  the  Experience(s)  and  have  made  an informed and voluntary choice to participate.</li>
                            <li>You alone, and not the Pond Owner(s), are responsible for determining your fitness for participating in fishing and your ability to fully understand any directions or warnings presented.</li>
                            <li>You  will  not  participate  in  fishing  when  you  have  a  physical,  medical,  or  mental  limitation  or disability, or when you are aware or should reasonably be aware of any factors that may limit or prevent you from safely participating in fishing.</li>
                            <li>
                                You  will  act  reasonably  and  responsibly  and  will  comply  with  any  provided  and  customary conditions, directions, and/or precautions for participation in fishing. If you notice any hazard during a trip, you will stop participating in the activity immediately.
                                <br />
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, YOU RELEASE AND PROMISE NOT TO SUE  THE  LANDOWNER  FOR  ANY  CLAIMS,  DEMANDS,  CAUSES  OF  ACTION,  LOSSES (WHETHER ECONOMIC OR NON-ECONOMIC), DAMAGES, EXPENSES, COSTS OR LIABILITY  OF  ANY  NATURE  WHATSOEVER  ARISING  FROM  OR  IN  CONNECTION  WITH YOUR  EXPERIENCE(S)  AND/OR  TRIP,  WHETHER  BASED  ON  WARRANTY,  CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY, OR ANY OTHER LEGAL THEORY.
                            </li>
                        </ol>
                    ]} />

                <SectionTitleDescription
                    title="Cancellation Policy"
                    descriptions={[
                        <ol key={"policy-list"} className="list-decimal pl-7 font-trade-gothic space-y-2 mb-8">
                            <li>Reservations are permitted to be canceled up to 24 hours prior to the scheduled reservation for a full refund. Refunds will be provided through a credit to book in the future.</li>
                            <li>Should an event transpire after 24 hours of your scheduled reservation and you are unable to make it to your reservation, please contact a customer service representative at <a className="font-trade-gothic-bold text-secondary" href="tel:+1-844-446-3474">1-844-446-3474</a> or <a className="font-trade-gothic-bold text-secondary" href="mailto:info@fishmyspot.com">info@fishmyspot.com</a> to cancel the reservation. Should the circumstance be out of our customers control, we will credit the angler.</li>
                        </ol>
                    ]} />

                <SectionTitleDescription
                    title="Weather"
                    descriptions={[
                        <ol key={"weather-list"} className="list-decimal pl-7 font-trade-gothic space-y-2 mb-8">
                            <li>
                                At times the weather can change quickly. We are happy to provide a credit to our customers should the weather turn severe  (i.e. rainy, stormy, windy, or extreme that includes warnings or watches of an area) to fish. Please contact a customer service representative at <a className="font-trade-gothic-bold text-secondary" href="tel:+1-844-446-3474">1-844-446-3474</a> or <a className="font-trade-gothic-bold text-secondary" href="mailto:info@fishmyspot.com">info@fishmyspot.com</a>. A credit will be provided for future use.
                                <ol className="list-[lower-alpha] pl-7 font-trade-gothic space-y-2 mt-4">
                                    <li>If the weather turns poor at the start of a reservation, a credit to book a new reservation will be provided.</li>
                                    <li>If the weather turns poor toward the end of a reservation, there will not be a credit provided to the angler.</li>
                                </ol>
                            </li>

                        </ol>
                    ]} />
            </div>
        </HomeLayout>
    );
};

export default TermsOfUse;