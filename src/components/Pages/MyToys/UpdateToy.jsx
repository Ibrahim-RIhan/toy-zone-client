import { useLoaderData } from "react-router-dom";


const UpdateToy = () => {
const ToyData = useLoaderData();
const {_id} = ToyData;
    const handleToyUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const toyPicture = form.toyPicture.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const updatedToy = {toyPicture, quantity, details, price}
        fetch(`http://localhost:5000/myToys/${_id}`,{
            method : 'PUT',
            headers :{
                'content-type': 'application/json'
            },
            body : JSON.stringify(updatedToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });

    }

    return (
        <div>
            <div style={{ height: '100vh' }} className=" flex justify-center items-center">
                <form onSubmit={handleToyUpdate} className=" shadow-2xl rounded-xl p-5 bordered">
                    <div className="flex gap-5 justify-between my-3  ">
                        <div>
                            <label className="input-group input-group-vertical input-group-lg">
                                <span>Price</span>
                                <input type="text" name="price" placeholder="Toy Price" className="input input-bordered" />
                            </label>
                        </div>
                        <div className="">
                            <label className="input-group input-group-vertical input-group-lg">
                                <span>Quantity</span>
                                <input type="text" name="quantity" placeholder="Your Toy Quantity" className="input input-bordered" />
                            </label>
                        </div>
                    </div>

                    <div className="my-3">
                        <label className="input-group input-group-vertical input-group-lg">
                            <span>Picture</span>
                            <input type="text" name="toyPicture" placeholder="Your Toy Picture" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="my-3">
                        <label className="input-group input-group-vertical input-group-lg">
                            <span>Details</span>
                            <input type="text" name="details" placeholder="Your Toy Details" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="grid justify-center gap-5" >
                        <input  className="btn btn-primary btn-wide  my-3" type="submit" value="Update TOY" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;