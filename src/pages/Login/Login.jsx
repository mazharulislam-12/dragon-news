import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { FaGoogle } from "react-icons/fa";
import app from "../../firebase/firebase.config";
import {getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the login page', location);


    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);

                //navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error);
            })
    };


    // google login code 
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then(result => {
            const user = user.result;
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        });
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-auto">
                <h2 className="text-center">Login your account</h2>

                <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Email Address</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-lg font-bold">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Enter your Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#403F3F] text-white ">Login</button>
                    </div>


                    {/* google login btn */}
                    <div className="text-center mt-5">
                        <p>or use one of these options</p>
                        <FaGoogle onClick={handleGoogleSignIn}  className="text-2xl cursor-pointer "></FaGoogle>
                    </div>

                </form>
                <p className="text-center -mt-3">Don't have an account <Link className="text-[#F75B5F]" to='/register'>Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;