

// eslint-disable-next-line react/prop-types
const Toy = ({ toy }) => {
    // eslint-disable-next-line react/prop-types
    const { toyName, _id,  sellerName,  price,  category, quantity, rating } = toy
    const handleViewDetails = id =>{
       
            fetch(`http://localhost:5000/allToys/${id}`)
                .then(res => res.json())
                .then(data => console.log(data))
      
    }
    return (
        <tr>
            <td>
                <h5>{toyName}</h5>
            </td>
            <td>
                <h5>{sellerName}</h5>
            </td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>

            <th>
                <button onClick={()=>handleViewDetails(_id)} className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default Toy;