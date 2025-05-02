import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us on</h2>
            <div>
                <div className="join w-full join-vertical">
                    <button className="btn justify-start   bg-base-100 join-item"> <FaFacebook></FaFacebook> Facebook</button>
                    <button className="btn justify-start bg-base-100 join-item"><FaInstagram></FaInstagram> Instagram</button>
                    <button className="btn justify-start bg-base-100 join-item"><FaTwitter></FaTwitter> Twitter</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;