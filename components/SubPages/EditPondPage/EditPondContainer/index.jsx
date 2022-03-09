import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const EditPondContainer = ({ children }) => {
    const { query, pathname } = useRouter();
    return (
        <div className="bg-gray-50 py-10">
            <div className="container">
                <div className="lg:w-4/5  mx-auto grid grid-cols-12 gap-5 lg:gap-20">
                    <div className="col-span-12 lg:col-span-3">
                        <div className="space-y-2">
                            <Link href={`/edit-pond/pond-listing/${query["pond-id"]}`}>
                                <a className={`block text-lg font-trade-gothic-bold ${pathname.search("pond-listing") != -1 && "text-secondary"}`}>Pond Listing</a>
                            </Link>
                            <Link href={`/edit-pond/description/${query["pond-id"]}`}>
                                <a className={`block text-lg font-trade-gothic-bold ${pathname.search("description") != -1 && "text-secondary"}`}>Description</a>
                            </Link>
                            <Link href={`/edit-pond/price/${query["pond-id"]}`}>
                                <a className={`block text-lg font-trade-gothic-bold ${pathname.search("price") != -1 && "text-secondary"}`}>Price</a>
                            </Link>
                            <Link href={`/edit-pond/available-time/${query["pond-id"]}`}>
                                <a className={`block text-lg font-trade-gothic-bold ${pathname.search("available-time") != -1 && "text-secondary"}`}>Available time</a>
                            </Link>
                            <Link href={`/edit-pond/access-to-pond/${query["pond-id"]}`}>
                                <a className={`block text-lg font-trade-gothic-bold ${pathname.search("access-to-pond") != -1 && "text-secondary"}`}>Access to Pond</a>
                            </Link>
                            <Link href={`/edit-pond/amenities/${query["pond-id"]}`}>
                                <a className={`block text-lg font-trade-gothic-bold ${pathname.search("amenities") != -1 && "text-secondary"}`}>Amenities</a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-8">
                        <div className="shadow bg-white px-5 py-6">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditPondContainer;