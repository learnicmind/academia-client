

const Banner = () => {
    return (
        <div className="relative h-96 overflow-hidden mt-4 md:w-11/12 mx-auto rounded-lg">
           
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#14b8a6] to-[#306e67]"></div>

           
            <div className="absolute  text-white text-center">
                <div className="grid md:grid-cols-2 items-center justify-between">
                    <div className="py-4 px-4 ">
                        <h1 className="text-4xl font-bold mb-4">Welcome to A c a d e m i a</h1>
                        <p className="text-lg text-left">Welcome to A c a d e m i a - your gateway to knowledge and growth! Our website is a dedicated platform for learners of all ages and backgrounds, aiming to foster a love for learning and nurture intellectual curiosity. </p>
                        <p
                            className="btn border-0 px-6 py-3  text-lg font-semibold text-white bg-[#14b8a6] rounded-lg shadow-lg hover:bg-[#2f5752]  cursor-pointer mt-2"
                        >
                            Learn More
                        </p>
                    </div>
                    <div>
                        <img className="w-full object-cover " src="https://i.ibb.co/4fhKFBj/honey-yanibel-minaya-cruz-la-ORt-JZaie-U-unsplash.jpg" alt="" />

                    </div>
                </div>
            </div>
           
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute w-24 h-24 bg-white rounded-full opacity-20 animate-pulse" style={{ top: '25%', left: '50%' }}></div>
                <div className="absolute w-32 h-32 bg-white rounded-full opacity-20 animate-pulse" style={{ top: '40%', left: '30%' }}></div>
                <div className="absolute w-16 h-16 bg-white rounded-full opacity-20 animate-pulse" style={{ top: '80%', left: '70%' }}></div>
            </div>
        </div>
    );
};

export default Banner;
