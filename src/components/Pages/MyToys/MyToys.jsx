import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link, } from "react-router-dom";

const MyToys = () => {
    const { user, setLoading } = useContext(AuthContext);
    const email = user.email;
    const [myToys, setMyToys] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [email, myToys])

// const handleToyUpdate = id => {
//     fetch(`http://localhost:5000/myToys/${id}`,{
//         method : 'PUT',
//         headers :{
//             'content-type': 'application/json'
//         },
//         body : JSON.stringify(myToys)
//     })

// }



    const handleToyDelete = id => {
        console.log(id);
        fetch(`http://localhost:5000/myToys/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                console.log(data);
            });
    }

    return (
        <div>
            <div className="my-7">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Rating</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
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
                            <td>{toy?.quantity}</td>
                            {/* Rating  */}
                            <td>{toy?.rating}</td>
                            {/* Button  Update */}
                            <td><Link to={`/updateToy/${toy._id}`}   className="btn btn-ghost">Update</Link></td>
                            {/* Button Delete  */}
                            <td><button onClick={() => handleToyDelete(toy._id)} className="btn btn-ghost">Delete</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            {myToys.length}
           
        </div>
    );
};

export default MyToys;