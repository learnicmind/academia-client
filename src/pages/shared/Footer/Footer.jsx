import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-[#14b8a6] ">
            <div className="grid md:grid-cols-4 mt-4 py-8 px-4 md:px-0 gap-8 justify-between md:w-11/12 mx-auto">
                <div>
                    <img className="h-10 w-10" src="https://i.ibb.co/j68cCyB/49-491401-square-academic-cap-vector-graduation-cap-logo-png-removebg-preview.png" alt="" />
                    <p className="text-lg text-[#ccfbf1] mt-2">A c a d e m i a</p>
                    <p className="text-lg text-[#ccfbf1]">Providing Reliable Service since 1992</p>
                </div>
                <div>
                    <h2 className="text-xl text-black font-bold">Social Links</h2>
                    <p className="text-xl mt-2 text-[#ccfbf1] pl-10"><FaFacebook></FaFacebook></p>
                    <p className="text-xl text-[#ccfbf1] pt-2 pl-10"><FaTwitter></FaTwitter></p>
                    <p className="text-xl text-[#ccfbf1] pt-2 pl-10"><FaInstagram></FaInstagram></p>
                </div>
                <div>
                    <h2 className="text-xl text-black font-bold">Quick Links</h2>
                    <p className="text-lg mt-2 text-[#ccfbf1]"><Link to="/colleges">Colleges</Link></p>
                    <p className="text-lg text-[#ccfbf1]"><Link to="/admission">Admission</Link></p>
                    <p className="text-lg text-[#ccfbf1]"><Link to="/myCollege">My College</Link></p>
                </div>
                <div>
                    <h2 className="text-xl text-black font-bold">Newsletter</h2>
                    <input type="text" placeholder="Enter Your Email" className="input input-bordered input-accent w-full max-w-xs mt-2" />
                    <p
                        className="btn border-0 px-4 py-3  text-lg font-semibold text-[#ccfbf1] bg-[#32cfbd] rounded-lg shadow-lg hover:bg-[#47a59a] mt-2 cursor-pointer"
                    >
                        Subscribe
                    </p>
                </div>
            </div>
            <footer className="footer footer-center p-2 bg-[#65bdb2] text-base-content">
                <div className="">
                    <p className="text-lg  text-[#ccfbf1]">Copyright © 2023 - All right reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;