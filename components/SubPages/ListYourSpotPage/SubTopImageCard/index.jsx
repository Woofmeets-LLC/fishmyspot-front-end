import React from 'react';

const TopImageCard = () => {
    return (
        <div className="relative w-full h-[300px] 2xl:h-[350px] 3xl:h-[418px]">
            <img
                className="absolute w-full h-full object-cover z-[0]"
                src="/images/Family-Fishing.png" alt="" />
            <div className=" absolute w-full h-full bg-black opacity-20 z-[1]"></div>
            <div className="absolute w-full h-full flex justify-center items-center z-[2]">
                <div className="min-w-[300px] max-w-[425px] mx-auto text-white text-center">
                    <h2 className="font-food-truck text-4xl 3xl:text-5xl mb-5">List Your Pond</h2>
                    <p className="text-center font-trade-gothic text-[15px]">
                        This lovely, quaint pond comes in at .5 acre. Though this pond may be on the smaller size, the fish in the pond are HUGE.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TopImageCard;