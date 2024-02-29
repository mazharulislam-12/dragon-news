import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
import app from '../../../firebase/firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            });
    };


return (
    <div>

        <div className='p-4 space-y-3 mb-6'>
            <h2 className='text-3xl font-medium'>Login With</h2>

            <button onClick={handleGoogleSignIn} className="btn gap-4 ">
                <FaGoogle />
                Login With Google
            </button>
            <button  className="btn gap-4 ">
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

        {/* q zone section */}
        <div className='p-4  mb-6'>
            <h2 className='text-3xl  font-medium'>Q-Zone</h2>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />

        </div>

    </div>
);
};

export default RightSideNav;