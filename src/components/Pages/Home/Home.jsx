import useTitle from "../../../hooks/useTitle";
import Banner from "./Banner";
import Gallery from "./Gallery";
import ShopByCategory from "./ShopByCategory";

const Home = () => {
useTitle('Home')
    return (
        <>
            <Banner></Banner>
            <ShopByCategory></ShopByCategory>
            <Gallery></Gallery>
        </>

    );
};

export default Home;