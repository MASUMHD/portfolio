import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import logo from "../assets/kevinRushLogo.png";
import { FaSquareGithub, FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6 ml-0 lg:ml-14 mr-0 lg:mr-14">
            <div className="flex items-center flex-shrink-0">
                <img className="mx-2 w-20" src='https://static.vecteezy.com/system/resources/previews/012/159/478/non_2x/initial-letter-mr-logo-free-template-free-vector.jpg' alt="" />. 
                
            </div>
            <div className="m-8 flex items-center gap-4 text-2xl lg:text-3xl ml-0 lg:ml-10 mr-0 lg:mr-10">
            <FaLinkedin />
            <FaSquareGithub />
            <FaSquareInstagram />
            <FaFacebookSquare />
            <FaSquareXTwitter />
            </div>
        </nav>
    );
};

export default Navbar;