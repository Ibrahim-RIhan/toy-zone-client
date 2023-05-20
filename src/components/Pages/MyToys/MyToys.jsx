import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link, } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const MyToys = () => {
    useTitle('My Toys')
    const { user, setLoading } = useContext(AuthContext);
    const email = user.email;
    const [myToys, setMyToys] = useState([]);
    const [sortOrder, setSortOrder] = useState("");
    useEffect(() => {
        fetch(`https://toy-zone-server.vercel.app/myToys/${email}?sortOrder=${sortOrder}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setMyToys(data)
            })
    }, [email, myToys, setLoading, sortOrder])



    const handleToyDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-zone-server.vercel.app/myToys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then((data) => {
                        if (data.acknowledged) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'succes'
                            )}
                    });
            }
        })

    }

    return (
        <div>
            <div className="my-7">
                <div className="flex justify-end my-5">
                <select className="select select-bordered w-full max-w-xs" onChange={(e) => setSortOrder(e.target.value)}>
                    <option disabled selected>Sort by Price</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
                </div>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th className="text-center">Available Quantity</th>
                            <th>Rating</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {myToys.map(toy => <tr
                            key={toy._id}
                        >
                            {/* Image  */}
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={toy.toyPicture} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            {/* Toy Name  */}
                            <td>{toy?.toyName}</td>
                            {/* Toy Category  */}
                            <td>{toy?.category}</td>
                            {/* Toy Price  */}
                            <td>{toy?.price}</td>
                            {/* Toy Quantity  */}
                            <td className="text-center">{toy?.quantity}</td>
                            {/* Rating  */}
                            <td>{toy?.rating}</td>
                            {/* Button  Update */}
                            <td><Link to={`/updateToy/${toy._id}`} className="btn btn-waning">Update</Link></td>
                            {/* Button Delete  */}
                            <td><button onClick={() => handleToyDelete(toy._id)} className="btn btn-info">Delete</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;