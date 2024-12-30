import React, { useState, useEffect } from 'react';
import JobService from "../service/PostJob.service"; // Service for job posting
import UserApplyService from "../service/Userapply.service"; // Service for fetching user applications
import { useNavigate } from 'react-router-dom';
import '../styles/post.css'; // Import the CSS file for styling

const AdminPostPage = () => {
    const [jobData, setJobData] = useState({
        jobTitle: '',
        companyName: '',
        jobDescription: '',
        experienceRequired: '',
        qualifications: '',
        skills: '',
        salary: '',
        jobLocation: '',
        jobType: '',
        howtoapply: '',
        postedDate: '',
        applicationDeadline: ''
    });
    const [userApplications, setUserApplications] = useState([]); // To store user applications
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    // Fetch user applications to display
    useEffect(() => {
        UserApplyService.getAll() // Assuming service fetches all user applications
            .then((response) => {
                setUserApplications(response.data); // Store the ApplyPage data
            })
            .catch((error) => {
                console.error('Error fetching user applications:', error);
                setMessage('Failed to fetch applications. Please try again later.');
            });
    }, []);

    // Handle input change for job posting form
    const handleChange = ({ target: { name, value } }) => {
        setJobData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle job posting
    const handlePostJob = (e) => {
        e.preventDefault();
        JobService.create(jobData)
            .then(() => {
                setJobData({
                    jobTitle: '',
                    companyName: '',
                    jobDescription: '',
                    experienceRequired: '',
                    qualifications: '',
                    skills: '',
                    salary: '',
                    jobLocation: '',
                    jobType: '',
                    howtoapply: '',
                    postedDate: '',
                    applicationDeadline: ''
                });
                setMessage('Job posted successfully!');
                navigate('/listingcommon'); // Navigate to job listing page
            })
            .catch((error) => {
                console.error('Error posting job:', error);
                setMessage('Failed to post the job. Please try again later.');
            });
    };

    return (
        <div className="admin-post-page">
            <div className="left-panel">
                <h2>Post a Job</h2>
                <form onSubmit={handlePostJob}>
                    <div>
                        <label>Job Title:</label>
                        <input
                            type="text"
                            name="jobTitle"
                            value={jobData.jobTitle}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Company Name:</label>
                        <input
                            type="text"
                            name="companyName"
                            value={jobData.companyName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Job Description:</label>
                        <textarea
                            name="jobDescription"
                            value={jobData.jobDescription}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Experience Required:</label>
                        <input
                            type="text"
                            name="experienceRequired"
                            value={jobData.experienceRequired}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Qualifications:</label>
                        <textarea
                            name="qualifications"
                            value={jobData.qualifications}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Skills:</label>
                        <textarea
                            name="skills"
                            value={jobData.skills}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Salary:</label>
                        <input
                            type="text"
                            name="salary"
                            value={jobData.salary}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Job Location:</label>
                        <input
                            type="text"
                            name="jobLocation"
                            value={jobData.jobLocation}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Job Type:</label>
                        <input
                            type="text"
                            name="jobType"
                            value={jobData.jobType}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>How to Apply:</label>
                        <textarea
                            name="howtoapply"
                            value={jobData.howtoapply}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Posted Date:</label>
                        <input
                            type="date"
                            name="postedDate"
                            value={jobData.postedDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Application Deadline:</label>
                        <input
                            type="date"
                            name="applicationDeadline"
                            value={jobData.applicationDeadline}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Post Job</button>
                </form>
                {message && <p>{message}</p>}
            </div>

            <div className="right-panel">
                <h2>User Applications</h2>
                <div className="applications-list">
                    {userApplications.length === 0 ? (
                        <p>No applications yet.</p>
                    ) : (
                        userApplications.map((user, index) => (
                            <div key={index} className="user-card">
                               
                                <p><strong>Full Name:</strong> {user.firstName} {user.lastName}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Phone:</strong> {user.phoneNumber}</p>
                                <p><strong>Address:</strong> {user.address}</p>
                                <p><strong>City:</strong> {user.city}</p>
                                <p><strong>Education:</strong> {user.education}</p>
                                <p><strong>Experience:</strong> {user.experience}</p>
                                <p><strong>Skills:</strong> {user.skills}</p>
                                <p><strong>Date of Birth:</strong> {new Date(user.dateOfBirth).toLocaleDateString()}</p>
                                <p><strong>Gender:</strong> {user.gender}</p>
                                <p><strong>pin Code:</strong> {user.pinCode}</p>
                               
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminPostPage;










// import React, { useState, useEffect } from 'react';
// import JobService from "../service/PostJob.service"; // Service for job posting
// import UserApplyService from "../service/Userapply.service"; // Service for fetching user applications
// import { useNavigate } from 'react-router-dom';
// import '../styles/post.css'; // Import the CSS file for styling

// const AdminPostPage = () => {
//     const [jobData, setJobData] = useState({
//         jobTitle: '',
//         companyName: '',
//         jobDescription: '',
//         experienceRequired: '',
//         qualifications: '',
//         skills: '',
//         salary: '',
//         jobLocation: '',
//         jobType: '',
//         howtoapply: '',
//         postedDate: '',
//         applicationDeadline: ''
//     });
//     const [userApplications, setUserApplications] = useState([]); // To store user applications
//     const [message, setMessage] = useState('');
//     const navigate = useNavigate();

//     // Fetch user applications to display
//     useEffect(() => {
//         UserApplyService.getAll()
//             .then((response) => {
//                 setUserApplications(response.data); // Store the fetched applications
//             })
//             .catch((error) => {
//                 console.error('Error fetching user applications:', error);
//                 setMessage('Failed to fetch applications. Please try again later.');
//             });
//     }, []);

//     // Handle input change for job posting form
//     const handleChange = ({ target: { name, value } }) => {
//         setJobData((prev) => ({ ...prev, [name]: value }));
//     };

//     // Handle job posting
//     const handlePostJob = (e) => {
//         e.preventDefault();
//         JobService.create(jobData)
//             .then(() => {
//                 setJobData({
//                     jobTitle: '',
//                     companyName: '',
//                     jobDescription: '',
//                     experienceRequired: '',
//                     qualifications: '',
//                     skills: '',
//                     salary: '',
//                     jobLocation: '',
//                     jobType: '',
//                     howtoapply: '',
//                     postedDate: '',
//                     applicationDeadline: ''
//                 });
//                 setMessage('Job posted successfully!');
//                 navigate('/listingcommon'); // Navigate to job listing page
//             })
//             .catch((error) => {
//                 console.error('Error posting job:', error);
//                 setMessage('Failed to post the job. Please try again later.');
//             });
//     };

//     return (
//         <div className="admin-post-page">
//             <div className="left-panel">
//                 <h2>Post a Job</h2>
//                 <form onSubmit={handlePostJob}>
//                     <div>
//                         <label>Job Title:</label>
//                         <input
//                             type="text"
//                             name="jobTitle"
//                             value={jobData.jobTitle}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Company Name:</label>
//                         <input
//                             type="text"
//                             name="companyName"
//                             value={jobData.companyName}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Job Description:</label>
//                         <textarea
//                             name="jobDescription"
//                             value={jobData.jobDescription}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Experience Required:</label>
//                         <input
//                             type="text"
//                             name="experienceRequired"
//                             value={jobData.experienceRequired}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Qualifications:</label>
//                         <textarea
//                             name="qualifications"
//                             value={jobData.qualifications}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Skills:</label>
//                         <textarea
//                             name="skills"
//                             value={jobData.skills}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Salary:</label>
//                         <input
//                             type="text"
//                             name="salary"
//                             value={jobData.salary}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Job Location:</label>
//                         <input
//                             type="text"
//                             name="jobLocation"
//                             value={jobData.jobLocation}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Job Type:</label>
//                         <input
//                             type="text"
//                             name="jobType"
//                             value={jobData.jobType}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>How to Apply:</label>
//                         <textarea
//                             name="howtoapply"
//                             value={jobData.howtoapply}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Posted Date:</label>
//                         <input
//                             type="date"
//                             name="postedDate"
//                             value={jobData.postedDate}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Application Deadline:</label>
//                         <input
//                             type="date"
//                             name="applicationDeadline"
//                             value={jobData.applicationDeadline}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <button type="submit">Post Job</button>
//                 </form>
//                 {message && <p>{message}</p>}
//             </div>

//             <div className="right-panel">
//                 <h2>User Applications</h2>
//                 <div className="applications-list">
//                     {userApplications.length === 0 ? (
//                         <p>No applications yet.</p>
//                     ) : (
//                         userApplications.map((user, index) => (
//                             <div key={index} className="user-card">
//                                 <h3>{user.firstName} {user.lastName}</h3>
//                                 <p><strong>Email:</strong> {user.email}</p>
//                                 <p><strong>Phone:</strong> {user.phoneNumber}</p>
//                                 <p><strong>Address:</strong> {user.address}</p>
//                                 <p><strong>City:</strong> {user.city}</p>
//                                 <p><strong>Education:</strong> {user.education}</p>
//                                 <p><strong>Experience:</strong> {user.experience}</p>
//                                 <p><strong>Skills:</strong> {user.skills}</p>
//                                 <p><strong>Date of Birth:</strong> {new Date(user.dateOfBirth).toLocaleDateString()}</p>
//                                 <p><strong>Gender:</strong> {user.gender}</p>
//                                 <p><strong>Pin Code:</strong> {user.pinCode}</p>
//                                 {/* \\{user.resume ? (
//                                     <a href={`http://localhost:8080/Resume/${user.fileName}`} target="_blank" rel="noopener noreferrer">
//                                         View Resume
//                                     </a>
//                                 ) : (
//                                     <span>No resume available</span>
//                                 )}// */}
//                             </div>
//                         ))
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminPostPage;
