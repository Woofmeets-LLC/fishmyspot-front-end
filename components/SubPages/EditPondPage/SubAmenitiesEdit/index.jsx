import React from 'react';
import AddOnsEdit from './AddOnsEdit';
import AmenitiesOptionsEdit from './AmenitiesOptionsEdit';

const SubAmenitiesEdit = () => {
    return (
        <>
            <AmenitiesOptionsEdit />
            <AddOnsEdit />
            <div className="mb-2 mt-5 text-right">
                <button
                    type="submit"
                    className="bg-secondary text-white font-trade-gothic-bold rounded py-2 px-8 ml-auto">Update</button>
            </div>
        </>
    );
};

export default SubAmenitiesEdit;