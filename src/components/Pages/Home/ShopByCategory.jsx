import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    const [activeTab, setActiveTab] = useState('Marvel')
    const [shopToys, setShopToys] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/shopToys/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setShopToys(data);
                console.log(data);
            })
    }, [activeTab])

    return (
        <div className='my-14'>
            <h1 className='text-center font-bold text-5xl'>Shop by Category </h1>
            <div className='text-center my-7'>
                <Tabs>
                    <TabList>
                        <Tab onClick={() => setActiveTab("Marvel")}>Marvel</Tab>
                        <Tab onClick={() => setActiveTab("Star Wars")}>StarWars</Tab>
                        <Tab onClick={() => setActiveTab("DC Comics")}>DC Comics</Tab>
                    </TabList>
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                    {
                        shopToys.map(shopToy =>
                            <div 
                            key={shopToy._id}
                            className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{shopToy.toyName}</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">View Details</button>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;