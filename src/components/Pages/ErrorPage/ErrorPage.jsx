import { Link } from 'react-router-dom';
import errorPic from '../../../assets/Error Page/Error Page.jpg'
import useTitle from '../../../hooks/useTitle';

const ErrorPage = () => {
    useTitle('Error')
    return (
        <div className='text-center'>
            <div style={{ height: '100vh' }} className=" flex justify-center items-center">
                <img className='w-1/4 ' src={errorPic} alt="" />
            </div>
            <Link to='/' className='btn btn-error'>Back to Homepage</Link>
        </div>
    );
};

export default ErrorPage;