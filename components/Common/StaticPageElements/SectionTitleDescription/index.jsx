import React from 'react';

const SectionTitleDescription = ({ title, descriptions = [] }) => {
    return (
        <section className="mb-8">
            {
                title &&
                <h2 className="text-2xl font-food-truck text-secondary mb-3">
                    <span className="inline-block w-4 h-4 rounded-full bg-secondary mr-3"></span>
                    {title}
                </h2>
            }
            <div className="space-y-2">
                {
                    descriptions.length
                        ?
                        descriptions?.map((description, index) =>
                            <div
                                key={index}
                                className="font-trade-gothic">{description}</div>
                        )
                        : null
                }
            </div>
        </section>
    );
};

export default SectionTitleDescription;