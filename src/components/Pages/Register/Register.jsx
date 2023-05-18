import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";


const Register = () => {
    const { createUserWithEmailPass, logOut } = useContext(AuthContext);
    const handleRegisterUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        const email = form.email.value;
        createUserWithEmailPass(email, password)
            .then(result => {
                console.log(result);
                const loggedUser = result.user;
                console.log(loggedUser);
                updateProfile(loggedUser, {
                    displayName: name,
                    photoURL: photoUrl
                })
                    .then(() => { })
                    .catch(() => { })
                logOut()
                    .then(() => { })
                    .catch(() => { })
                form.reset()
            })
            .catch((error) => { console.log(error) })


    }
    return (
        <div style={{ height: '100vh' }} className=" flex justify-center items-center">
            <form onSubmit={handleRegisterUser} className="card shadow-lg card-normal p-5 bg-base-200 border-double border-4 border-blue-400">
                <h1 className="text-5xl my-5 font-bold text-center">Register</h1>
                <div className=" flex justify-between gap-3 ">
                    <label className="input-group input-group-vertical">
                        <span className="p-3">Name</span>
                        <input type="text" name="name" required placeholder="Your Name" className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical">
                        <span className="p-3">Photo URL </span>
                        <input type="text" name="photoUrl" required placeholder="Your Photo" className="input input-bordered" />
                    </label>
                </div>
                <div className=" flex justify-between gap-3 my-5 ">
                    <label className="input-group input-group-vertical">
                        <span className="p-3">Email</span>
                        <input type="email" name="email" required placeholder="Your Email Address" className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical">
                        <span className="p-3">Password</span>
                        <input type="password" name="password" required placeholder="Your Password" className="input input-bordered" />
                    </label>
                </div>

                <div className="text-center space-y-2">
                    <input className="btn btn-wide" name="submit" type="submit" value="register" />
                    <p className='label-text-alt text-center'>Already have a account? Please   <Link className='text-purple-500' to="/login">Login</Link></p>
                </div>


            </form>
        </div>
    );
};

export default Register;