import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const navigate = useNavigate();




    return (
        <div className=" min-h-screen flex justify-center items-center p-2">
            <div className="max-w-[450px] w-full bg-[#f6f6f6] backdrop-blur-lg border border-white/30 rounded-xl shadow-2xl p-8 sm:px-12 sm:pb-12  ">
                <div className="text-center mb-6">
                    <h1 className=" text-2xl md:text-3xl font-bold text-gray-700">Log in</h1>
                    <p className="text-gray-500 mt-1">to continue to your account.</p>
                </div>

                <form  autoComplete="off" className="space-y-4">
                    <div>
                        <label className="block  font-medium text-[#372727] mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            autoComplete="email"
                            className="w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-blue-400 transition "
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-[#372727] mb-2">Password</label>
                        <div className="relative">
                            <input
                                type="text"
                                name="password"
                                required
                                autoComplete="current-password"
                                className="w-full px-4 py-2 pr-10 bg-white/50 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-blue-400 transition"
                                placeholder="Enter your password"
                            />
                            <button type="button" >
   
                            </button>
                        </div>

                    </div>

                    <div className="flex items-center justify-between ">
                        <label className="flex items-center text-[14px]">
                            <input type="checkbox" name="checkbox" className="w-4 h-4" />
                            <span className="ml-2 text-gray-500">Remember me</span>
                        </label>
                        <Link className="text-[14px] text-blue-600 hover:underline">Forgot password?</Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gray-700 hover:bg-gray-800 text-white cursor-pointer py-2 rounded-lg font-semibold transition shadow-md hover:shadow-lg">
                        Log in
                    </button>


                </form>

                <div className="text-[14px] text-center mt-4">
                    <p className="text-gray-500">
                        Don't have an account?{' '}
                        <Link to={`/signup`} className="text-blue-600 hover:underline font-semibold">Sign up</Link>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Login;