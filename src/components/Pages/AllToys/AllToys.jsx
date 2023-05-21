import  { useEffect, useState } from "react";
import Toy from "./Toy";
import useTitle from "../../../hooks/useTitle";

const AllToys = () => {
  useTitle('All Toys');
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState(" ");
  const [displayLimit, setDisplayLimit] = useState(20);
  const [showMoreClicked, setShowMoreClicked] = useState(false);

  useEffect(() => {
    fetch("https://toy-zone-server.vercel.app/allToys")
      .then(res => res.json())
      .then(data => setAllToys(data));
  }, []);

  useEffect(()=> {
    fetch(`https://toy-zone-server.vercel.app/toySearch/${searchText}`)
    .then(res => res.json())
    .then(data => setAllToys(data));
  }, [searchText])

  const handleShowMore = () => {
    setDisplayLimit(allToys.length);
    setShowMoreClicked(true);
  };

  return (
    <div>
      <h1 className="text-center text-red-400 font-bold text-5xl my-7">
        Our All Toys Collection
      </h1>
      <div className="text-center flex justify-center items-center gap-3">
        <input
          onChange={e => {
            setSearchText(e.target.value);
          }}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-warning w-full max-w-xs"
        />
        <button className="btn btn-active btn-accent">Search</button>
      </div>
      <div className="overflow-x-auto my-7 w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Seller</th>
              <th>Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {showMoreClicked ? (
              allToys.map(toy => <Toy key={toy._id} toy={toy} />)
            ) : (
              allToys.slice(0, displayLimit).map(toy => (
                <Toy key={toy._id} toy={toy}></Toy>
              ))
            )}
          </tbody>
        </table>
      </div >
      <div className="text-center">
      {!showMoreClicked && displayLimit < allToys.length && (
        <button onClick={handleShowMore} className="btn btn-warning">
          Show More
        </button>
      )}
      </div>
    </div>
  );
};

export default AllToys;
