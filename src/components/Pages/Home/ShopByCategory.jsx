import { useContext, useEffect, useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Audio } from "react-loader-spinner";

const ShopByCategory = () => {
  const [activeTab, setActiveTab] = useState("Marvel");
  const [isLoading, setIsLoading] = useState(true);
  const [shopToys, setShopToys] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://toy-zone-server.vercel.app/shopToys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setShopToys(data);
        setIsLoading(false);
      });
  }, [activeTab]);

  const handleViewDetails = () => {
    if (!user) {
      Swal.fire("You have to login first");
    }
  };

  return (
    <div className="my-14">
      <h1 className="text-center font-bold text-5xl  border-x-2">
        Shop by Category{" "}
      </h1>
      <div className="text-center my-7">
        <Tabs>
          <TabList className="flex gap-5 py-3 justify-center justify-items-center items-center">
            <Tab
              className="btn btn-outline btn-accent"
              onClick={() => setActiveTab("Marvel")}
            >
              Marvel
            </Tab>
            <Tab
              className="btn btn-outline btn-info"
              onClick={() => setActiveTab("Transformers")}
            >
              Transformer
            </Tab>
            <Tab
              className="btn btn-outline btn-success"
              onClick={() => setActiveTab("DC Comics")}
            >
              DC Comics
            </Tab>
          </TabList>
          {isLoading ? (
              <div className="flex justify-center items-center">
                <Audio
                  height="80"
                  width="80"
                  radius="9"
                  color="green"
                  ariaLabel="loading"
                  wrapperStyle
                  wrapperClass
                />
              </div>
            ) : 
          (
            <div className="grid justify-center items-center grid-cols-1 justify-items-center md:grid-cols-3 ">
           {shopToys.map((shopToy) => (
                <div
                  key={shopToy._id}
                  className="w-full max-w-sm  border-gray-200 rounded-lg shadow-xl hover:outline hover:outline-2  hover:outline-offset-2 "
                >
                  <img
                    className="p-8 h-72 mx-auto  rounded-2xl"
                    src={shopToy?.toyPicture}
                    alt="product image"
                  />

                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                        {shopToy.toyName}
                      </h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                      <Rating
                        placeholderRating={shopToy.rating}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        readonly
                        placeholderSymbol={
                          <FaStar className="text-warning"></FaStar>
                        }
                        fullSymbol={<FaStar></FaStar>}
                      ></Rating>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900">
                      $  {shopToy?.price}
                      </span>
                      {user ? (
                        <Link
                          to={`/viewDetails/${shopToy._id}`}
                          onClick={handleViewDetails}
                          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 animate-bounce duration-30 btn btn-active focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                        >
                          View Details
                        </Link>
                      ) : (
                        <button
                          onClick={handleViewDetails}
                          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 animate-bounce duration-30 btn btn-active focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                        >
                          View Details
                        </button>
                      )}
                    </div>
                  </div>
                </div>
          ))}
          </div>//gg
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
