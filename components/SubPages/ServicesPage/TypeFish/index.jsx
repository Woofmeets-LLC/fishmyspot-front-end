import {AnimatePresence, motion} from 'framer-motion';
import React, {useState} from 'react';
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';
import styles from '../Categories/Categories.module.css';

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
        scale: 1.03,
        originX: 0,
        transition: {
            type: 'spring',
            stiffness: 200,
        }
    }
};


const TypeFish = ({typeFish, setTypeFish}) => {

    const [isDropDown, setIsDropDown] = useState(false);
    const options = [
        "Blackcrappie",
        "Bluegill",
        "Carp",
        "Channelcatfish",
        "Largemouthbass",
        "Muskie",
        "Northernpike",
        "Sunfish",
        "Smallmouthbass",
        "Walleye",
        "Whitecrappie",
        "YellowPerch",
        "Other"
    ];

    const typeFishAddOrRemove = (fishName) => {
        const findFish = typeFish?.length > 0 ? typeFish?.find(fish => fish === fishName) : undefined;

        if (findFish !== undefined) {
            const filterTypeFish = typeFish?.filter(fish => fish !== fishName);
            setTypeFish((prevState) => {
                return {
                    ...prevState,
                    typeFish: filterTypeFish
                }
            });
        } else {
            setTypeFish((prevState) => {
                return {
                    ...prevState,
                    typeFish: [...prevState.typeFish, fishName]
                }
            });
        }
    }

    return (
        <div>
            <div
                className={styles['list-item']}
                onClick={() => setIsDropDown(!isDropDown)}
            >
                Type fish
                {
                    isDropDown ?
                        <IoIosArrowUp/> :
                        <IoIosArrowDown/>
                }
            </div>
            <AnimatePresence>
                {
                    isDropDown &&
                    (
                        <motion.div
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className={styles['dropdown']}>
                            {
                                options?.map((option, i) => (
                                    <div
                                        key={i}
                                        className={styles['dropdown-item']}
                                    >
                                        <input
                                            type={"checkbox"}
                                            name={option}
                                            id={option}
                                            value={option}
                                            checked={typeFish?.includes(option) ? true : false}
                                            onChange={() => typeFishAddOrRemove(option)}
                                            className="accent-secondary w-4 h-4 md:w-5 md:h-5"
                                        />
                                        <motion.label
                                            htmlFor={option}
                                            variants={hoverVariants}
                                            whileHover="hover"
                                        >
                                            {option}
                                        </motion.label>

                                    </div>
                                ))
                            }
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    );
};

export default TypeFish;