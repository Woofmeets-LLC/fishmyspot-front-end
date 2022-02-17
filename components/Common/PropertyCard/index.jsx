import { FaMapMarkerAlt, FaStar, FaRegHeart } from "react-icons/fa";
import styles from './PropertyCard.module.css';


const PropertyCard = () => {
    return (
        <div className={styles['card-container']}>
            <div className="relative">
                <div className="w-full">
                    <img
                        src="/images/pond2.jpg"
                        alt="Pond"
                        className="w-full rounded-xl"
                    />
                </div>
                <span className={styles.feature}>
                    Feature Spot
                </span>
                <div className="p-3">
                    <div className="absolute -mt-6 right-2">
                        <span className={styles.wishlist}>
                            <FaRegHeart />
                        </span>
                    </div>
                    <div className={styles.location}>
                        <span className="text-secondary inline-block">
                            <FaMapMarkerAlt />
                        </span>
                        <span className="font-trade-gothic text-highlight-1">location</span>
                    </div>
                    <div className="my-2 h-14">
                        <h4 className={styles['card-heading']}>OH-STARK COUNTY-NAVARRRE</h4>
                    </div>
                    <div className="flex justify-between">
                        <div className={styles.ratings}>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div>
                            <span className={styles.price}>$160.00</span>
                            <span className={styles['per-hour']}>per hour</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard;