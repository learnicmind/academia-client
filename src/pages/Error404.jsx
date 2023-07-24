import { Link } from "react-router-dom";


const Error404 = () => {
    return (
        <div className="bg-[#32cfbd] h-screen">
            <div className="md:w-9/12 mx-auto ">
                <div className="flex items-center justify-center">
                    <img className="w-full md:w-[550px]" src="https://cdnl.iconscout.com/lottie/premium/thumb/page-not-found-3959255-3299954.gif" alt="" />
                </div>
                <div className="flex items-center justify-center mt-4">
                    <Link to='/'>
                        <button className="btn border-0 px-2 py-1  font-semibold text-white bg-[#14b8a6] rounded-lg shadow-lg hover:bg-[#2f5752]  cursor-pointer mt-2">Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error404;