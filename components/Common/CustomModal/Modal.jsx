import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';

const Modal = ({
    isOpen = false,
    onClose = () => null,
    isOverflowY = true,
    isTransparentBG = false,
    rounded = 2,
    children
}) => {
    const backdropVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
    }

    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
        },
        exit: {
            opacity: 0,
            scale: 0
        }
    };
    useEffect(() => {
        if (typeof (disableBodyScroll) == 'function') {
            // Disabled when modal is open
            isOpen && disableBodyScroll(document.body)
        };
    }, [isOpen])
    const closeModal = (target) => {
        if (typeof onClose === 'function') {
            // For using this function, you can close the modal only using "data-close" attribute in anywhere as the child of the modal
            if ('close' in target.dataset) {
                onClose()
                // Enabled when modal is closed
                enableBodyScroll(document.body)
            }
        }
    }


    return (
        <AnimatePresence>
            {
                isOpen && (
                    // This is main container for the modal 
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={backdropVariants}
                        onClick={(e) => closeModal(e.target)}
                        transition={{ duration: 0.3 }}
                        className="fixed flex justify-center items-center w-screen h-screen top-0 left-0 z-[1500]">
                        {/* this is mask for the modal */}
                        <motion.div
                            data-close
                            className="absolute w-full h-full bg-gray-900 opacity-30 z-[1499]" />
                        {/* This is content container */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={modalVariants}
                            transition={{ duration: 0.3 }}
                            id="modalContainer"
                            style={{
                                borderRadius: rounded + "px"
                            }}
                            className={`relative overflow-custom no-scrollbar z-[1501] w-auto min-w-[300px] max-w-[95vw] h-auto min-h-[150px] max-h-[95vh] overflow-x-hidden ${isOverflowY ? "overflow-y-auto overflow-custom" : " overflow-y-scroll "} ${isTransparentBG ? "bg-transparent" : "bg-white"}`}>
                            {/* You have to control this modal width form the child elements */}
                            {children}
                        </motion.div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    );
};

export default Modal;