import React from 'react';

const PageTitle = ({ title, subTitle }) => {
    return (
        <>
            <h1 className="text-4xl lg:text-5xl text-center text-secondary font-trade-gothic-bold uppercase my-6">{title}</h1>
            {
                subTitle && (
                    <h2 className="text-xl text-center font-trade-gothic mb-8">{subTitle}</h2>
                )
            }
        </>
    );
};

export default PageTitle;