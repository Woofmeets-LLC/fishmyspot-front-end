import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const CategoryList = [
    {
        id: 1,
        title: 'Location',
        options: [
            'Dhaka',
            'Barishal',
            'Khulna'
        ],
    },
    {
        id: 1,
        title: 'Type fish',
        options: [
            'Fish Name',
            'Fish Name',
            'Fish Name'
        ],
    },
    {
        id: 1,
        title: 'User rating',
        options: [
            'One',
            'Two',
            'Three'
        ],
    },
    {
        id: 1,
        title: 'Experience',
        options: [
            'Beginning Fishing Lesson',
            'Boat',
            'Beginning Fishing Instruction For Family',
            'Family Fun Day'
        ],
    },
]

const Categories = () => {
    const [show, setShow] = useState(false);

    const handleToggle = () => {
        setShow(!show);
    }

    return (
        <div className="flex space-x-4 mt-16 mb-14">
            {
                CategoryList.length > 0 ? (
                    CategoryList.map(category => (
                        <div key={category.id} className='text-base font-trade-gothic text-primary'>
                            <div className='relative'>
                                <div
                                    className='flex items-center border border-[#a8a8a8] rounded-3xl py-2 px-5 cursor-pointer'
                                    onClick={handleToggle}
                                >
                                    {category.title}
                                    <IoIosArrowDown className='ml-2' />
                                </div>
                                {
                                    show && (
                                        <div className='bg-white py-7 pl-4 pr-10 z-50 rounded-lg'>
                                            {
                                                category?.options?.map((option, i) => (
                                                    <div
                                                        key={i}
                                                        className='flex items-center space-x-2 text-base font-trade-gothic-bold'
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            name={option}
                                                            id={option}
                                                            value={option}
                                                            className="accent-secondary w-5 h-5"
                                                        />
                                                        <label htmlFor={option}>{option}</label>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No List Found</div>
                )
            }
        </div>
    );
};

export default Categories;