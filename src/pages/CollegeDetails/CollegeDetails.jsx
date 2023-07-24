import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CollegeDetails = () => {

    const college = useLoaderData();

    const { _id, collegeName, collegeImage, collegeDetails, admissionDates, events, sports, researchHistory, collegeRatings } = college;

    return (
        <div className='md:w-11/12 md:mx-auto text-slate-700 mt-4 py-4 px-2 '>
            <h2 className='text-4xl text-slate-700 font-bold pb-4 ml-2 md:ml-0 text-center'>College Details</h2>
            <p className='px-2 md:px-0 mb-4 font-semibold text-justify ml-2 md:ml-0'>Discover the limitless world of knowledge at A c a d e m i a. Unleash your potential with our cutting-edge courses and engage with a vibrant community of learners and educators. Embrace curiosity, spark creativity, and embark on a journey of intellectual growth. Welcome to A c a d e m i a, where learning knows no boundaries and possibilities are endless. Join us today and shape a brighter future through the power of education.</p>
            <div className='grid md:grid-cols-2 justify-between items-center gap-12'>

                <div className='w-full'>
                    <h1 className='text-3xl font-bold  text-center pb-3'>{collegeName}</h1>
                    <img className='w-full rounded-lg' src={collegeImage} alt="" />
                </div>


                <div className='w-full'>
                    <p className='text-lg font-bold'>Admission Date: <span className='font-semibold'>{admissionDates}</span></p>
                    <p className=' font-bold'>Research History: <span className='font-semibold'>{researchHistory}</span></p>
                    <p className=' text-justify font-bold'>College Details: <span className='font-semibold'>{collegeDetails}</span></p>
                    <p className='text-lg font-bold'>Ratings: <span className='font-semibold'>{collegeRatings}</span></p>
                    <div className='flex gap-20 mt-2'>
                        <div>
                            <h2 className='text-xl font-bold'>Events: </h2>
                            <ul>
                                {events.map((evnt) => (
                                    <li className='font-semibold'> {evnt}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className='text-xl font-bold'>Sports: </h2>
                            <ul>
                                {sports.map((sport) => (
                                    <li className='font-semibold'> {sport}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className=''>
                        <Link to="/admission">
                            <p className='btn border-0 px-2 py-1  font-semibold text-white bg-[#14b8a6] rounded-lg shadow-lg hover:bg-[#2f5752]  cursor-pointer mt-2'>Apply Now</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;