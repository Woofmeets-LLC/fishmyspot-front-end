import React from 'react';

const BackBtn = ({ text = "Back", ...props }) => {
    return (
        <button
            type="button"
            {...props}
            className="bg-secondary text-white font-trade-gothic-bold rounded py-2 px-6">
            {text}
        </button>
    );
};

export default BackBtn;