import axios from 'axios';
import { useEffect, useState } from 'react';
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

const Home = () => {

    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => setProducts(res.data));
    }, []);

    const indexLast = currentPage * productsPerPage;
    const indexFirst = indexLast - productsPerPage;
    const currentProducts = products.slice(indexFirst, indexLast);

    const totalPages = Math.ceil(products.length / productsPerPage);

    return (
        <div className='grid grid-col-3 gap-5 '>
            <section className='max-w-[1280px] mx-auto px-2 mt-20'>
                <p className='text-[14px] text-center text-gray-500'>--- Prime & Proven ---</p>
                <h1 className='text-[26px] text-center text-gray-700 font-semibold mb-5 sm:mb-10'>Our Popular Products</h1>

                <div className='flex items-center gap-5 justify-between '>
                    <div className='text-gray-700'>
                        {products.length} results found
                    </div>
                    <div className='flex items-center gap-2'>
                        <hr className="flex-1 text-[#93c0b4] w-full my-5" />
                        <div className='flex items-center gap-1'>
                            <p className='text-[14px] text-gray-500 '>Sort by: </p>
                            <div className="dropdown dropdown-end">
                                <div tabIndex="0" role="button" className="text-[14px] text-[#003D20] flex items-center cursor-pointer">Click <TiArrowSortedDown className='h-5 w-5' /></div>
                                <ul tabIndex="-1" className="dropdown-content menu bg-green-50 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><a>Recent</a></li>
                                    <li><a>Ascending </a></li>
                                    <li><a>Rating</a></li>
                                    <li><a>Descending</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 lg:gap-10 mt-5 sm:mt-10">
                    {currentProducts.map(product => (
                        <div key={product.id} className="bg-[#f6f6f6] flex gap-2 items-center justify-between rounded-lg px-2 py-5 lg:p-10">
                            <div className="flex items-center gap-5 lg:gap-10">
                                <div className='h-[150px] w-[200px] '>
                                    <img src={product.image} alt="" className=" lg:h-[180px] " />
                                </div>
                                <div className="grid gap-2">
                                    <p className="text-[20px] text-gray-700 font-semibold">{product.title}</p>
                                    <p><span className="font-semibold">Price:</span> {product.price} BDT</p>
                                    <p><span className="font-semibold">Available:</span> {product.rating.count}</p>
                                    <p className='flex gap-2'>
                                        <span className="font-semibold">Rating:</span>
                                        {product.rating.rate} <FaStar />
                                    </p>
                                    <Link to={`/products/${product.id}`} className="flex items-center gap-1 hover:underline text-gray-700 underline font-semibold">
                                        Show more <FaArrowRight className="mt-[2px]" />
                                    </Link>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Link className="bg-gray-800 text-white p-2 rounded-md"><MdEdit /></Link>
                                <button className="bg-red-500 text-white p-2 rounded-md"><MdDelete /></button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex gap-2 justify-center mt-10">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-3 py-1 cursor-pointer border rounded-md ${currentPage === i + 1 ? 'bg-gray-700 text-white' : ''}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>

            </section>
        </div>
    );
};

export default Home;
