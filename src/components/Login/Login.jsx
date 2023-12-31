import { Link } from "react-router-dom";
import login from "../../assets/photo/login.png"
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ImGoogle,  } from "react-icons/im";


const Login = () => {

    const { user, signIn,signInWithGoogle} = useContext(AuthContext);
    const [error, setError] = useState(' ')

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        if(password.length<6){
            setError('password musth be 6 characters or longer')
            
        }
        else{
            setError('')
            
        }

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset();
            logOut,
            window.location.href= ('/')
        })
        .catch(error => {
            console.log(error)
        })

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero min-h-screen container mx-auto">

            <div className="hero-content flex-col lg:flex-row h-full w-full">
                <div className="text-center lg:text-left w-2/4">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <form onSubmit={handleLogin}>
                        <div className="card-body ">
                            <h1 className="text-3xl font-bold text-center">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name = "email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name = "password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-pink-600 border-none">Login</button>
                            </div>
                            <button onClick={handleGoogleSignIn} className='btn btn-outline mt-3 w-full'><span className='mr-3'><ImGoogle></ImGoogle></span>Log in with Google</button>
                            <p>New in this page? <Link to="/register" className=" text-red-800" >Please Register.</Link></p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;