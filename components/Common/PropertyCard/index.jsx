import { FaMapMarkerAlt, FaStar, FaRegHeart } from "react-icons/fa";


const PropertyCard = () => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow">
            <div className="relative">
                <div className="w-full">
                    <img
                        src="/images/pond2.jpg"
                        alt="Pond"
                        className="w-full rounded-xl"
                    />
                </div>
                <span className="absolute bg-secondary text-xs font-trade-gothic-bold text-primary py-2 px-3 top-5 left-4 rounded">
                    Feature Spot
                </span>
                <div className="p-3">
                    <div className="absolute -mt-6 right-2">
                        <span className="bg-secondary inline-block text-lg text-white rounded-md p-2">
                            <FaRegHeart />
                        </span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <span className="text-secondary inline-block text-base">
                            <FaMapMarkerAlt />
                        </span>
                        <span className="text-base font-trade-gothic text-highlight-1">location</span>
                    </div>
                    <div className="my-2 h-14">
                        <h4 className="font-trade-gothic-bold text-xl text-primary uppercase">OH-STARK COUNTY-NAVARRRE</h4>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex space-x-2 text-highlight-3">
                            <span className="text-base inline-block">
                                <FaStar />
                            </span>
                            <span>
                                <FaStar />
                            </span>
                            <span>
                                <FaStar />
                            </span>
                            <span>
                                <FaStar />
                            </span>
                            <span>
                                <FaStar />
                            </span>
                        </div>
                        <div>
                            <span className="font-trade-gothic-bold text-2xl text-primary block">$160.00</span>
                            <span className="font-trade-gothic text-xs text-highlight-3">per hour</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard;