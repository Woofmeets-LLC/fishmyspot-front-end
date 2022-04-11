/* eslint-disable import/no-anonymous-default-export */

import * as yup from 'yup';
import { FormCheckbox, FormInput, FormOption, FormRadioButtons, FormSelect, FormTextarea, MultiStepForm, NextBtn } from "../../components/Common";
import FormStep from "../../components/Common/FormElements/MultiStepForm/FormStep";


export default {
    title: 'Common/Multi Step Form',
    component: MultiStepForm,
}

export const FormElementsStoriesA = () => {
    const validation = {
        step1: yup.object({
            firstName: yup.string().required("First Name is required!"),
            lastName: yup.string().required("Last Name is required!"),
        }),
        step2: yup.object({
            gender: yup.string().required("Gender is required!"),
            "age-range": yup.string().required("Select a age range!"),
        }),
        step3: yup.object({
            address: yup.string().required("Please type your address!"),
            terms: yup.boolean().oneOf([true], "You have to agree!"),
        }),
    }
    return (
        <MultiStepForm
            initialValues={{
                firstName: "",
                lastName: "",
                gender: "",
                "age-range": "",
                address: "",
                terms: false,
            }}
            hideBackBtnAtEnd={false}
            stepControllerBtns={[{}, {}, { next: <NextBtn text="Submit" type="submit" /> }]}
            timelineArray={["Step 1", "Step 2", "Step 3"]}
            onSubmit={() => alert("Submitted")}
            successComponent={<div>Success</div>}
        >
            <FormStep validationSchema={validation.step1}>
                <h2 className="text-2xl text-gray-600 font-trade-gothic-bold mb-4">Personal Info (Step 01)</h2>
                <div className="grid grid-cols-2 gap-5">
                    <FormInput name="firstName" label="First Name" placeholder="Enter your first name" />
                    <FormInput name="lastName" label="Last Name" placeholder="Enter your last name" />
                </div>
            </FormStep>
            <FormStep validationSchema={validation.step2}>
                <h2 className="text-2xl text-gray-600 font-trade-gothic-bold mb-4">Personal Info (Step 02)</h2>
                <FormSelect label="Gender" name="gender" >
                    <FormOption title="Select gender" value="" />
                    <FormOption title="Male" value="MALE" />
                    <FormOption title="Female" value="FEMALE" />
                </FormSelect>
                <FormRadioButtons
                    containerClasses={"grid grid-cols-2 md:grid-cols-3"}
                    label="Select your age range"
                    name="age-range"
                    radioBtns={[{ title: "10 to 18 years", value: "10-18-years" }, { title: "19 to 30 years", value: "19-30-years" }]} />
            </FormStep>
            <FormStep validationSchema={validation.step3}>
                <h2 className="text-2xl text-gray-600 font-trade-gothic-bold mb-4">Personal Info (Step 03)</h2>
                <FormTextarea name="address" label="Address" placeholder="Enter your address" />
                <FormCheckbox name="terms" label="I agree to the terms and conditions" />
            </FormStep>
        </MultiStepForm>
    )
};
FormElementsStoriesA.storyName = "Multi Step Form";