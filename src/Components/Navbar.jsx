import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../Providers/DataProvider";


const Navbar = () => {

    const { open, setOpen } = useContext(DataContext);
    function hamburger() {
        setOpen(!open);
    }


    return (

        <div className="sticky top-0 z-1000 w-full">
            <div className=" flex items-center justify-between bg-gray-700 text-white py-3 sm:py-2 px-2 sm:pr-5">
                <div className="flex items-center ">
                    <div onClick={hamburger}>
                        {
                            open === true ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7 stroke-current cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7 stroke-current cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                        }
                    </div>
                    <Link to={'/'} className='  font-time-new-roman text-[18px] sm:text-[24px]  font-medium ml-1 sm:ml-2'>N.STORE</Link>
                </div>

                <div className="flex items-center gap-5 ">
                    <NavLink to={'/'}>HOME </NavLink>
                    <NavLink to={'/mens'}>MENS </NavLink>
                    <NavLink to={'/womens'}>WOMENS </NavLink>
                    <NavLink to={'/jewelaries'}>JEWELARIES </NavLink>
                    <NavLink to={'/electronics'}>ELOCTRONICS </NavLink>
                </div>

                <div className="flex gap-1 sm:gap-2 items-center font-time-new-roman text-[14px] sm:text-[16px] font-medium">

                    <Link className="transform transition-transform duration-300 ease-in-out hover:scale-105  ">Login</Link>
                    <p>|</p>
                    <Link className="transform transition-transform duration-300 ease-in-out hover:scale-105  ">Signup</Link>
                </div>

            </div>
            <div className={`absolute left-0 top-13 sm:top-13 z-1000 transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                <nav className="flex flex-col min-h-screen min-w-screen sm:min-w-[350px] bg-gray-700 text-white pl-2 ">
                    <NavLink to={'/'} className="border-b-1 border-gray-400 hover:bg-[#373535] pt-4 sm:pt-5 ">HOME</NavLink>
                    <NavLink to={'/mens'} className="border-b-1 border-gray-400 hover:bg-[#373535] pt-4 sm:pt-5 ">MENS</NavLink>
                    <NavLink to={'/womens'} className="border-b-1 border-gray-400 hover:bg-[#373535] pt-4 sm:pt-5 ">WOMENS</NavLink>
                    <NavLink to={'/jewelaries'} className="border-b-1 border-gray-400 hover:bg-[#373535] pt-4 sm:pt-5 ">JEWELARIES</NavLink>
                    <NavLink to={'/electronics'} className="border-b-1 border-gray-400 hover:bg-[#373535] pt-4 sm:pt-5 ">ELOCTRONICS</NavLink>

                </nav>
            </div>
        </div>
    );
};

export default Navbar;