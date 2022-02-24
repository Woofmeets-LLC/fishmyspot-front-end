import React from 'react';
import DayHoursPicker from './DayHoursPicker';

const SubAvailableTime = () => {
    return (
        <div>
            <h2 className="block text-lg text-primary font-trade-gothic-bold capitalize mb-4">Check all days/times that your pond is available to fish:</h2>
            <DayHoursPicker label="Sunday" name="availableTime[sunday]" />
            <DayHoursPicker label="Monday" name="availableTime[monday]" />
            <DayHoursPicker label="Tuesday" name="availableTime[tuesday]" />
            <DayHoursPicker label="Wednesday" name="availableTime[wednesday]" />
            <DayHoursPicker label="Thursday" name="availableTime[thursday]" />
            <DayHoursPicker label="Saturday" name="availableTime[saturday]" />
            <DayHoursPicker label="Friday" name="availableTime[friday]" />
            <DayHoursPicker label="Every Day" name="availableTime[everyday]" />

        </div>
    );
};

export default SubAvailableTime;