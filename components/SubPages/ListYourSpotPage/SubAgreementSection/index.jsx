import { useField } from "formik";
import React from "react";
import { FaCheck } from 'react-icons/fa';


const SubAgreementSection = () => {
    const [termsField, { }, termsHelpers] = useField('terms');
    const [licenseField, { }, licenseHelpers] = useField('license');



    return (
        <div className="text-primary min-h-[200px]">
            <h2 className="text-2xl font-trade-gothic-bold mb-5"> Do you agree this agreement? </h2>
            <h1 className="text-5xl font-trade-gothic-bold mb-8"></h1>

            <div className={'flex gap-3 my-2 items-center cursor-pointer'}
                onClick={() => termsHelpers.setValue(!termsField.value)}>
                <div
                    className={`h-4 flex justify-center items-center transition-all duration-300 cursor-pointer w-4 border-2 border-yellow-500 overflow-hidden ${termsField.value === true ? 'bg-yellow-500' : 'bg-white'}`}>
                    <FaCheck className={'inline text-white text-xs'} />
                </div>
                <p className={`transition-all duration-300 font-trade gothic-bold ${termsField.value == true ? 'text-gray-900' : ''}`}>I have read and agree with the <span className={'text-blue-400 underline cursor-pointer ml-1'}>Terms and Conditions</span></p>
            </div>

            <div className={'flex gap-3 my-2 items-center cursor-pointer'}
                onClick={() => licenseHelpers.setValue(!licenseField.value)}>
                <div
                    className={`h-4 flex justify-center items-center transition-all duration-300 cursor-pointer w-4 border-2 border-yellow-500 overflow-hidden ${licenseField.value === true ? 'bg-yellow-500' : 'bg-white'}`}>
                    <FaCheck className={'inline text-white text-xs'} />
                </div>
                <p className={`transition-all duration-300 font-trade gothic-bold ${licenseField.value == true ? 'text-gray-900' : ''}`}>I have read and agree with the <span className={'text-blue-400 underline cursor-pointer ml-1'}>Licence and Agreement</span></p>
            </div>



        </div>
    )
}

export default SubAgreementSection