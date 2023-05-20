import useTitle from "../../../hooks/useTitle";
import Banner from "./Banner";
import Brands from "./Brands";
import ConstactUS from "./ConstactUS";
import Gallery from "./Gallery";
import NewsLetter from "./NewsLetter";
import ShopByCategory from "./ShopByCategory";
import TopSellers from "./TopSellers";
import WhatCustomerSay from "./WhatCustomerSay";

const Home = () => {
useTitle('Home')
    return (
        <>
            <Banner></Banner>
            <Brands></Brands>
            <ShopByCategory></ShopByCategory>
            <TopSellers></TopSellers>
            <Gallery></Gallery>
            <ConstactUS></ConstactUS>
            <WhatCustomerSay></WhatCustomerSay>
            <NewsLetter></NewsLetter>
        </>

    );
};

export default Home;