import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';



const Signup = () => {
    const navigate = useNavigate();


    return (
        <div className="min-h-screen flex justify-center items-center p-2">
            <div className="max-w-[450px] w-full  bg-[#f6f6f6] backdrop-blur-lg border border-white/30 rounded-xl shadow-2xl p-8 sm:px-12 sm:pb-12 ">
                <div className="text-center mb-6">
                    <h1 className=" text-2xl md:text-3xl font-bold text-gray-700">Sign up</h1>
                    {/* <p className="text-[#70624c] mt-1">continue to get started</p> */}
                </div>



                <form autoComplete="off" className="space-y-4">
                    <div>
                        <label className="block  font-medium text-[#372727] mb-2">User Name</label>
                        <input
                            type="text"
                            name="user"
                            required
                            className="w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-blue-400 transition "
                            placeholder="Enter user name"
                        />
                    </div>
                    <div>
                        <label className="block  font-medium text-[#372727] mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            autoComplete="email"
                            className="w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-blue-400 transition "
                            placeholder="Email"
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
                                placeholder="Password"
                            />
                            <button type="button" >

                            </button>
                        </div>

                    </div>

                    <div className="flex items-center text-[14px]">
                        <input type="checkbox" name="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                        <span className="ml-2 text-[#70624c]">I agree <Link className='underline'>Terms of Service</Link> </span>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gray-700 hover:bg-gray-800 text-white py-2 rounded-lg font-semibold transition shadow-md hover:shadow-lg"
                    >
                        Sign up
                    </button>
                </form>

                <div className="text-[14px] text-center mt-4">
                    <p className="text-[#70624c]">
                        Already have an account?{' '}
                        <Link to={`/login`} className="text-blue-600 hover:underline font-semibold">Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;