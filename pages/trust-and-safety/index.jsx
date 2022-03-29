import React from 'react';
import { PageTitle, SectionTitleDescription } from '../../components/Common';
import HomeLayout from '../../layouts/HomeLayout';

const TrustAndSafety = () => {
    return (
        <HomeLayout>
            <div className="container my-10">
                <PageTitle
                    title="Safety is a priority for both our pond owners and anglers"
                    subTitle="We know you may be anxious when a visitor arrives on your property. Here is how we can help ease your mind." />

                <SectionTitleDescription
                    title="SET SPECIFIC REQUIREMENTS"
                    descriptions={[
                        `Within our Service Agreement we allow you, the pond owner, to dictate the date, time, catch-and-keep, catch-and-release, parking, etc. so that you are in complete control. We ensure your requirements and expectations are met after you agree to list your spot. Additionally, the address of the pond is not released until a reservation is confirmed and booked to protect the privacy of our pond owners.`
                    ]} />

                <SectionTitleDescription
                    title="GUEST INFORMATION"
                    descriptions={[
                        "Every angler is asked to provide their full name, phone number, e-mail address, number in their party and payment information to FishMySpot prior to booking a reservation.",
                        "Anglers also agree to our terms of use while finalizing a reservation. Should an angler not follow our terms of use or expectations outlined at the time of booking, the pond owner and/ FIshMySpot can exclude them from future reservations."
                    ]} />

                <SectionTitleDescription
                    title="AVAILABLE 24/7"
                    descriptions={[
                        "We are available 24/7. If there is an issue- reach out! Should an event occur, our insurance policy covers pond owners to provide peace of mind and we will do our best to remedy any situation. We have had over 1500+ angler fish our online marketplace and have had 0 issues reported."
                    ]} />


            </div>
        </HomeLayout>
    );
};

export default TrustAndSafety;