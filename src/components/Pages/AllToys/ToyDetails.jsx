import { useLoaderData } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const ToyDetails = () => {
    const toyDetails = useLoaderData();
    const { toyName, sellerName, price, toyPicture, details, rating, category, quantity, } = toyDetails

    return (
        <div>
            <figure className="flex justify-center "><img className="rounded-2xl" src={toyPicture} alt="Album" /></figure>
            <div className=" text-center p-3 bg-amber-100 my-3 ">

                <h2 className="text-3xl  font-semibold" >Toy Name : {toyName}</h2>
                <br />
                <p className="text-red-500  text-xl" >Seller : {sellerName}</p>

                <p>Details : {details}</p>
                <p>Rating {rating} out of 5</p>
                <div className="flex gap-5 justify-center my-3 ">
                    <p className="btn btn-outline">Price : {price}</p>
                    <p className="btn btn-outline">{category}</p>
                </div>
                <p className="text-lg my-2">Available Quantity : {quantity}</p>
                <button className="btn ">Buy Now</button>
            </div>
        </div>

    );
};

export default ToyDetails;