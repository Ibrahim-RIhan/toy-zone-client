import { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Tab, Tabs, TabList, } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    const [activeTab, setActiveTab] = useState('Marvel')
    const [shopToys, setShopToys] = useState([]);
    useEffect(() => {
        fetch(`https://toy-zone-server.vercel.app/shopToys/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setShopToys(data);
                console.log(data);
            })
    }, [activeTab])

    return (
        <div className='my-14'>
            <h1 className='text-center font-bold text-5xl  border-x-2'>Shop by Category </h1>
            <div className='text-center my-7'>
                <Tabs >
                    <TabList className="flex gap-5 py-3 justify-center items-center">
                        <Tab className="btn btn-outline btn-accent" onClick={() => setActiveTab("Marvel")}>Marvel</Tab>
                        <Tab className="btn btn-outline btn-info" onClick={() => setActiveTab("Transformers")}>Transformer</Tab>
                        <Tab className="btn btn-outline btn-success" onClick={() => setActiveTab("DC Comics")}>DC Comics</Tab>
                    </TabList>
                    <div className='grid justify-center items-center grid-cols-1 justify-items-center md:grid-cols-3 '>
                        {
                            shopToys.map(shopToy =>

                                <div

                                    key={shopToy._id}
                                    className="w-full max-w-sm   border-gray-200 rounded-lg shadow-xl hover:outline hover:outline-2  hover:outline-offset-2 ">
                                    
                                        <img className="p-8  rounded-2xl" src={shopToy?.toyPicture} alt="product image" />
                                   
                                    <div className="px-5 pb-5">
                                        <a href="#">
                                            <h5 className="text-xl font-semibold tracking-tight text-gray-900">{shopToy.toyName}</h5>
                                        </a>
                                        <div className="flex items-center mt-2.5 mb-5">
                                            <Rating

                                                placeholderRating={shopToy.rating}
                                                emptySymbol={<FaRegStar></FaRegStar>}
                                                readonly
                                                placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                                fullSymbol={<FaStar></FaStar>}
                                            >
                                            </Rating>

                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-3xl font-bold text-gray-900">{shopToy?.price}</span>
                                            <Link to={`/viewDetails/${shopToy._id}`} className=" transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 animate-bounce  duration-30
                                            text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">View Details</Link>
                                        </div>
                                    </div>







                                </div>
                                // </div>

                            )
                        }
                    </div >
                </Tabs >
            </div >
        </div >
    );
};

export default ShopByCategory;