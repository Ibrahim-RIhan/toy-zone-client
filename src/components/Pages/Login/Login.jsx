import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import Swal from "sweetalert2";


const Login = () => {
    useTitle('Login');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname
    const { GoogleLogin, loginWithEmailPass } = useContext(AuthContext)
    const handleGoogleLogin = () => {
        GoogleLogin()
            .then(() => {
                navigate(from, { replace: true })
                Swal.fire (
                    'User Login Success'
                )
            })
            .catch(err => console.error(err))

    }
    const handleLoginForm = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginWithEmailPass(email, password)
            .then(() => {
                Swal.fire (
                    'User Login Success'
                )
                navigate(from, { replace: true })
            })
            .catch(() => { })
    }

    return (
        <div style={{ height: '100vh' }} className=" flex justify-center items-center">
            <form onSubmit={handleLoginForm} className="card card-normal shadow-lg p-10 text-white bg-stone-800 border-double border-4 border-blue-400">
                <h1 className="text-5xl my-5 font-bold">Login Now</h1>
                <div className="form-control">
                    <label className="input-group  text-stone-900 font-semibold input-group-vertical">
                        <span className="p-3">Email</span>
                        <input type="email" name="email" required placeholder="Your Email Address" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control my-5">
                    <label className="input-group  text-stone-900 font-semibold input-group-vertical">
                        <span className="p-3">Password</span>
                        <input type="password" name="password" required placeholder="Your Password" className="input input-bordered" />
                    </label>
                </div>
                <div className="text-center space-y-2">
                    <input className="btn btn-wide" name="submit" type="submit" value="Login" />
                    <p className='label-text-md text-center'>New to ToyZone? Please   <Link className='text-purple-500' to="/register">Register</Link></p>
                    <button onClick={handleGoogleLogin} className='btn btn-outline btn-accent mb-3 me-2'><FcGoogle /> Login With Google</button></div>
            </form>
        </div>
    );
};

export default Login;