import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";


// eslint-disable-next-line react/prop-types
const ToyDetails = () => {
    useTitle('Toy Details');
    const toyDetails = useLoaderData();
    const { toyName, sellerName, price, toyPicture, details, rating, category, quantity, } = toyDetails

    return (
        <div>
            <figure className="flex justify-center ">
                <img className="rounded-2xl " src={toyPicture} alt="Album" /></figure>
            <div className=" text-center p-3 bg-amber-100 my-3 ">

                <h2 className="text-3xl text-orange-500 font-semibold" >Toy Name : {toyName}</h2>
                <br />
                <p>Details : {details}</p>
                <p className="text-red-500  space-y-4  text-xl" >Seller : {sellerName}</p>
                <Rating

                    placeholderRating={rating}
                    emptySymbol={<FaRegStar></FaRegStar>}
                    readonly
                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                >
                </Rating>
                
                <div className="flex gap-5 justify-center my-3 ">
                    <p className="btn btn-outline">Price : {price}</p>
                    <p className="btn btn-outline">{category}</p>
                </div>
                <p className="text-lg my-2">Available Quantity : {quantity}</p>
                <button className="btn btn-accent ">Buy Now</button>
            </div>
        </div>

    );
};

export default ToyDetails;