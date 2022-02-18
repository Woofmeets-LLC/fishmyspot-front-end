import { enableBodyScroll } from 'body-scroll-lock';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../..';
import { setCloseLoginModal } from '../../../../store/slices/modalsSlice';
import ForgetPasswordContainer from './ForgetPassword/ForgetPasswordContainer';
import LoginFormContainer from './LoginFormContainer';

const LoginModal = () => {
    // Redux
    const { showLoginModal } = useSelector(state => state.modals);

    // states
    const [showForgetPassword, setShowForgetPassword] = useState(false);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setCloseLoginModal());
        setShowForgetPassword(false);
        enableBodyScroll(document?.body);
    }
    return (
        <Modal
            isOpen={showLoginModal}
            isOverflowY={false}
            rounded={15}
            onClose={handleClose}>
            <div className="text-right pt-3 pr-5">
                <button onClick={handleClose}>
                    <FaTimes />
                </button>
            </div>
            <div className="sm:w-[350px] smd:w-[420px] md:w-[500px] 2xl:w-[593px] min-h-[300px] max-h-[90vh] pl-8 xl:pl-10 2xl:pl-14 3xl:pl-20 pr-6 xl:pr-8 2xl:pr-12 3xl:pr-[72px] pt-4 pb-10 3xl:pt-7 3xl:pb-10">
                {
                    showForgetPassword
                        ? <ForgetPasswordContainer />
                        : <LoginFormContainer
                            showForgetPassword={showForgetPassword}
                            setShowForgetPassword={setShowForgetPassword} />
                }
            </div>
        </Modal>
    );
};

export default LoginModal;