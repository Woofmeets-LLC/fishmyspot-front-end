import { useField } from 'formik';
import React from 'react';
import { DayHoursPicker } from '../../../Common';

const SubAvailableTimeEdit = () => {
    const [field, meta] = useField({ name: "availableTime" });
    const isSelectedAny = Object.keys(field?.value)?.map(key => (field?.value[key]?.isSelected))?.includes(true);
    return (
        <>
            <h2 className="block text-2xl text-primary font-trade-gothic-bold capitalize mb-4">Check all days/times that your pond is available to fish:</h2>
            <DayHoursPicker label="Sunday" name="availableTime[sunday]" />
            <DayHoursPicker label="Monday" name="availableTime[monday]" />
            <DayHoursPicker label="Tuesday" name="availableTime[tuesday]" />
            <DayHoursPicker label="Wednesday" name="availableTime[wednesday]" />
            <DayHoursPicker label="Thursday" name="availableTime[thursday]" />
            <DayHoursPicker label="Saturday" name="availableTime[saturday]" />
            <DayHoursPicker label="Friday" name="availableTime[friday]" />
            <DayHoursPicker label="Every Day" name="availableTime[everyday]" />
            {!isSelectedAny ? (
                <div className="mt-2 text-red-500 text-sm">{"You must select at least one day"}</div>
            ) : null}
            <div className="my-2 text-right">
                <button
                    type="submit"
                    className="bg-secondary text-white font-trade-gothic-bold rounded py-2 px-8 ml-auto">Update</button>
            </div>
        </>
    );
};

export default SubAvailableTimeEdit;