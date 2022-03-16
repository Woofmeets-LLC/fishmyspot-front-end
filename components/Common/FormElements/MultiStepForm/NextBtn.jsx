import React from 'react';

const NextBtn = ({ isSubmitting = false, text = "Continue", ...props }) => {
    return (
        <button
            disabled={isSubmitting}
            {...props}
            type="submit"
            className=" bg-secondary text-white font-trade-gothic-bold rounded py-2 px-6">
            {text}
        </button>
    );
};

export default NextBtn;