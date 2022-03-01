/* eslint-disable react-hooks/exhaustive-deps */
import { useField } from 'formik';
import React, { useEffect } from 'react';
import { fullDayEarningEstimation, halfEarningEstimation } from '../../../../services/listing-spot-calculation';
import { FormOption, FormRadioButtons, FormSelect } from '../../../Common';

const SubPondListing = () => {
    const [halfDayRateField, halfDayRateMeta, halfDayRateHelpers] = useField({ name: "halfDayRate" })
    const [fullDayRateField, fullDayRateMeta, fullDayRateHelpers] = useField({ name: "fullDayRate" })
    const [acreField, acreMeta, acreHelpers] = useField({ name: "acre" })

    useEffect(() => {
        halfDayRateHelpers.setValue(halfEarningEstimation(acreField.value))
        fullDayRateHelpers.setValue(fullDayEarningEstimation(acreField.value))
    }, [acreField?.value])
    return (
        <div>
            <FormSelect label="Acre&#40;s&#41;" name="acre">
                <FormOption title="Select one" value="" />
                <FormOption title="<1" value="0.5" />
                <FormOption title="1" value="1" />
                <FormOption title="2" value="2" />
                <FormOption title="3" value="3" />
                <FormOption title="4" value="4" />
                <FormOption title="5" value="5" />
                <FormOption title="6" value="6" />
                <FormOption title="7" value="7" />
                <FormOption title="8" value="8" />
                <FormOption title="8+" value="9" />
            </FormSelect>
            <FormRadioButtons
                containerClasses={"grid grid-cols-4 md:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 3xl:grid-cols-12"}
                label="Stocked Pond?"
                name="stocked-pond"
                radioBtns={[{ title: "Yes", value: "yes" }, { title: "No", value: "no" }]} />
            <FormRadioButtons
                containerClasses={"grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4"}
                label="Catch Requirements"
                name="catch-requirements"
                radioBtns={[{ title: "Catch & Keep", value: "catch-n-keep" }, { title: "Catch & Release", value: "catch-n-release" }]} />
        </div>
    );
};

export default SubPondListing;