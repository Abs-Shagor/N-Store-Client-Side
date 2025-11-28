import axios from 'axios';
import { useEffect, useState } from 'react';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Home = () => {


    // fetching the data
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setProducts(res.data);
            })
    }, [])

    console.log(products);



    return (
        <div className='grid grid-col-3 gap-5 '>
            {/* {
                products.map(product => {
                    return (
                        <div key={product.id}>
                            <img className='w-30 h-30' src={product.image} alt="" />
                            <p>{product.category}</p>
                            <p> {product.title} </p>
                            <p> {product.price} </p>
                            <p> {product.rating.rate} </p>
                            <p> {product.rating.count} </p>
                            <p> {product.description} </p>
                        </div>
                    )
                })
            } */}

            {/* Our Popular Product section */}
            <section className='max-w-[1280px] mx-auto px-2 mt-20'>
                <p className='text-[14px] text-center text-gray-500'>--- Prime & Proven ---</p>
                <h1 className='text-[26px] text-center text-gray-700 font-semibold mb-5 sm:mb-10'>Our Popular Products</h1>


                <div className="grid md:grid-cols-2 gap-5 lg:gap-10 mt-5 sm:mt-10">
                    {
                        products.map(product => {
                            return (
                                <div key={product.id} className="bg-[#f6f6f6] flex gap-2 items-center justify-between  rounded-lg px-2 py-5 lg:p-10">
                                    <div className="flex items-center gap-5 lg:gap-10">
                                        <div className='h-[150px] w-[200px] '>
                                            <img src={product.image} alt="" className=" lg:h-[180px] " />
                                        </div>
                                        <div className="grid gap-2">
                                            <p> <span className="text-[20px] text-gray-700 font-semibold ">{product.title}</span>  </p>
                                            <p> <span className=" text-gray-700 font-semibold">Price:</span> <span className="text-gray-500"> {product.price} BDT</span> </p>
                                            <p> <span className=" text-gray-700 font-semibold">Available:</span>  <span className="text-gray-500"> {product.rating.count} </span></p>
                                            <p className='flex gap-2'> <span className=" text-gray-700 font-semibold  ">Rating:</span> <span className="text-gray-500 flex items-center gap-1"> {product.rating.rate} <FaStar /> </span> </p>
                                            <Link to={`/products/${product.id}`} className="flex items-center gap-1 hover:underline text-gray-700 underline font-semibold"><span>Show more</span><FaArrowRight className="mt-[2px] sm:mt-[4px]" /></Link>
                                        </div>
                                    </div>

                                    <div className="grid gap-2">
                                        <Link className="bg-gray-800 text-white p-2 rounded-md shadow-[0_2px_2px_gray]">
                                            <MdEdit className="w-5 h-5" />
                                        </Link>
                                        <button className="bg-red-500 text-white p-2 rounded-md shadow-[0_2px_2px_gray] cursor-pointer">
                                            <MdDelete className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                
            </section>
        </div>
    );
};

export default Home;