import Link from "next/link";
import { PageTitle, SectionTitleDescription } from "../../components/Common";
import HomeLayout from "../../layouts/HomeLayout";

const TermsOfService = () => {
  return (
    <HomeLayout>
      <div className="container my-10">
        <PageTitle
          title={"Terms of Service"}
        />
        <div className="space-y-2 mb-8">
          <p>
            These Terms of Service govern your use of the website located at {" "}
            <Link href={"/"}>
              <a>https://algosolver.com</a>
            </Link> and any related services provided by Algosolver.
          </p>
          <p>
            By accessing {" "}
            <Link href={"/"}>
              <a>https://algosolver.com</a>
            </Link>
            , you agree to abide by these Terms of
            Service and to comply with all applicable laws and regulations. If you do not
            agree with these Terms of Service, you are prohibited from using or
            accessing this website or using any other services provided by Algosolver.
          </p>
          <p>
            We, FishMySpot, reserve the right to review and amend any of these Terms
            of Service at our sole discretion. Upon doing so, we will update this page.
            Any changes to these Terms of Service will take effect immediately from the
            date of publication.
          </p>
          <p>These Terms of Service were last updated on 30 March 2022.</p>
        </div>

        <SectionTitleDescription
          title={"Limitations of Use"}
          descriptions={[
            `By using this website, you warrant on behalf of yourself, your users, and other parties you represent that you will not:`,
            `modify, copy, prepare derivative works of, decompile, or reverse engineer any materials and software contained on this website;`,
            `remove any copyright or other proprietary notations from any materials and software on this website;`,
            `transfer the materials to another person or “mirror” the materials on any other server;`,
            `knowingly or negligently use this website or any of its associated services in a way that abuses or disrupts our networks or any other service FishMySpot provides;`,
            `use this website or its associated services to transmit or publish any harassing, indecent, obscene, fraudulent, or unlawful material;`,
            `use this website or its associated services in violation of any applicable laws or regulations;`,
            `use this website in conjunction with sending unauthorized advertising or spam;`,
            `harvest, collect, or gather user data without the user's consent; or use this website or its associated services in such a way that may infringe the privacy, intellectual property rights, or other rights of third parties.`,

          ]}
        />

        <SectionTitleDescription
          title={"Intellectual Property"}
          descriptions={[
            `The intellectual property in the materials contained in this website are owned by or licensed to FishMySpot and are protected by applicable copyright and trademark law. We grant our users permission to download one copy of the materials for personal, non-commercial transitory use.`,
            `This constitutes the grant of a license, not a transfer of title. This license shall automatically terminate if you violate any of these restrictions or the Terms of Service, and may be terminated by FishMySpot at any time.`,

          ]}
        />

        <SectionTitleDescription
          title={"User-Generated Content"}
          descriptions={[
            `You retain your intellectual property ownership rights over content you submit to us for publication on our website. We will never claim ownership of your content, but we do require a license from you in order to use it.`,
            `When you use our website or its associated services to post, upload, share, or otherwise transmit content covered by intellectual property rights, you grant to us a non-exclusive, royalty-free, transferable, sub-licensable, worldwide license to use, distribute, modify, run, copy, publicly display, translate, or otherwise create derivative works of your content in a manner that is consistent with your privacy preferences and our Privacy Policy.`,
            `The license you grant us can be terminated at any time by deleting your content or account. However, to the extent that we (or our partners) have used your content in connection with commercial or sponsored content, the license will continue until the relevant commercial or post has been discontinued by us.`,
            `You give us permission to use your username and other identifying information associated with your account in a manner that is consistent with your privacy preferences, and our Privacy Policy`,

          ]}
        />

        <SectionTitleDescription
          title={"Liability"}
          descriptions={[
            `Our website and the materials on our website are provided on an 'as is' basis. To the extent permitted by law, FishMySpot makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property, or other violation of rights.`,
            `In no event shall FishMySpot or its suppliers be liable for any consequential loss suffered or incurred by you or any third party arising from the use or inability to use this website or the materials on this website, even if FishMySpot or an authorized representative has been notified, orally or in writing, of the possibility of such damage.`,
            `In the context of this agreement, “consequential loss” includes any consequential loss, indirect loss, real or anticipated loss of profit, loss of benefit, loss of revenue, loss of business, loss of goodwill, loss of opportunity, loss of savings, loss of reputation, loss of use and/or loss or corruption of data, whether under statute, contract, equity, tort (including negligence), indemnity, or otherwise.`,
            `Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.`,

          ]}
        />
        <SectionTitleDescription
          title={"Accuracy of Materials"}
          descriptions={[
            `The materials appearing on our website are not comprehensive and are for general information purposes only. FishMySpot does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on this website, or otherwise relating to such materials or on any resources linked to this website.`
          ]}
        />

        <SectionTitleDescription
          title={"Links"}
          descriptions={[
            `FishMySpot has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement, approval, or control by FishMySpot of the site. Use of any such linked site is at your own risk and we strongly advise you make your own investigations with respect to the suitability of those sites.`
          ]}
        />

        <SectionTitleDescription
          title={"Right to Terminate"}
          descriptions={[
            `We may suspend or terminate your right to use our website and terminate these Terms of Service immediately upon written notice to you for any breach of these Terms of Service.`
          ]}
        />

        <SectionTitleDescription
          title={"Severance"}
          descriptions={[
            `Any term of these Terms of Service which is wholly or partially void or unenforceable is severed to the extent that it is void or unenforceable. The validity of the remainder of these Terms of Service is not affected.`
          ]}
        />

        <SectionTitleDescription
          title={"Governing Law"}
          descriptions={[
            `These Terms of Service are governed by and construed in accordance with the laws of Ohio, USA. You irrevocably submit to the exclusive jurisdiction of the courts in that State or location.`
          ]}
        />
      </div>
    </HomeLayout>
  );
};

export default TermsOfService;