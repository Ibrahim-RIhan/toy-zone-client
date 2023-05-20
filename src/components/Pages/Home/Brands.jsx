import Marquee from "react-fast-marquee";
import picture1 from '../../../assets/brands/Hasbro.png'
import picture2 from '../../../assets/brands/lEGO.png'
import picture3 from '../../../assets/brands/toytus.jpeg'
import picture4 from '../../../assets/brands/Toys.jpg'

const Brands = () => {
    return (
        <div className="my-20">
            <h1 className="text-5xl text-center font-bold mb-14">Our Top Brands</h1>
            <Marquee
            speed={300}
            >
                <img className="w-40 mx-20" src={picture1} alt="" />
                <img className="w-40 mx-20" src={picture2} alt="" />
                <img className="w-40 mx-20" src={picture3} alt="" />
                <img className="w-40 mx-20" src={picture4} alt="" />
            </Marquee>
        </div>
    );
};

export default Brands;
