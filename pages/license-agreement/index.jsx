import LicenseListAlpa from '../../components/SubPages/LicenseAgreementPage/LicenseListAlpa';
import HomeLayout from '../../layouts/HomeLayout';
import Link from 'next/link';

const LicenseAgreement = () => {
  return (
    <HomeLayout>
      <div className="container py-10">
        <div className="text-center pb-8">
          <h1 className="text-3xl text-secondary font-food-truck">LICENSE AGREEMENT (OHIO)</h1>
        </div>
        <div className="font-trade-gothic text-primary mt-4">
          <p>
            <span className="font-trade-gothic-bold">THIS LICENSE AGREEMENT</span> (the “Agreement”) is made effective as of the _____of
            ______ 2022 {`(the "Effective Date")`}, by and between FishMySpot, LLC, an Ohio limited liability company {`("FMS")`}, and the undersigned, and their/his/hers/its successors and assigns {`(the "Pond Owner")`}.</p>
          <p className="my-4">The parties agree as follows:</p>
          <ol className="list-decimal list-inside ml-4 space-y-5">
            <li>
              {`“The  Property”`}:  [insert  a  complete  description  of  the  land,  including  address, number of acres, etc.]
              <p className="border-b my-5 border-b-black"></p>
              <p className="border-b my-5 border-b-black"></p>
              <p className="border-b my-5 border-b-black"></p>
              <p className="border-b my-5 border-b-black"></p>
            </li>
            <li>
              <span className="underline">License to Use the Property.</span>
              <p>
                Pond Owner licenses to FMS and its guests, customers, business vendors and invitees (the “Guests”) the exclusive right to enter onto and fish the Property during the Term (described  below).  However,  the  Pond  Owner  has  the  unlimited  right  to  continue  to fish  the  Property  for  their  own  use  and  enjoyment  of  their  family.    FMS  intends  to charge its Guests to fish the Property.
              </p>
            </li>
            <li>
              The  term  of  this  Agreement  is  for  a  period  of  one  (1)  year,  commencing  on  the
              Effective  Date  and  will  automatically renew  annually,  on  the  anniversary  of the  Effective  Date {`(the "Term")`}, unless either party notifies the other in writing at least 30 days prior to the end of the
              Term, of that parties intent to terminate this Agreement.
            </li>
            <li>
              <span className="underline">Fee Structure:</span> FMS will pay the following:
              <ol className="list-decimal list-inside ml-4">
                <li>70% of these fees received by FMS, in connection with its use and rental of
                  the Property to Pond Owner for fishing</li>
                <li>80% of these fees received by FMS, in connection with its use and rental of
                  the Property to Pond Owner for additional services offered (i.e. boat, tackle,
                  meals, lodging et al)</li>
              </ol>
              <p>Payment to the Pond Owner will be made in accordance with Section 14 below, within 15 days
                after the end of each month for any booking occurring in the previous month.</p>
            </li>
            <li>
              <span className="underline">{`Pond Owner's Obligations.`}</span> Pond Owner represents that:
              <LicenseListAlpa
                listItems={[
                  `Pond Owner owns and holds title to the Property;`,
                  `Pond Owner has the power to enter into this Agreement;`,
                  `Pond  Owner  shall  indicate  the  boundaries  of  the  Property  with  durable  signs(if requested);`,
                  `The execution of this Agreement will not cause a violation, be in conflict with or constitute a default of any other agreement, lease, or contract to which Pond Owner is a party.`,
                  `Pond  Owner  has  complete  discretion  on  fees  charged,  days  and  hours  available, number  of  guests  per  visit,  catch  and  release  or  catch  and  keep,  designated  fishing  and designated parking areas.`
                ]}
              />
            </li>
            <li>
              <span className="underline">{`FMS’s Obligations.`}</span>  FMS represents that:
              <LicenseListAlpa
                listItems={[
                  `FMS  will  provide  Pond  Owner  with  the  dates  and  times  that  any  Guests  have reserved to enter and fish on the Property. FMS will provide the name of the Guests that have booked prior to the reservation date.`,
                  `FMS will not engage or permit any other person to engage in commercial fishing or  other  recreational  pursuits  on  the  Property,  except  the  Guests  and  except  as  specifically permitted by Pond Owner as indicated in this agreement;`,
                  `FMS  will  use  good  care  when  using  the  Property  and  will  assist  and  correct  any damage made to the Property during the Term as a result of FMS' use;`,
                  `FMS  and  the  Guests  will  follow  local,  state,  and  federal  laws  and  regulations governing fishing and will otherwise comply with any and all laws, ordinances, and regulations pertaining to environmental matters and shall not permit any hazardous materials (as defined by applicable law) to be placed or kept on the Property;`,
                  `If fishing is only permitted on the Property during certain times of the year, which are  not  congruent  with  the  term  of  this  Agreement,  the  term  of  this  Agreement  shall  be modified to conform with applicable regulations.`
                ]}
              />
            </li>
            <li>FMS  accepts  the  Property  {`“as-is.”`}  FMS  acknowledges  that  there  may  be  hazards
              involved in fishing on the Property that may cause injury or death, and FMS assumes any and all
              such risks as {`FMS's`} responsibility.</li>
            <li>
              If  Pond  Owner  claims  and  provides  evidence  that  FMS  or  any  of  the  Guests  has
              damaged any personal or other property during a scheduled reservation {`(a "Damage Claim")`}, the
              Pond Owner must file a claim through the Customer Relations Department of FMS in accordance
              with  Section  14.  FMS  shall  hold  Pond  Owner  harmless  from  and  against  any  and  all  claims,
              demands,  payments,  suits,  actions,    and  judgments  of  whatever  nature,  kind,  and  description brought  against  Pond  Owner  {`(including  reasonable  attorneys'  fees  incurred)`}  in  which  injury
              (including death resulting thereof) or damage received or sustained by any person(s) by reason of
              any act, omission or negligence of FMS or its Guests, resulting from, incidental to, or arising out
              of  the  operation  of  this  Agreement,  unless  Pond  Owner  has  been  negligent  or  otherwise  been
              involved in causing such damage or injury.
            </li>
            <li>
              Pond Owner agrees to cooperate with and assist FMS in good faith, and to provide
              such information and/or take such actions as may be reasonably requested by FMS, in connection
              with  any  Damage  Claim  or  other  complaints  or  claims  made  by  Pond  Owner  relating  to  a
              reservation or any personal or other property located at the reserved spot. Upon {`FMS's`} reasonable
              request and at no cost to the Pond Owner, both parties will participate in mediation or a similar
              resolution process, which process will be conducted by FMS or a third party selected by FMS or
              its insurer, with respect to losses for which a Pond Owner is requesting payment from FMS
            </li>
            <li>
              In the event a lawsuit arises out of or in connection with this Agreement and the
              rights of the parties thereof, the prevailing party may recover actual damages, costs, and reasonable
              {`attorneys'`} fees expended in the course of such action.
            </li>
            <li>
              Notwithstanding  anything  contained  in  this  Agreement,  the  parties  acknowledge
              and agree that this Agreement can be terminated by FMS at any time without cause, immediately
              upon thirty (30) {`days'`} written notice to Pond Owner.  FMS shall pay Pond Owner all earned but
              unpaid fees due to Pond Owner hereunder at that time.
            </li>
            <li>
              This Agreement constitutes the sole and entire agreement between the parties and
              may not be altered, modified, or extended, nor any of its provisions waived, except by a document
              in writing signed by both parties.
            </li>
            <li>
              Should any term or condition of this Agreement be held to be indefinite, invalid,
              illegal, or otherwise unenforceable in whole or in part, for any reason, by any court of competent
              jurisdiction,  the  remainder  of  the  terms  and  conditions  of  this  Agreement  shall  continue  in  full
              force  and  effect,  and  shall  be  construed  as  if  such  indefinite,  invalid,  illegal,  or  unenforceable
              provision had not been contained herein.
            </li>
            <li>
              All notices required or permitted to be given pursuant to this Agreement shall be in
              writing  and  may  be  personally  delivered,  sent  by  email  or  by  a  nationally  recognized  courier
              directly to such party at the following addresses: respectively:

              <p className="my-4">If to Pond Owner: </p>
              <p>
                If to FishMySpot, LLC: <br />

                P.O. Box 229 <br />
                Canton, OH 44707 <br />
                Email:  <span className="underline">info@fishmyspot.com</span>
              </p>
              <p className="mt-4">
                or  at  such  other  address  as  either  party  may  stipulate  by  notice  to  the  other.  Any  notice
                personally delivered or sent by electronic email shall be deemed to be received on the date of actual
                delivery thereof.
              </p>
            </li>
            <li>
              Governing Law, Mediation and Arbitration.
              <LicenseListAlpa
                listItems={[
                  `This Agreement shall be governed by and construed in accordance with the laws of the State of Ohio.`,
                  `Unless  delay  in  initiating  or  prosecuting  a  claim  in  litigation  would  prejudice  a party, any dispute that is not resolved by direct discussions and negotiations as provided in this Section  will  be  submitted  to  mediation  under  the  Mediation  Procedures  of  the  American Arbitration Association or such other rules as the parties may agree to use.  If the parties cannot agree on the selection of a mediator within ten days of the request for mediation, any party may immediately request the appointment of a mediator in accordance with the governing mediation rules.    Mediation  will  occur  at  any  location  in  Stark  County,  Ohio  that  the  mediator  may designate.  The parties will each be responsible for 50% of the mediation expenses.  The parties will conclude mediation proceedings under this Section within 30 days after the designation of the  mediator.   In  the  event  that  mediation  proceedings  do  not  resolve  the  dispute  within  such period, the parties will commence arbitration proceeds as described below.`
                ]}
              />
              <p className="mt-4">If  the  parties  are  unable  to  reach  an  agreement  regarding  a  dispute  arising  from  the
                Agreement on accordance with Section 15(b) above, the dispute shall be decided before the courts
                located in Stark County, Ohio.</p>
            </li>
            <li>
              No waiver of any condition expressed in this letter shall be implied by any neglect
              or failure to declare a forfeiture on account of its violation, even though the violation continues or
              is subsequently repeated.  Furthermore, no express waiver shall affect any condition other than the
              one(s) expressly specified in such waiver.
            </li>
            <li>
              This Agreement may be executed in multiple separate counterparts, each of which
              shall  be  deemed  to  be  an  original,  and  all  such  separate  counterparts  shall  constitute  but  one
              instrument. Signatures of the parties transmitted by facsimile, portable document format {`(“.pdf”)`}
              or other electronic means complying with the U.S. federal ESIGN Act of 2000 (e.g.,
              www.docusign.com)  shall  be  deemed  to  be  their  original  signatures  for  all  legal  and  other
              purposes.
            </li>
          </ol>

          <div className="mt-5">
            <p className="text-center mb-4">[Signatures to follow]</p>
            <p>IN WITNESS WHEREOF the parties hereto have executed this Agreement as of the Effective
              Date.</p>
          </div>

          <div className="md:grid md:grid-cols-2 gap-8 mt-5">
            <div>
              <p className="mb-4">POND OWNER:</p>
              <div className="flex">
                <p>By:</p>
                <p className="flex-grow border-b mb-4 border-b-black mt-4"></p>
              </div>
              <div className="flex">
                <p>Print:</p>
                <p className="flex-grow border-b mb-4 border-b-black mt-4"></p>
              </div>
              <div className="flex">
                <p>Date:</p>
                <p className="flex-grow border-b mb-4 border-b-black mt-4"></p>
              </div>
            </div>
            <div className="mt-5 md:mt-0">
              <p className="mb-4">FISHMYSPOT. LLC, an Ohio limited liability
                company</p>
              <div className="flex">
                <p>By:</p>
                <p className="flex-grow border-b mb-4 border-b-black mt-4"></p>
              </div>
              <div className="flex">
                <p>Print:</p>
                <p className="flex-grow border-b mb-4 border-b-black mt-4"></p>
              </div>
              <div className="flex">
                <p>Its:</p>
                <p className="flex-grow border-b mb-4 border-b-black mt-4"></p>
              </div>
              <div className="flex">
                <p>Date:</p>
                <p className="flex-grow border-b mb-4 border-b-black mt-4"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5 text-center">
          <button className="bg-secondary px-4 py-3 text-primary font-trade-gothic-bold rounded-md">
            <Link href={'/documents/License_Agreement.pdf'}>
              <a>Download License Agreement</a>
            </Link>
          </button>
        </div>
      </div>
    </HomeLayout>
  );
};

export default LicenseAgreement;