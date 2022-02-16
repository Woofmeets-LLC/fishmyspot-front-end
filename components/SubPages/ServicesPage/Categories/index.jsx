import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import PriceSlider from '../PriceSlider';
import CategoriesItem from '../CategoriesItem';
import DropDown from '../DropDown';

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
        id: 2,
        title: 'Price range',
        min: 1,
        max: 100,
    },
    {
        id: 3,
        title: 'Type fish',
        options: [
            'Fish Name',
            'Fish Name',
            'Fish Name'
        ],
    },
    {
        id: 4,
        title: 'User rating',
        options: [
            'One star',
            'Two star',
            'Three star',
            'Four star',
            'Five star'
        ],
    },
    {
        id: 5,
        title: 'Experience',
        options: [
            'Beginning Fishing Lesson',
            'Boat',
            'Beginning Fishing Instruction For Family',
            'Family Fun Day'
        ],
    },
];

const variants = {
    hidden: {
        opacity: 0,
        y: -15,
    },
    visible: {
        y: 5,
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 1,
            type: 'spring',
            stiffness: 120
        }
    }
};

const hoverVariants = {
    hover: {
        scale: 1.1,
        originX: 0,
        transition: {
            type: 'spring',
            stiffness: 200,
        }
    }
}

const Categories = () => {
    const [title, setTitle] = useState('');
    // const [isPrice, setIsPrice] = useState(false);
    const [isDropDown, setIsDropDown] = useState(false);

    const handleToggle = (e) => {
        setTitle(e.target.innerText);
        setIsDropDown(!isDropDown);
    }

    return (
        <div className="flex space-x-4 mt-16 mb-14">
            <div className='text-base font-trade-gothic text-primary'>
                <PriceSlider />
            </div>
            {
                CategoryList.length > 0 ? (
                    CategoryList.map(category => (
                        <div key={category.id} className='text-base font-trade-gothic text-primary'>
                            <div className='relative'>
                                {
                                    category.title !== 'Price range' && (
                                        <div
                                            className='flex items-center border border-[#a8a8a8] rounded-3xl py-2 px-5 cursor-pointer'
                                            onClick={handleToggle}
                                        >
                                            {category.title}
                                            {
                                                isDropDown && title === category.title ?
                                                    <IoIosArrowUp className='ml-2' /> :
                                                    <IoIosArrowDown className='ml-2' />
                                            }
                                        </div>
                                        // <CategoriesItem title={category.title} onClick={(e) => console.log(e.target.innerText)} />
                                    )
                                }


                                {title === category.title && isDropDown && (
                                    <DropDown title={title} options={category.options} />
                                )}
                            </div>
                        </div>

                    ))
                ) : (
                    <div>No List Found</div>
                )
            }
        </div >
    );
};

export default Categories;