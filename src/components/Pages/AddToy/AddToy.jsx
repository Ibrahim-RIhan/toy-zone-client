

const AddToy = () => {
    const handleAddToy =event =>{
        event.preventDefault();
    }
    return (

        <div>

                <h1 className="text-center text-5xl font-bold">Add a Toy </h1>
            <div style={{ height: '100vh' }} className=" flex justify-center items-center">
                <form onSubmit={handleAddToy} className=" shadow-2xl rounded-xl p-10">
                    <div className="flex gap-5">
                        <div>
                            <label className="input-group input-group-vertical">
                                <span>Toy Name</span>
                                <input type="text" placeholder="Your Toy Name" className="input input-bordered" />
                            </label>
                        </div>
                        <div>

                            <label className="input-group input-group-vertical">
                                <span>Picture</span>
                                <input type="text" placeholder="Your Toy Picture" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div className="flex my-5 gap-5  ">
                        <div>

                            <label className="input-group input-group-vertical">
                                <span>Seller Name</span>
                                <input type="text" placeholder="Seller Name" className="input input-bordered" />
                            </label>
                        </div>
                        <div>

                            <label className="input-group input-group-vertical">
                                <span>Seller Email</span>
                                <input type="text" placeholder="Seller Email" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-5 my-5  ">
                        <div>

                            <label className="input-group input-group-vertical">
                                <span>Quantity</span>
                                <input type="text" placeholder="Quantity" className="input input-bordered" />
                            </label>
                        </div>
                        <div>

                            <label className="input-group input-group-vertical">
                                <span>Rating</span>
                                <input type="text" placeholder="Toy Rating" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-5  my-5 ">
                        <div>

                            <label className="input-group input-group-vertical">
                                <span>Price</span>
                                <input type="text" placeholder="Your Toy Price" className="input input-bordered" />
                            </label>
                        </div>
                        <div>

                            <label className="input-group input-group-vertical">
                                <span>Details</span>
                                <input type="text" placeholder="Your Toy Details" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div className="grid justify-center" >
                        <div >
                            <div className="input-group input-group-vertical">
                            <span>Pick a Category</span>
                                <select className="select select-bordered">
                                    <option>Marvel</option>
                                    <option>DC Comics</option>
                                    <option>StarWars</option>
                                </select>
                            </div>
                        </div>
                        <input className="btn btn-primary btn-wide  my-3" type="submit" value="Add Toy" />
                    </div>

                </form>
            </div>

        </div>

    );
};

export default AddToy;