import Rating from 'react-rating';
import seller1 from '../../../assets/topsellers/seller1.jpg'
import seller2 from '../../../assets/topsellers/seller2.jpg'
import seller3 from '../../../assets/topsellers/seller3.jpg'
import { FaRegStar, FaStar } from 'react-icons/fa';

const TopSellers = () => {
    return (
        <div className="my-20 text-center">
            <h1 className="text-5xl font-bold mb-10">Top rated seller</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-center justify-items-center items-center">
                <div className="w-full hover:transition-all hover:border-orange-500  max-w-sm py-5 bg-white border border-gray-200 rounded-lg shadow ">
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-28 h-28  mb-3 rounded-full shadow-lg" src={seller1} alt="Bonnie image" />
                        <Rating
                            placeholderRating={4.8}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            readonly
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        >
                        </Rating>
                        <h5 className="mb-1 text-xl font-medium text-gray-900">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 ">Transformer Toy Seller</span>
                        <button className='btn btn-outline btn-primary mt-3'>Message</button>
                    </div>
                </div>
                <div className="w-full  hover:transition-all hover:border-orange-500 max-w-sm py-5 bg-white border border-gray-200 rounded-lg shadow ">
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-28 h-28   mb-3 rounded-full shadow-lg" src={seller3} alt="Bonnie image" />
                        <Rating
                            placeholderRating={5.0}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            readonly
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        >
                        </Rating>
                        <h5 className="mb-1 text-xl font-medium text-gray-900">Haward Ankon</h5>
                        <span className="text-sm text-gray-500 ">Verified Toy Seller</span>
                        <button className='btn btn-outline btn-primary mt-3'>Message</button>
                    </div>
                </div>
                <div className="w-full hover:transition-all hover:border-orange-500 max-w-sm py-5 bg-white border border-gray-200 rounded-lg shadow ">
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-28 h-28  mb-3 rounded-full shadow-lg" src={seller2} alt="Bonnie image" />
                        <Rating
                            placeholderRating={4.9}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            readonly
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        >
                        </Rating>
                        <h5 className="mb-1 text-xl font-medium text-gray-900">Sheikh Ali</h5>
                        <span className="text-sm text-gray-500 ">Starwars Toy Seller</span>
                        <button className='btn btn-outline btn-primary mt-3'>Message</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopSellers;