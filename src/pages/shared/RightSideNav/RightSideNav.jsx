import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const RightSideNav = () => {
    return (
        <div>

            <div className='p-4 space-y-3 mb-6'>
                <h2 className='text-3xl font-medium'>Login With</h2>

                <button className="btn gap-4 ">
                <FaGoogle />
                    Login With Google
                </button>
                <button className="btn gap-4 ">
                <FaGithub />
                    Login With GitHub
                </button>
            </div>

            <div className='p-4  mb-6'>
                <h2 className='text-3xl  font-medium'>Find Us On</h2>

                <a className="btn gap-4 text-lg border">
                <FaFacebook />
                    FaceBook
                </a>
                <br />
                <a className="btn gap-4 text-lg">
                <FaTwitter />
                Twitter
                </a>
                <br />
                <a className="btn gap-4 text-lg">
                <FaInstagram />
                    Instagram
                </a>
              
            </div>

        </div>
    );
};

export default RightSideNav;