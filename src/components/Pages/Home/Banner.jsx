import banner from '../../../assets/LandingPage.png'

const Banner = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row border-dashed border-2  bg-blue-300 p-5 rounded-xl justify-center items-center '>
        
            <div className='space-y-5'>
                <h1 className='text-7xl font-semibold '>Best Toy Store in Town!</h1>
                <p className='text-3xl '>Explore our various types of <br /> Superhero Toys Here...</p>
                <button className='btn btn-error'>Explore NOW</button>
            </div>
            <img src={banner} alt="" />
        </div>
    );
};

export default Banner;