
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Toy = ({ toy }) => {
    // eslint-disable-next-line react/prop-types
    const { toyName, _id, sellerName, price, category, quantity, } = toy
   

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
                <Link  to={`/allToys/${_id}`}  className="btn btn-ghost btn-xs">Details </Link>
            </th>
 


        </tr>

    );
};

export default Toy;