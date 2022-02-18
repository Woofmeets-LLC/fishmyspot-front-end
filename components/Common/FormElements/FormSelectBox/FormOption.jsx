import React from 'react';

const FormOption = ({ title, value }) => {
    return (
        <option value={value} className="cursor-pointer">{title} </option>
    );
};

export default FormOption;