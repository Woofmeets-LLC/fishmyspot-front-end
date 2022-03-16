import React from 'react';
import TimeLineItem from './TimeLineItem';

const TimeLineContainer = ({ step, timelineArray }) => {
    return (
        <div className="col-span-10 lg:col-span-4">
            <div className="lg:ml-[72px]">
                {
                    timelineArray?.map((title, index) => <TimeLineItem
                        key={index}
                        index={index}
                        step={step}
                        title={title}
                        totalStep={timelineArray.length} />)
                }

            </div>
        </div>

    );
};

export default TimeLineContainer;