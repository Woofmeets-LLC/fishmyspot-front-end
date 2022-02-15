import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
    const [isActive, setIsActive] = useState();
    return (
        <header className="sticky top-0 z-[1000] bg-white shadow">
            <div className="relative container flex items-center h-[70px] 2xl:h-[85px] 3xl:h-[102px]">
                <div className="flex items-center w-[95px] 2xl:w-[118px] 3xl:w-[134px] h-full mr-4 2xl:mr-6">
                    <img
                        src="/images/logo.png"
                        className="w-full"
                        alt="logo" />
                </div>
                <div className="hidden md:flex items-center w-[300px] lg:w-[500px] 2xl:w-[620px] 3xl:w-[818px] h-full border-l px-8 lg:px-16">
                    <div className="flex w-full h-8 xl:h-[35px] 2xl:h-[42px] 3xl:h-[47px] border rounded">
                        <span className="flex justify-center items-center h-full w-8 2xl:w-10">
                            <AiOutlineSearch className="xl:text-xl 2xl:text-2xl" />
                        </span>
                        <input
                            className="block w-full appearance-none p-1 bg-transparent border-none text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="text" />
                    </div>
                </div>
                <div className={`absolute md:static top-[74px] right-0 md:flex md:items-center w-[150px] md:w-auto md:h-[70px] 2xl:h-[85px] 3xl:h-[102px] md:ml-auto space-y-2 md:space-y-0 md:space-x-10 bg-white ${isActive ? "p-2 rounded border md:border-0" : "h-0 overflow-hidden p-0"}`}>
                    <Link href="/list-your-spot" >
                        <a className="block md:inline-block text-primary font-trade-gothic-bold 2xl:text-[18px]">List your spot +</a>
                    </Link>
                    <Link href="/list-your-spot" >
                        <a className="block md:inline-block text-primary font-trade-gothic-bold 2xl:text-[18px]">Sign-up</a>
                    </Link>
                    <Link href="/list-your-spot" >
                        <a className="block md:inline-block text-primary font-trade-gothic-bold 2xl:text-[18px]">Log-in</a>
                    </Link>
                </div>
                <div className="block md:hidden ml-auto">
                    <button
                        onClick={() => setIsActive(prevValue => !prevValue)}
                        className=" h-[70px] block lg:hidden py-4 md:py-5 px-2 text-primary text-2xl lg:text-3xl">
                        <div className="lg:hidden cursor-pointer flex flex-col items-end relative">
                            <span className={`bg-primary rounded-sm transform transition duration-500 ${isActive
                                ? "h-1 mb-2 rotate-45 w-7 translate-y-3"
                                : "h-[3px] mb-[6px] rotate-0 w-7 translate-y-0"}`}></span>
                            <span className={` bg-primary rounded-sm w-5 transform transition duration-500 ${isActive
                                ? "h-1 mb-2 opacity-0"
                                : "h-[3px] mb-[6px] opacity-1"}`}></span>
                            <span className={`w-7 bg-primary rounded-sm transform transition duration-500 ${isActive
                                ? "h-1 -rotate-45 -translate-y-3"
                                : "h-[3px] rotate-0 translate-y-0"}`}></span>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;