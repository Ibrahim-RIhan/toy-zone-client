import { useLoaderData } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const ToyDetails = () => {
    const toyDetails = useLoaderData();
   const {toyName, _id, sellerName, price, toyPicture, sellerEmail, details, rating,  category, quantity,} = toyDetails

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={toyDetails?.toyPicture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toyDetails?.toyName}</h2>
                    <p>{toyDetails?.details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;