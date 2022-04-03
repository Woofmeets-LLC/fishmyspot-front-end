/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';
import { PageTitle, SectionTitleDescription } from '../../components/Common';
import HomeLayout from '../../layouts/HomeLayout';

const Privacy = () => {
    return (
        <HomeLayout>
            <div className="container">
                <PageTitle title="Privacy Policy" />
                <SectionTitleDescription
                    title=""
                    descriptions={[
                        <>
                            Your privacy is important to us. It is FishMySpot's policy to respect your
                            privacy and comply with any applicable law and regulation regarding any
                            personal information we may collect about you, including across our website,
                            <Link href={'/'}><a>https://fishmyspot.com</a></Link>, and other sites we own and operate.
                        </>,
                        <>
                            Personal information is any information about you which can be used to
                            identify you. This includes information about you as a person (such as name,
                            address, and date of birth), your devices, payment details, and even
                            information about how you use a website or online service.
                        </>,
                        <>
                            In the event our site contains links to third-party sites and services, please
                            be aware that those sites and services have their own privacy policies. After
                            following a link to any third-party content, you should read their posted
                            privacy policy information about how they collect and use personal
                            information. This Privacy Policy does not apply to any of your activities after
                            you leave our site.
                        </>,
                        <>This policy is effective as of 30 March 2022.</>,
                        <>Last updated: 30 March 2022</>
                    ]}
                />
                <SectionTitleDescription
                    title="Information We Collect"
                    descriptions={[
                        <>
                            Information we collect falls into one of two categories: “voluntarily provided”
                            information and “automatically collected” information.
                        </>,
                        <>
                            “Voluntarily provided” information refers to any information you knowingly
                            and actively provide us when using or participating in any of our services and
                            promotions.
                        </>,
                        <>
                            “Automatically collected” information refers to any information automatically
                            sent by your devices in the course of accessing our products and services.
                        </>,
                    ]} />
                <SectionTitleDescription
                    title="Log Data"
                    descriptions={[
                        <>
                            When you visit our website, our servers may automatically log the standard
                            data provided by your web browser. It may include your device’s Internet
                            Protocol (IP) address, your browser type and version, the pages you visit, the
                            time and date of your visit, the time spent on each page, and other details
                            about your visit.
                        </>,
                        <>
                            Additionally, if you encounter certain errors while using the site, we may
                            automatically collect data about the error and the circumstances surrounding
                            its occurrence. This data may include technical details about your device,
                            what you were trying to do when the error happened, and other technical
                            information relating to the problem. You may or may not receive notice of
                            such errors, even in the moment they occur, that they have occurred, or
                            what the nature of the error is.
                        </>,
                        <>
                            Please be aware that while this information may not be personally identifying
                            by itself, it may be possible to combine it with other data to personally
                            identify individual persons.
                        </>
                    ]} />
                <SectionTitleDescription
                    title="Device Data"
                    descriptions={[
                        <>When you visit our website or interact with our services, we may
                            automatically collect data about your device, such as:</>
                    ]} />
                <SectionTitleDescription
                    title="Device Type: Geo-location data"
                    descriptions={[
                        <>Data we collect can depend on the individual settings of your device and
                            software. We recommend checking the policies of your device manufacturer
                            or software provider to learn what information they make available to us.</>
                    ]} />
                <SectionTitleDescription
                    title="Personal Information"
                    descriptions={[
                        <>We may ask for personal information — for example, when you subscribe to
                            our newsletter or when you contact us — which may include one or more of
                            the following:</>,
                        <ul key={"personal-info"} className="pl-5 list-disc">
                            <li>Name</li>
                            <li>Email</li>
                            <li>Social media profiles</li>
                            <li>Date of birth</li>
                            <li>Phone/mobile number</li>
                            <li>Home/mailing address</li>
                        </ul>
                    ]} />
                <SectionTitleDescription
                    title="User-Generated Content"
                    descriptions={[
                        <>We consider “user-generated content” to be reviews, ratings, image, and/or
                            video materials voluntarily supplied to us by our users for the purpose of
                            publication on our website or re-publishing on our social media channels. All
                            user-generated content is associated with the account or email address used
                            to submit the materials.</>,
                        <>Please be aware that any content you submit for the purpose of publication
                            will be public after posting (and subsequent review or vetting process). Once
                            published, it may be accessible to third parties not covered under this
                            privacy policy.</>
                    ]} />
                <SectionTitleDescription
                    title="Legitimate Reasons for Processing Your Personal Information"
                    descriptions={[
                        <>We only collect and use your personal information when we have a
                            legitimate reason for doing so. In which instance, we only collect personal
                            information that is reasonably necessary to provide our services to you.</>
                    ]} />
                <SectionTitleDescription
                    title="Collection and Use of Information"
                    descriptions={[
                        <>We may collect personal information from you when you do any of the
                            following on our website:</>,
                        <ul key={"use-of-info"} className="pl-5 list-disc">
                            <li>Register for an account</li>
                            <li>Purchase any products and/or services</li>
                            <li>Purchase a subscription</li>
                            <li>Enter any of our competitions, contests, sweepstakes, and surveys</li>
                            <li>Sign up to receive updates from us via email or social media channels</li>
                            <li>Use a mobile device or web browser to access our content</li>
                            <li>Contact us via email, social media, or on any similar technologies</li>
                            <li>When you mention us on social media</li>
                        </ul>,
                        <>We may collect, hold, use, and disclose information for the following
                            purposes, and personal information will not be further processed in a manner
                            that is incompatible with these purposes:</>,
                        <ul key={"use-of"} className="pl-5 list-disc">
                            <li>to provide you with our platform's core features and services</li>
                            <li>to enable you to customize or personalize your experience of our website</li>
                            <li>to process any transactional or ongoing payments</li>
                            <li>to deliver products and/or services to you</li>
                            <li>to contact and communicate with you</li>
                            <li>for analytics, market research, and business development, including to
                                operate and improve our website, associated applications, and associated
                                social media platforms</li>
                            <li>for advertising and marketing, including to send you promotional information
                                about our products and services and information about third parties that we
                                consider may be of interest to you</li>
                            <li>to enable you to access and use our website, associated applications, and
                                associated social media platforms</li>
                            <li>for internal record keeping and administrative purposes</li>
                            <li>to run competitions, sweepstakes, and/or offer additional benefits to you
                                to comply with our legal obligations and resolve any disputes that we may
                                have</li>
                            <li>to attribute any content (e.g. posts and comments) you submit that we
                                publish on our website</li>
                            <li>for security and fraud prevention, and to ensure that our sites and apps are
                                safe, secure, and used in line with our terms of use</li>
                            <li>for technical assessment, including to operate and improve our app,
                                associated applications, and associated social media platforms</li>
                        </ul>,
                        <>We may combine voluntarily provided and automatically collected personal
                            information with general information or research data we receive from other
                            trusted sources. For example, If you provide us with your location, we may
                            combine this with general information about currency and language to
                            provide you with an enhanced experience of our site and service.</>
                    ]} />
                <SectionTitleDescription
                    title="Security of Your Personal Information"
                    descriptions={[
                        <>
                            When we collect and process personal information, and while we retain this
                            information, we will protect it within commercially acceptable means to
                            prevent loss and theft, as well as unauthorized access, disclosure, copying,
                            use, or modification.
                        </>,
                        <>
                            Although we will do our best to protect the personal information you provide
                            to us, we advise that no method of electronic transmission or storage is
                            100% secure, and no one can guarantee absolute data security.
                        </>,
                        <>
                            You are responsible for selecting any password and its overall security
                            strength, ensuring the security of your own information within the bounds of
                            our services.
                        </>,
                        <>
                            For example, ensuring any passwords associated with accessing your
                            personal information and accounts are secure and confidential.
                        </>
                    ]} />
                <SectionTitleDescription
                    title="How Long We Keep Your Personal Information"
                    descriptions={[
                        <>
                            We keep your personal information only for as long as we need to. This time
                            period may depend on what we are using your information for, in accordance
                            with this privacy policy. For example, if you have provided us with personal
                            information as part of creating an account with us, we may retain this
                            information for the duration your account exists on our system. If your
                            personal information is no longer required for this purpose, we will delete it
                            or make it anonymous by removing all details that identify you.
                        </>,
                        <>
                            However, if necessary, we may retain your personal information for our
                            compliance with a legal, accounting, or reporting obligation or for archiving
                            purposes in the public interest, scientific, or historical research purposes or
                            statistical purposes.
                        </>
                    ]} />
                <SectionTitleDescription
                    title="Children’s Privacy"
                    descriptions={[
                        <>
                            We do not aim any of our products or services directly at children under the
                            age of 13, and we do not knowingly collect personal information about
                            children under 13.
                        </>
                    ]} />

                <SectionTitleDescription
                    title="Disclosure of Personal Information to Third Parties"
                    descriptions={[
                        <>We may disclose personal information to:</>,
                        <ul key={"disclosure-of-personal-info"} className="pl-5 list-disc">
                            <li>a parent, subsidiary, or affiliate of our company</li>
                            <li>third-party service providers for the purpose of enabling them to provide
                                their services, including (without limitation) IT service providers, data
                                storage, hosting and server providers, analytics, error loggers, debt
                                collectors, maintenance or problem-solving providers, marketing providers,
                                professional advisors, and payment systems operators</li>
                            <li>our employees, contractors, and/or related entities</li>
                            <li>our existing or potential agents or business partners</li>
                            <li>sponsors or promoters of any competition, sweepstakes, or promotion we
                                run</li>
                            <li>credit reporting agencies, courts, tribunals, and regulatory authorities, in the
                                event you fail to pay for goods or services we have provided to you</li>
                            <li>courts, tribunals, regulatory authorities, and law enforcement officers, as
                                required by law, in connection with any actual or prospective legal
                                proceedings, or in order to establish, exercise, or defend our legal rights</li>
                            <li>third parties, including agents or sub-contractors, who assist us in providing
                                information, products, services, or direct marketing to you</li>
                            <li>third parties to collect and process data</li>
                            <li>an entity that buys, or to which we transfer all or substantially all of our
                                assets and business</li>
                        </ul>,
                        <>Third parties we currently use include:</>,
                        <ul key={"third-parties-we-use"} className="pl-5 list-disc">
                            <li>Google Analytics</li>,
                            <li>MailChimp</li>,
                            <li>Stripe</li>
                        </ul>
                    ]} />
                <SectionTitleDescription
                    title="International Transfers of Personal Information"
                    descriptions={[
                        <>
                            The personal information we collect is stored and/or processed in United
                            States, or where we or our partners, affiliates, and third-party providers
                            maintain facilities.
                        </>,
                        <>
                            The countries to which we store, process, or transfer your personal
                            information may not have the same data protection laws as the country in
                            which you initially provided the information. If we transfer your personal
                            information to third parties in other countries: (i) we will perform those
                            transfers in accordance with the requirements of applicable law; and (ii) we
                            will protect the transferred personal information in accordance with this
                            privacy policy.
                        </>
                    ]} />
                <SectionTitleDescription
                    title="Your Rights and Controlling Your Personal Information"
                    descriptions={[
                        <>
                            Your choice: By providing personal information to us, you understand we will
                            collect, hold, use, and disclose your personal information in accordance with
                            this privacy policy. You do not have to provide personal information to us,
                            however, if you do not, it may affect your use of our website or the products
                            and/or services offered on or through it.
                        </>,
                        <>
                            Information from third parties: If we receive personal information about you
                            from a third party, we will protect it as set out in this privacy policy. If you
                            are a third party providing personal information about somebody else, you
                            represent and warrant that you have such person’s consent to provide the
                            personal information to us.
                        </>,
                        <>
                            Marketing permission: If you have previously agreed to us using your
                            personal information for direct marketing purposes, you may change your
                            mind at any time by contacting us using the details below.
                        </>,
                        <>
                            Access: You may request details of the personal information that we hold
                            about you.
                        </>,
                        <>
                            Correction: If you believe that any information we hold about you is
                            inaccurate, out of date, incomplete, irrelevant, or misleading, please contact
                            us using the details provided in this privacy policy. We will take reasonable
                            steps to correct any information found to be inaccurate, incomplete,
                            misleading, or out of date.
                        </>,
                        <>
                            Non-discrimination: We will not discriminate against you for exercising any of
                            your rights over your personal information. Unless your personal information
                            is required to provide you with a particular service or offer (for example
                            processing and fulfilling orders), we will not deny you goods or services
                            and/or charge you different prices or rates for goods or services, including
                            through granting discounts or other benefits, or imposing penalties, or
                            provide you with a different level or quality of goods or services.
                        </>,
                        <>
                            Downloading of Personal Information: We provide a means for you to
                            download the personal information you have shared through our site. Please
                            contact us for more information.
                        </>,
                        <>
                            Notification of data breaches: We will comply with laws applicable to us in
                            respect of any data breach.
                        </>,
                        <>
                            Complaints: If you believe that we have breached a relevant data protection
                            law and wish to make a complaint, please contact us using the details below
                            and provide us with full details of the alleged breach. We will promptly
                            investigate your complaint and respond to you, in writing, setting out the
                            outcome of our investigation and the steps we will take to deal with your
                            complaint. You also have the right to contact a regulatory body or data
                            protection authority in relation to your complaint.
                        </>,
                        <>
                            Unsubscribe: To unsubscribe from our email database or opt-out of
                            communications (including marketing communications), please contact us
                            using the details provided in this privacy policy, or opt-out using the opt-out
                            facilities provided in the communication. We may need to request specific
                            information from you to help us confirm your identity.
                        </>
                    ]} />
                <SectionTitleDescription
                    title="Use of Cookies"
                    descriptions={[
                        <>
                            We use “cookies” to collect information about you and your activity across
                            our site. A cookie is a small piece of data that our website stores on your
                            computer, and accesses each time you visit, so we can understand how you
                            use our site. This helps us serve you content based on preferences you have
                            specified.
                        </>,
                        <>Please refer to our Cookie Policy for more information. </>
                    ]} />
            </div>
        </HomeLayout>
    );
};

export default Privacy;