import React from 'react';
import Modal from '../components/Common/Modals/Modal';
import HomeLayout from '../layouts/HomeLayout';

const Test = () => {
    return (
        <HomeLayout>
            <Modal show={true} >
                <div className="w-40 h-20 overflow-hidden">

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quo vitae similique a, voluptatibus optio odio, fugiat ipsum incidunt facere placeat fuga magnam dolores. Facere praesentium veniam aperiam saepe adipisci.
                </div>
            </Modal>
        </HomeLayout>
    );
};

export default Test;