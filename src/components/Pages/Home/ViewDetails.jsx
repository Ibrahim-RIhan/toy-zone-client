import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import useTitle from '../../../hooks/useTitle'
import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
 
  useTitle('Toy Details')
  const toyDetails = useLoaderData();
  const { toyName, toyPicture, price, rating, category, sellerName, quantity } = toyDetails;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl my-10">
      <figure><img className="h-96 " src={toyPicture} alt="Album" /></figure>
      <div className="card-body">
        <h2 className="card-title">Toy Name : {toyName}</h2>
        <Rating

          placeholderRating={rating}
          emptySymbol={<FaRegStar></FaRegStar>}
          readonly
          placeholderSymbol={<FaStar className='text-warning'></FaStar>}
          fullSymbol={<FaStar></FaStar>}
        >
        </Rating>
        <p className="text-red-500">Seller Name : {sellerName}</p>
        <p>Toy Category : {category}</p>
        <p>Available Quantity : {quantity}</p>
        <p className="text-red-500 font-bold ">Price : {price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;