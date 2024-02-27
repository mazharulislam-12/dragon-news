import React, { useEffect, useState } from 'react';
import Header from '../shared/Header/Header';
import Navbar from '../shared/Navbar/Navbar';

const Career = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('/career.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>

            <Header></Header>
            <Navbar></Navbar>

            <h2 className='text-center'> Online jon post </h2>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto'>
                {jobs.map((job) => (
                    <div key={job.id} className=''>

                        <h4>{job.jobName}</h4>
                        <h5>Job title: {job.jobTitle} </h5>
                        <p>company Name {job.companyName} </p>
                        <button className='btn text-white hover:text-black bg-[#403F3F]'>Apply Now</button>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Career;