import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {

    const { signIn, handleGoogleSignIn } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';

    const handleGoogle = () =>{
        handleGoogleSignIn();
    }

    const handlelogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'Logged in successfully.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true });
            })
    }





    return (
        <div className="md:w-11/12 mx-auto ">
            <div className="hero-content flex gap-10 ">
                <div className="text-center md:w-1/2 lg:text-left">

                    <img className="rounded-lg" src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=740&t=st=1684610646~exp=1684611246~hmac=c9d43d2f33f1f867f8d5029533ccc772353d234cf2819878adad1100ab96d24a' alt="" />
                </div>
                <div className="card md:w-1/2 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold text-[#32cfbd]  text-center pt-4">Login</h1>
                    <form onSubmit={handlelogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#32cfbd] font-semibold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered text-[#32cfbd] font-semibold" />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-[#32cfbd] font-semibold">Password</span>
                            </label>
                            <input className='w-full py-2 text-[#32cfbd] font-semibold rounded-lg px-3 border-2' name="password" id="" placeholder='Type Your Password' required />
                            <button className="absolute top-12 right-3">
                            </button>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn border-0 px-2 py-1  font-semibold text-white bg-[#14b8a6] rounded-lg shadow-lg hover:bg-[#2f5752]  cursor-pointer mt-2" />
                        </div>
                    </form>
                    <div className='flex justify-center pb-2'>
                        <p><small>New in A c a d e m i a?<Link to="/signup" className='text-[#59dae9] font-bold'> SignUp</Link></small></p>
                    </div>

                    <div className='pb-10 flex items-center justify-center'>
                        <div className='block'>
                            <button onClick={handleGoogle} className="btn flex gap-2 "> <FaGoogle className='text-lg' />Login with Google</button>
                            <br />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;