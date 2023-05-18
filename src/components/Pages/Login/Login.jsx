import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const Login = () => {
    const { GoogleLogin, loginWithEmailPass } = useContext(AuthContext)
    const handleGoogleLogin = () => {
        GoogleLogin()
            .then(result => console.log(result))
            .catch(err => console.error(err))

    }
    const handleLoginForm = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginWithEmailPass(email, password)
            .then(() => { })
            .catch(() => { })
    }

    return (
        <div style={{ height: '100vh' }} className=" flex justify-center items-center">
            <form onSubmit={handleLoginForm} className="card shadow-lg  card-normal p-5 bg-base-200 border-double border-4 border-blue-400">
                <h1 className="text-5xl my-3 font-bold">Login Now</h1>
                <div className="form-control">
                    <label className="input-group input-group-vertical">
                        <span className="p-3">Email</span>
                        <input type="email" name="email" required placeholder="Your Email Address" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control my-5">
                    <label className="input-group input-group-vertical">
                        <span className="p-3">Password</span>
                        <input type="password" name="password" required placeholder="Your Password" className="input input-bordered" />
                    </label>
                </div>
                <div className="text-center space-y-2">
                    <input className="btn btn-wide" name="submit" type="submit" value="Login" />
                    <p className='label-text-alt text-center'>New to ToyZone? Please   <Link className='text-purple-500' to="/register">Register</Link></p>
                    <p>Or Login With </p>
                    <button onClick={handleGoogleLogin} className='btn btn-outline mb-3 me-2'><FcGoogle /></button></div>


            </form>
        </div>
    );
};

export default Login;