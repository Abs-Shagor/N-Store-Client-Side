import { FaArrowLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ProductDetails = () => {
    const navigate = useNavigate();
    const product = useLoaderData();

    return (
        <div >
            <button onClick={() => navigate('/')} className="flex items-center gap-1  font-semibold cursor-pointer my-10"><FaArrowLeft /><p>Back to home</p></button>
            <div className="bg-[#f6f6f6] flex flex-col sm:flex-row sm:items-center justify-center rounded-lg gap-5 md:gap-10 lg:gap-20 p-5 md:p-10 lg:p-15  ">
                <div className="">
                    <img src={product.image} alt="" className=" max-w-[200px] " />
                </div>
                <div className="grid gap-2">
                    <p> <span className="text-[20px] text-gray-700 font-semibold mb-5">{product.title}</span>  </p>
                    <p> <span className=" text-gray-700 font-semibold">Price:</span> <span className="text-gray-500"> {product.price} BDT</span> </p>
                    <p> <span className=" text-gray-700 font-semibold">Available:</span>  <span className="text-gray-500"> {product.rating.count} </span></p>
                    <p className='flex gap-2'> <span className=" text-gray-700 font-semibold  ">Rating:</span> <span className="text-gray-500 flex items-center gap-1"> {product.rating.rate} <FaStar /> </span> </p>
                    <p> <span className=" text-gray-700 font-semibold">Available:</span>  <span className="text-gray-500"> {product.description} </span></p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;