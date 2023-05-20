import picture1 from '../../../assets/Gallery/Batman.jpg'
import picture2 from '../../../assets/Gallery/Captain America.jpg'
import picture3 from '../../../assets/Gallery/Hulk.jpg'
import picture5 from '../../../assets/Gallery/SpiderMan2.jpg'
import picture6 from '../../../assets/Gallery/Superheroes.jpg'
import picture7 from '../../../assets/Gallery/Superman.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const Gallery = () => {
    useEffect(()=>{
        Aos.init()
        Aos.refresh()
    },[])
    return (
        <div>
            <h1 className='text-5xl font-bold text-center mt-14'>Trending Products</h1>
            <p className='text-center text-gray-500 my-7 '>See Our recently added toys here </p>
            <div className="grid gap-4" >
                <div>
                    <img className="h-[600px] w-full  rounded-lg" src={picture1} alt="" />
                </div>
                <div className="grid grid-cols-5 gap-4">
                    <div data-aos="fade-right" >
                        <img className="h-auto max-w-full rounded-lg" src={picture2} alt="" />
                    </div>
                    <div data-aos="fade-up" >
                        <img className="h-auto max-w-full rounded-lg" src={picture3} alt="" />
                    </div >
                    <div data-aos="fade-up" >
                        <img className="h-auto max-w-full rounded-lg" src={picture5} alt="" />
                    </div >
                    <div data-aos="fade-up" >
                        <img className="h-auto max-w-full rounded-lg" src={picture6} alt="" />
                    </div>
                    <div data-aos="fade-left" >
                        <img className="h-auto max-w-full rounded-lg" src={picture7} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;