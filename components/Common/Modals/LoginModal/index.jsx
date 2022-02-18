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
    }
    return (
        <Modal
            isOpen={showLoginModal}
            isOverflowY={false}
            rounded={15}
            onClose={handleClose}>
            <div className="sm:w-[350px] smd:w-[420px] md:w-[500px] 2xl:w-[593px] min-h-[400px] max-h-[90vh] p-2 pl-8 xl:pl-10 2xl:pl-14 3xl:pl-20 pr-6 xl:pr-8 2xl:pr-12 3xl:pr-[72px] py-8 3xl:py-10">
                <div className="text-right -mt-3 -mr-1 mb-2">
                    <button onClick={handleClose}>
                        <FaTimes />
                    </button>
                </div>
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