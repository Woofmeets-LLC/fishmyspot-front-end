import React from 'react';

const EditPondContainer = ({ children }) => {
    return (
        <div className="bg-gray-50 py-10">
            <div className="container px-20">
                <div className="grid grid-cols-12 gap-20">
                    <div className="col-span-4">
                        Sidebar
                    </div>
                    <div className="col-span-8">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditPondContainer;