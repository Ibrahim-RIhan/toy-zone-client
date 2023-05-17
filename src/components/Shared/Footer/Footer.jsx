import logo from '../../../assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer p-10 text-base-content">
            <div>
                <img className='w-48' src={logo} alt="" />
                <p>Toy Zone<br />Uncommon Toys for your kids</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Blogs</a>
                <a className="link link-hover">MarketPlace</a>
                <a className="link link-hover">Login</a>
             
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
             
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;