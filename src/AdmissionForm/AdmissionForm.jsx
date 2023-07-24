import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const AdmissionForm = () => {
    const college = useLoaderData()
    console.log(college);
    const { _id, collegName, admissionDates } = college;
    return (
        <div className='relative'>
            <img className='w-72 absolute hidden md:block top-[252px] right-10' src="https://i.ibb.co/qFSD3V0/hat.png" alt="" />
            <img className='w-[450px] absolute hidden md:block top-[660px] -left-40' src="https://i.ibb.co/qFSD3V0/hat.png" alt="" />
            <div className='py-28 md:pt-36 md:w-10/12 md:mx-auto mx-5'>
            <div className='space-y-5'>
                <Link to='/admission' className="text-2xl cursor-pointer cursive-font hover:underline flex items-center gap-2">
                    <FaArrowLeft className='text-xl' />
                    Go Back
                </Link>
                <h1 className="text-4xl text-[#14b8a6]">Fillup the registration form -</h1>
            </div>

            <div className='pt-8'>
                <div className='text-center mb-5 md:mb-8'>
                    <h1 className="text-4xl">{collegName}</h1>
                    <h1 className="text-xl font-sans pb-3">Apply by: {admissionDates}</h1>
                </div>
                <form>
                    <div className='grid md:grid-cols-2 gap-3 md:gap-6 w-10/12 mx-auto'>
                        <div className='grid gap-2 text-lg'>
                            <label>Candidate Name</label>
                            <input className='text-sm border shadow-md border-slate-400 rounded-md px-3 py-3 focus:outline-none focus:border-orange-200 focus:shadow-orange-200 focus:ring-1 focus:ring-orange-200' type="text" name="name" placeholder='Candidate Name' />
                        </div>

                        <div className='grid gap-2 text-lg'>
                            <label>Candidate Email</label>
                            <input className='text-sm border shadow-md border-slate-400 rounded-md px-3 py-3 focus:outline-none focus:border-orange-200 focus:shadow-orange-200 focus:ring-1 focus:ring-orange-200' type="email" name="email" placeholder='Candidate Email' />
                        </div>

                        <div className='grid gap-2 text-lg'>
                            <label>Date of Birth</label>
                            <input className='text-sm border shadow-md border-slate-400 rounded-md px-3 py-3 focus:outline-none focus:border-orange-200 focus:shadow-orange-200 focus:ring-1 focus:ring-orange-200' type="date" name="DOB" placeholder='DOB' />
                        </div>

                        <div className='grid gap-2 text-lg'>
                            <label>Subject</label>
                            <input className='text-sm border shadow-md border-slate-400 rounded-md px-3 py-3 focus:outline-none focus:border-orange-200 focus:shadow-orange-200 focus:ring-1 focus:ring-orange-200' type="text" name="subject" placeholder='Subject' />
                        </div>

                        <div className='grid gap-2 text-lg'>
                            <label>SSC GPA</label>
                            <input className='text-sm border shadow-md border-slate-400 rounded-md px-3 py-3 focus:outline-none focus:border-orange-200 focus:shadow-orange-200 focus:ring-1 focus:ring-orange-200' type="text" name="gpa" placeholder='e.g. 4.75' />
                        </div>

                        <div className='grid gap-2 text-lg'>
                            <label>Candidate Phone number</label>
                            <input className='text-sm border shadow-md border-slate-400 rounded-md px-3 py-3 focus:outline-none focus:border-orange-200 focus:shadow-orange-200 focus:ring-1 focus:ring-orange-200' type="number" name="phone" placeholder='Phone number' />
                        </div>

                        <div className='grid gap-2 text-lg'>
                            <label>Address</label>
                            <input className='text-sm border shadow-md border-slate-400 rounded-md px-3 py-3 focus:outline-none focus:border-orange-200 focus:shadow-orange-200 focus:ring-1 focus:ring-orange-200' type="text" name="address" placeholder='Address' />
                        </div>

                        <div className='grid gap-2 text-lg'>
                            <label>Photo</label>
                            <input className='text-sm border shadow-md border-slate-400 rounded-md px-3 py-3 focus:outline-none focus:border-orange-200 focus:shadow-orange-200 focus:ring-1 focus:ring-orange-200' type="text" name="photo" placeholder='Direct Link from imgbb.com' />
                        </div>
                    </div>
                    <p className="text-sm text-center py-5 text-slate-500"><span className='text-orange-600'>* </span>Please upload your photo to <Link className='text-orange-600 hover:underline' to='https://imgbb.com/'>imgbb.com</Link> give us the direct link of your image.</p>
                    <div className='flex justify-center'>
                        <button className='btn border-0 px-2 py-1  font-semibold text-white bg-[#14b8a6] rounded-lg shadow-lg hover:bg-[#2f5752]  cursor-pointer mt-2' style={{transition: '.4s'}}>Submit Application</button>
                    </div>
                    
                </form>
            </div>

        </div>
        </div>
    );
};

export default AdmissionForm;