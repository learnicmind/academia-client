import { Link } from "react-router-dom";
import useColleges from "../../hooks/useColleges";


const Colleges = () => {

    const [colleges] = useColleges();

    return (
        <div>
            <div className="md:w-11/12  mx-auto rounded-xl  overflow-hidden ">
                <h2 className='text-4xl text-[#32cfbd] font-bold py-4 ml-2 md:ml-0 text-center'>All Colleges</h2>
                <p className='px-2 md:px-0 mb-4 font-semibold text-justify ml-2 md:ml-0'>Welcome to the "A c a d e m i a", where knowledge meets artistry. Immerse yourself in a captivating showcase of academic excellence as we proudly present a curated collection of university graduate students from around the world. In this thoughtfully crafted gallery, each image encapsulates the diverse experiences and accomplishments of these remarkable individuals, adorned with the emblems of their respective institutions.</p>
                <div className=" grid md:grid-cols-3 gap-4">
                    {
                        colleges.map(college => {
                            return <div key={college._id} className="border border-[#14b8a6] bg-[#d6f7f1] rounded-lg p-4 shadow-md">

                                <img
                                    className="h-42 w-full object-cover rounded-lg"
                                    src={college.collegeImage}
                                    alt="College"
                                />

                                <div className="p-4">
                                    <h2 className="text-xl font-bold mb-2">College Name: {college.collegeName}</h2>
                                    <p className="text-gray-600 mb-4 font-bold">Admission: {college.admissionDates}</p>

                                    <div>
                                        <h3 className="text-lg mb-2 font-bold">Events: {college.events.length}</h3>
                                    </div>

                                    <div>
                                        <h3 className="text-lg  font-semibold mb-2"><span className="font-bold">Research History:</span> {college.researchHistory}</h3>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="text-lg  font-bold mb-2">Sports: {college.sports.length}</h3>
                                            <p><span className=" font-bold ">Ratings:</span> <span className=" font-bold ">{college.collegeRatings}</span></p>
                                        </div>
                                        <div>
                                            <Link to={`/colleges/${college._id}`}>
                                            <p
                                                className="btn border-0 px-2 py-1  font-semibold text-white bg-[#14b8a6] rounded-lg shadow-lg hover:bg-[#2f5752]  cursor-pointer mt-2"
                                            >
                                                Details
                                            </p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Colleges;