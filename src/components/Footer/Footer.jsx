import { Link } from "react-router-dom";
import { FaGoogle, FaYoutube, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="fixed bottom-0 border-t-2 rounded-lg border-sky-400 bg-gradient-to-r from-blue-900 via-blue-700 to-pink-300  footer p-10 text-base-100">
            <div className="font-medium text-sm">
                <span className="footer-title">Team Heros__</span>
                <Link to='https://dev-prodip-kumar-shil.web.app/' className="link link-hover">Prodip</Link>
                <Link to='https://portfolio-5c3g.vercel.app/' className="link link-hover">Naime</Link>
                <Link to='https://jobayarportfolio.netlify.app/' className="link link-hover">Jobayer</Link>
                <Link to='https://hasiburhossainsanto.netlify.app/' className="link link-hover">Santo</Link>
                <Link to='https://sensational-tapioca-c29036.netlify.app' className="link link-hover">Samiha</Link>
            </div>
            <div className="font-medium text-sm">
                <span className="footer-title">Company</span>
                <a className="link link-hover">About </a>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Blog</a>
            </div>
            <div>
                <span className="footer-title">Contact With</span>
                <div className="flex space-x-5">
                    <p className="text-lg"><FaGoogle /></p>
                    <p className="text-lg"><FaYoutube /></p>
                    <p className="text-lg"><FaGithub /></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;