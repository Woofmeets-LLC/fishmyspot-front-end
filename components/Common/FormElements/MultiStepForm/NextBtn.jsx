import React from 'react';

const NextBtn = ({ isSubmitting = false, type='submit', text = "Continue", ...props }) => {
    return (
        <button
            disabled={isSubmitting}
            type={type}
            {...props}            
            className=" bg-secondary text-white font-trade-gothic-bold rounded py-2 px-6">
            {text}
            
        </button>
    );
};

export default NextBtn;