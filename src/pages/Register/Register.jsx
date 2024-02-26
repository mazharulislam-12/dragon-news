import { Link } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get("email"));
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
                        <input type="text" name="email" placeholder="Enter your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Photo URL</span>
                        </label>
                        <input type="text" name="text" placeholder=" Enter Your Photo" className="input input-bordered" required />
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
                        <input type="password" placeholder="Enter your Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#403F3F] text-white hover:text-black">Register</button>
                    </div>
                </form>
                <p className="text-center -mt-3">Already? have an account <Link className="text-[#F75B5F]" to='/login'>LoginP</Link> </p>
            </div>
        </div>
    );
};

export default Register;