import React from 'react';

const SectionTitleDescription = ({ title, descriptions = [] }) => {
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-food-truck text-secondary mb-3">
                <span className="inline-block w-4 h-4 rounded-full bg-secondary mr-3"></span>
                {title}
            </h2><div className="space-y-2">
                {
                    descriptions.length
                        ?
                        descriptions?.map((description, index) =>
                            <p
                                key={index}
                                className="font-trade-gothic">{description}</p>
                        )
                        : null
                }
            </div>
        </section>
    );
};

export default SectionTitleDescription;