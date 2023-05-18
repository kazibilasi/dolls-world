import { Link } from "react-router-dom";
import login from "../../assets/photo/login.png"

const Register = () => {

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.text.value;
        console.log(email, password,name,photoURL)
    }

    return (
        <div className="hero min-h-screen container mx-auto">
            <div className="hero-content flex-col lg:flex-row h-full w-full">
                <div className="text-center lg:text-left w-2/4">

                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <form onSubmit={handleRegister} >
                        <div className="card-body ">
                            <h1 className="text-3xl font-bold text-center">Register Now</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="text" placeholder="photo url" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-pink-600 border-none">Login</button>
                            </div>
                            <p>Already have an account? <Link to="/login" className=" text-red-800" >Please Login.</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;