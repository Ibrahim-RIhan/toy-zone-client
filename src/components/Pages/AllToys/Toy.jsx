

const Toy = ({ toy }) => {
    const { toyName, _id, toyPicture, sellerName, sellerEmail, price, details, category, quantity, rating } = toy
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
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default Toy;