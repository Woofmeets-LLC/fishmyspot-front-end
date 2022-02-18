import React from 'react';
import { IoIosArrowDropdown, IoIosArrowDropdownCircle } from 'react-icons/io';

const TimeLineItem = ({ index, title, step, totalStep }) => {
    return (
        <div className="flex flex-wrap">
            <div className="h-7 flex items-center">

                <div className="w-8 2xl:w-10">
                    {
                        index < step
                            ? <IoIosArrowDropdownCircle className="text-2xl 2xl:text-3xl mr-3 2xl:mr-[14px] text-secondary" />
                            : <IoIosArrowDropdown className="text-2xl 2xl:text-3xl mr-3 2xl:mr-[14px] text-secondary" />
                    }
                </div>
                {
                    index < step
                        ? <h3 className="w-full text-lg 2xl:text-xl text-gray-700 font-trade-gothic-bold ">{title}</h3>
                        : <h3 className="w-full text-lg 2xl:text-xl text-gray-500 font-trade-gothic ">{title}</h3>
                }

            </div>
            {
                totalStep - 1 != index &&
                <div className="h-6 2xl:h-7 w-full">
                    <div className="w-6 2xl:w-[30px] 2xl:py-1 h-full flex justify-center">
                        <div className="h-full w-[1px] bg-secondary"></div>
                    </div>
                </div>
            }
        </div>

    );
};

export default TimeLineItem;