import { Link } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Register = () => {

    const { crateUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const name = form.get('name');
        const photo = form.get('photo');
        const password = form.get('password');
        console.log(email, name, photo, password);
        // Perform registration logic here
        e.currentTarget.reset();

        // create user
        crateUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error)
            })
    }



    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-auto">
                <h2 className="text-center">Register your account</h2>

                <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder=" Enter Your Photo" className="input input-bordered" required />
                    </div>
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
                        <button className="btn bg-[#403F3F] text-white hover:text-black">Register</button>
                    </div>
                </form>
                <p className="text-center -mt-3">Already? have an account <Link className="text-[#F75B5F]" to='/login'>Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;