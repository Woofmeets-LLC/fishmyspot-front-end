import React from 'react';
import { FormOption, FormRadioButtons, FormSelect } from '../../../Common';

const PondListing = () => {
    return (
        <div>
            <FormSelect label="Acre&#40;s&#41;" name="acre">
                <FormOption title="Select one" value="" />
                <FormOption title="10" value="10" />
                <FormOption title="11" value="11" />
                <FormOption title="12" value="12" />
            </FormSelect>
            <FormRadioButtons
                containerClasses={"grid grid-cols-4 md:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 3xl:grid-cols-12"}
                label="Stocked Pond?"
                name="stocked-pond"
                radioBtns={[{ title: "Yes", value: "yes" }, { title: "No", value: "no" }]} />
            <FormRadioButtons
                containerClasses={"grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6"}
                label="Catch Requirements"
                name="catch-requirements"
                radioBtns={[{ title: "Catch & Keep", value: "catch-n-keep" }, { title: "Catch & Release", value: "catch-n-release" }]} />
        </div>
    );
};

export default PondListing;