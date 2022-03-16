import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {getSdk} from "../../sharetribe/sharetribeSDK";
import {toast, Toaster} from "react-hot-toast";

const VerifyEmail = () => {
    const {query, push} = useRouter();
    const [invalid, setInvalid] = useState(false)
    useEffect(() => {
        if(query?.t){
            getSdk().currentUser.verifyEmail({
                verificationToken: query.t
            }, {
                expand: true
            }).then(res => {
                toast.success('Your email has be verified!')
                setTimeout(() => {
                    push('/')
                }, 500)
            }).catch(err => {
                setInvalid(true)
            })
        }else{
            push('/')
        }


    }, [query])

    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <Toaster />
            <h2 className={`text-xl font-trade-gothic-bold tracking-widest font-bold my-auto mx-auto text-center ${invalid ? 'text-red-500': 'text-primary'}`}>{ invalid ? 'Invalid Token!' : 'Verifying! Please wait......'}</h2>
        </div>
    )
}

export default VerifyEmail