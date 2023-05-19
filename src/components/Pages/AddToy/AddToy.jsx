import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";



const AddToy = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        const toyPicture = form.toyPicture.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const details = form.details.value;
        const category = form.category.value;
        const newToy = { toyName, toyPicture, sellerName, sellerEmail, price, details, category, quantity, rating }
        console.log(newToy);
        fetch(`http://localhost:5000/allToys`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'Toy Added Successfully',
                        'success'
                    )
                    form.reset();
                }
            })
    }
    return (

        <div className="my-10">
            <h1 className="text-center text-5xl my-7 font-bold">Add a Toy </h1>
            <div style={{ height: '100vh' }} className=" flex justify-center items-center">
                <form onSubmit={handleAddToy} className=" shadow-2xl rounded-xl p-10">
                    <div className="flex gap-5">
                        <div>
                            <label className="input-group input-group-vertical">
                                <span>Toy Name</span>
                                <input type="text" name="toyName" placeholder="Your Toy Name" className="input input-bordered" />
                            </label>
                        </div>
                        <div>
                            <label className="input-group input-group-vertical">
                                <span>Price</span>
                                <input type="text" name="price" placeholder="Your Toy Price" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div className="flex my-3 gap-5  ">
                        <div>
                            <label className="input-group input-group-vertical">
                                <span>Seller Name</span>
                                <input type="text" defaultValue={user?.displayName} name="sellerName" placeholder="Seller Name" className="input input-bordered" />
                            </label>
                        </div>
                        <div>
                            <label className="input-group input-group-vertical">
                                <span>Seller Email</span>
                                <input type="text" name="sellerEmail" defaultValue={user?.email} placeholder="Seller Email" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-5 my-3  ">
                        <div>
                            <label className="input-group input-group-vertical ">
                                <span>Quantity</span>
                                <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered" />
                            </label>
                        </div>
                        <div>

                            <label className="input-group input-group-vertical">
                                <span>Rating</span>
                                <input type="text" name="rating" placeholder="Toy Rating" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div>
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
                    <div className="input-group input-group-vertical input-group-lg">
                        <span>Pick a Category</span>
                        <select name="category" className="select select-bordered">
                            <option>Marvel</option>
                            <option>DC Comics</option>
                            <option>StarWars</option>
                        </select>
                    </div>
                    <div className="grid justify-center gap-5" >
                        <input className="btn btn-primary btn-wide  my-3" type="submit" value="Add Toy" />
                    </div>
                </form>
            </div>
        </div>

    );
};


export default AddToy;