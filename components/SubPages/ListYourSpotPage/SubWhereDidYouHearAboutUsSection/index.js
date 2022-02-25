import React from "react";
import {motion} from "framer-motion";
import {useField} from "formik";

const SubWhereDidYouHearAboutUsSection = () => {
    const [{value}, {initialValue}, {setValue}] = useField('promoteBy')

    const ChangeValue = (field, pushValue) => {

        if(field == 'email' || field == 'name'){
            setValue({
                ...initialValue,
                referral: {
                    state: true,
                    ...{...value.referral, [field]: pushValue}
                }
            })
        }else if(field == 'referral'){
            setValue({
                ...initialValue,
                referral: {
                    ...value.referral,
                    state: true,
                }
            })
        }else{
            setValue({
                ...initialValue,
                [field]: {

                    state: true,
                }
            })
        }
    }

    return (
        <div className="text-primary">
            <h2 className="text-2xl font-trade-gothic-bold mb-5"> How did you hear about us? <sup
                className={'text-yellow-500 text-sm'}>(optional)</sup></h2>
            <h1 className="text-5xl font-trade-gothic-bold mb-8"></h1>
            <div onClick={() => ChangeValue('radio', '')} className={'flex gap-3 my-2 items-center cursor-pointer'}>
                <div
                    className={`h-4 transition-all duration-300 cursor-pointer w-4 rounded-full border-2 border-yellow-500 overflow-hidden inline-block ${value?.radio?.state === true ? 'bg-yellow-500' : 'bg-white'}`}></div>
                <p className={`text-lg transition-all duration-300 font-trade gothic-bold ${value?.radio?.state === true ? 'text-gray-900' : ''}`}>Radio
                    Advertisement</p>
            </div>


            <div onClick={() => ChangeValue('mailer', '')} className={'flex gap-3 my-2 items-center cursor-pointer'}>
                <div
                    className={`h-4 transition-all duration-300 cursor-pointer w-4 rounded-full border-2 border-yellow-500 overflow-hidden inline-block ${value?.mailer?.state === true ? 'bg-yellow-500' : 'bg-white'}`}></div>
                <p className={`text-lg transition-all duration-300 font-trade gothic-bold ${value?.mailer?.state === true ? 'text-gray-900' : ''}`}>Mailer</p>
            </div>


            <div onClick={() => ChangeValue('referral', '')} className={'flex gap-3 my-2 items-center cursor-pointer'}>
                <div
                    className={`h-4 transition-all duration-300 cursor-pointer w-4 rounded-full border-2 border-yellow-500 overflow-hidden inline-block ${value?.referral?.state === true  ? 'bg-yellow-500' : 'bg-white'}`}></div>
                <p className={`text-lg transition-all duration-300 font-trade gothic-bold ${value?.referral?.state === true  ? 'text-gray-900' : ''}`}>Referral</p>
            </div>

            <motion.div initial={{height: 0}} animate={{height: value?.referral?.state === true  ? 'auto' : 0}}
                        className="w-full block pl-8 text-sm overflow-hidden">
                <p>Referred By</p>
                <input value={value.referral.name} onChange={(e) => ChangeValue('name', e.target.value)} type="text" placeholder={'Name'}
                       className="px-2 py-1 rounded-sm my-1 text-sm focus:outline-none border-gray-500 border mr-2"/>
                <input value={value.referral.email} onChange={(e) => ChangeValue('email', e.target.value)} type="email" placeholder={'Email'}
                       className="px-2 py-1 rounded-sm my-1 text-sm focus:outline-none border-gray-500 border"/>
            </motion.div>


            <div onClick={() => ChangeValue('ad', '')} className={'flex gap-3 my-2 items-center cursor-pointer'}>
                <div
                    className={`h-4 transition-all duration-300 cursor-pointer w-4 rounded-full border-2 border-yellow-500 overflow-hidden inline-block ${value?.ad?.state === true  ? 'bg-yellow-500' : 'bg-white'}`}></div>
                <p className={`text-lg transition-all duration-300 font-trade gothic-bold ${value?.ad?.state === true ? 'text-gray-900' : ''}`}>Digital
                    Ad</p>
            </div>

        </div>
    )
}

export default SubWhereDidYouHearAboutUsSection