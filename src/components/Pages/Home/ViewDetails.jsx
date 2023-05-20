import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const toyDetails  = useLoaderData();
    const { toyName, toyPicture, price, rating, category , sellerName, quantity} = toyDetails;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-10">
        <figure><img src={toyPicture} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">Toy Name : {toyName}</h2>
          <p>Seller Name : {sellerName}</p>
          <p>Toy Category : {category}</p>
          <p>Available Quantity : {quantity}</p>
          <p>Price : {price}</p>
          <p>Rating : {rating}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default ViewDetails;