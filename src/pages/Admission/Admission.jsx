import React from 'react';
import { Link } from 'react-router-dom';
import useColleges from '../../hooks/useColleges';

const Admission = () => {
    const [colleges] = useColleges();
    console.log(colleges);

    return (
        <div className='md:w-11/12 md:mx-auto mx-5 pt-20 pb-20'>
            <div className='space-y-5'>

                <h1 className="text-5xl text-[#14b8a6] cursive-font">All College Informations</h1>
                <p className='font-semibold text-slate-700'>Choose any college to apply online -</p>
            </div>

            <div className='grid md:grid-cols-3 gap-5 mt-10'>
                {
                    colleges.map(college => <div key={college._id} className='rounded-full text-black py-3 flex justify-center bg-slate-300 shadow-lg hover:shadow-emerald-300 font-bold' style={{ transition: '.4s' }}>
                        <Link to={`/admission/${college._id}`}>{college.collegeName}</Link>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Admission;