import banner from '../../../assets/LandingPage.png'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const Banner = () => {
   
        useEffect(() => {
            Aos.init()
            Aos.refresh()
        }, [])
        return (
            <div data-aos-delay="300" data-aos="fade-left" data-aos-duration="4000" className='flex flex-col-reverse md:flex-row border-dashed border-2   bg-blue-300 p-5 rounded-xl justify-center items-center '>

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