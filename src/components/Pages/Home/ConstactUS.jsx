import deliveryMan from '../../../assets/Contact us/9689964_46379-removebg-preview.png'
import call from '../../../assets/Contact us/call-removebg-preview.png'
import verified from '../../../assets/Contact us/1036654_6696-removebg-preview.png'

const ConstactUS = () => {
    return (
        <div>
            <div className="md:flex justify-evenly items-center gap-8 justify-items-center bg-[#151515] py-16 my-16 rounded-lg text-white">
            <div className='flex flex-col md:flex-row justify-center  items-center gap-4 '>
                <img className='w-11'  src={deliveryMan} alt="" />
                <div className='text-center'>
                    <p className='text-sm'>Free Delivery all over the World</p>
                    <h6 className='font-bold text-lg'>Fastest Delivery Garanteed </h6>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center my-5 items-center gap-4 '>
                <img  className='w-11' src={call}  alt="" />
                <div className='text-center'>
                    <p className='text-sm'>Contact Us !</p>
                    <h6 className='font-bold text-lg'>+55698552-55</h6>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-4 '>
                <img className='w-20' src={verified}  alt="" />
                <div className='text-center'>
                    <p className='text-sm'>Verified Website</p>
                    <h6 className='font-bold text-lg'>Thousand of Seller and <br /> Regular customers</h6>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ConstactUS;