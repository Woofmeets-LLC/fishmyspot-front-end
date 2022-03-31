import { useField } from "formik";
import Link from "next/link";
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
                <p className={`transition-all duration-300 font-trade gothic-bold ${termsField.value == true ? 'text-gray-900' : ''}`}>I have read and agree with the
                    <Link href={"/terms-of-use"}>
                        <a>
                            <span className={'text-blue-400 underline cursor-pointer ml-1'}>Terms and Conditions.</span>
                        </a>
                    </Link>
                </p>
            </div>

            {!termsField.value ? (
                <div className="mt-2 text-red-500 text-sm">Please agree by clicking on the box</div>
            ) : null}

            <div className={'flex gap-3 my-2 items-center cursor-pointer'}
                onClick={() => licenseHelpers.setValue(!licenseField.value)}>
                <div
                    className={`h-4 flex justify-center items-center transition-all duration-300 cursor-pointer w-4 border-2 border-yellow-500 overflow-hidden ${licenseField.value === true ? 'bg-yellow-500' : 'bg-white'}`}>
                    <FaCheck className={'inline text-white text-xs'} />
                </div>
                <p className={`transition-all duration-300 font-trade gothic-bold ${licenseField.value == true ? 'text-gray-900' : ''}`}>I have read and agree with the
                    <Link href={"/license-agreement"}>
                        <a>
                            <span className={'text-blue-400 underline cursor-pointer ml-1'}>License Agreement.</span>
                        </a>
                    </Link>
                </p>
            </div>

            {!licenseField.value ? (
                <div className="mt-2 text-red-500 text-sm">Please agree by clicking on the box!</div>
            ) : null}

        </div>
    )
}

export default SubAgreementSection