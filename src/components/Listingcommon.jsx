


import React, { useState, useEffect } from 'react';
import JobService from "../service/PostJob.service";
import { useNavigate } from 'react-router-dom';
import '../styles/listing.css';

const UserJobListing = () => {
    const [jobs, setJobs] = useState([]);
    console.log(jobs);
    const navigate = useNavigate();

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = () => {
        JobService.getAll()
            .then((response) => {
                setJobs(response.data);  // Update the jobs list on successful API response
            })
            .catch((error) => {
                console.error('Error fetching jobs:', error);  // Log the error if the fetch fails
            });
    };

    // const handleApplyJob = (jobId) => {
    //     // Redirect to the Apply page when user clicks on Apply button
    //     navigate(`/apply/${jobId}`);
    // };

    const handleClick = () => {
        navigate('/admin/post'); // Navigate to the '/admin/post' route
    };

    return (
        <div className="page">
            <div className="header">
                <h2 className="heading">Posted Jobs</h2>
            </div>
            <button onClick={handleClick} className="post-job-btn">Post Job</button>
            <div className="job-list">
                {jobs.map((job) => (
                    <div className="job-card" key={job.id}>
                        <div className="job-card-header">
                            <h3>{job.jobTitle}</h3>
                            <span className="company-name">{job.companyName}</span>
                        </div>
                        <div className="job-card-body">
                            <p><strong>Location:</strong> {job.jobLocation}</p>
                            <p><strong>Salary:</strong> {job.salary}</p>
                            <p><strong>Job Description:</strong> {job.jobDescription}</p>
                            <p><strong>Experience Required:</strong> {job.experienceRequired}</p>
                            <p><strong>Qualifications:</strong> {job.qualifications}</p>
                            <p><strong>Skills:</strong> {job.skills}</p>
                            <p><strong>Posted Date:</strong> {job.postedDate}</p>
                            <p><strong>Application Deadline:</strong> {job.applicationDeadline}</p>
                            <p><strong>How to Apply:</strong> {job.howtoapply}</p>
                        </div>
                        {/* <div className="job-card-footer">
                            <button className="apply-button" onClick={() => handleApplyJob(job.id)}>Apply Now</button>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserJobListing;

