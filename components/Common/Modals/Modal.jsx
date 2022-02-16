import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const Modal = ({ show, onClose, children }) => {
    const backdrop = {
        hidden: {
            opacity: 0,
            zIndex: 999
        },
        visible: {
            opacity: 1,
            zIndex: 999
        },
        exit: {
            opacity: 0,
            scale: 0
        }
    }

    const modal = {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 1
        }

    }

    const closeModal = (target) => {
        if (typeof onClose === 'function') {
            if ('close' in target.dataset) {
                onClose()
            }
        }
    }


    return (
        <AnimatePresence exitBeforeEnter>
            {
                show === true && (
                    <motion.div
                        onClick={e => closeModal(e.target)}
                        data-close
                        transition={{ duration: 0.2 }}
                        className={'bg-opacity-70 w-screen text-white h-screen fixed left-0 top-0 flex justify-center items-center'}
                        variants={backdrop}
                        initial={'hidden'}
                        animate={'visible'}
                        exit={'exit'}
                    >
                        <motion.div
                            className={'flex-inline p-2 bg-white rounded shadow max-h-90 hide-scroll-bar'}
                            variants={modal}
                            initial={'hidden'}
                            animate={'visible'}
                            exit={'hidden'}
                            transition={{
                                duration: .3
                            }}
                        >
                            {
                                children
                            }
                        </motion.div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    );
};

export default Modal;