import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";


const UpdateToy = () => {
    const ToyData = useLoaderData();
    useTitle('UpdateToy');
    const { _id, toyName } = ToyData;
    const handleToyUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const toyPicture = form.toyPicture.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const updatedToy = { toyPicture, quantity, details, price }
        fetch(`https://toy-zone-server.vercel.app/myToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'Toy Updated Successfully',
                    )
                    form.reset();
                }
            });

    }

    return (
        <div className="text-center">
            <h1 className=" font-bold text-5xl my-7">Update Toy</h1>
            <div  className=" flex justify-center items-center">
                <form onSubmit={handleToyUpdate} className=" shadow-2xl bg-stone-800 text-white rounded-xl p-5 bordered">
                    <h1 className="my-5 mb-7 text-2xl font-semibold text-center">Toy Name : {toyName}</h1>
                    <div className="flex gap-5 justify-between my-3  ">
                        <div>
                            <label className="input-group text-stone-900 font-semibold input-group-vertical input-group-lg">
                                <span>Price</span>
                                <input type="text" name="price" placeholder="Toy Price" className="input input-bordered" />
                            </label>
                        </div>
                        <div className="">
                            <label className="input-group  text-stone-900 font-semibold  input-group-vertical input-group-lg">
                                <span>Quantity</span>
                                <input type="text" name="quantity" placeholder="Your Toy Quantity" className="input input-bordered" />
                            </label>
                        </div>
                    </div>

                    <div className="my-3">
                        <label className="input-group  text-stone-900 font-semibold  input-group-vertical input-group-lg">
                            <span>Picture</span>
                            <input type="text" name="toyPicture" placeholder="Your Toy Picture" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="my-3">
                        <label className="input-group  text-stone-900 font-semibold  input-group-vertical input-group-lg">
                            <span>Details</span>
                            <input type="text"  name="details" placeholder="Your Toy Details" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="grid justify-center gap-5" >
                        <input className="btn btn-accent btn-wide my-3" type="submit" value="Update TOY" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;