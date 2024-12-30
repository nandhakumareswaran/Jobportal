// import httpClient from '../http-common'; // Assuming httpClient is configured for the API base URL

// const UserApplyService = {
//   // Create a new application
//   create: (data) => {
//     return httpClient.post('/apply', data); // Create a new job
//     // const formData = new FormData();
//     // formData.append('employee', JSON.stringify(data)); // Ensure 'employee' is JSON string
//     // if (data.resume) {
//     //   formData.append('resume', data.resume); // Attach resume file if present
//     // }
  
//     // return httpClient.post('/apply', formData, {
//     //   headers: {
//     //     'Content-Type': 'multipart/form-data', // Important to specify this for multipart
//     //   },
//     // });
//   },
  

//   // Update an existing application
//   update: (id, data) => {
//     const formData = new FormData();
//     formData.append('employee', JSON.stringify(data)); // JSON payload with updated employee data
//     if (data.resume) {
//       formData.append('resume', data.resume); // Optional file (resume)
//     }
//     return httpClient.put(`/apply/${id}`, formData);
//   },

//   // Get all applications (Admin use)
//   getAll: () => {
//     return httpClient.get('/apply');
//   },

//   // Get an application by its ID
//   getById: (id) => {
//     return httpClient.get(`/apply/${id}`);
//   },

//   // Delete an application by its ID
//   remove: (id) => {
//     return httpClient.delete(`/apply/${id}`);
//   },
// };

// export default UserApplyService;




// import httpClient from "../http-common"; // Import your Axios instance

// // Get all employee applications
// const getAll = () => {
//   return httpClient.get('/apply');
// };

// // Get an employee application by ID
// const getById = (id) => {
//     return httpClient.get(`/apply/${id}`); // Fetch a specific employee by ID
// };

// const create = (data) => {
//   const formData = new FormData();

//   // Ensure the date is formatted as 'yyyy-MM-dd'
//   const dateOfBirthFormatted = new Date(data.dateOfBirth).toISOString().split('T')[0]; // Format to 'yyyy-MM-dd'

//   formData.append('firstName', data.firstName);
//   formData.append('lastName', data.lastName);
//   formData.append('gender', data.gender);
//   formData.append('dateOfBirth', dateOfBirthFormatted);
//   formData.append('address', data.address);
//   formData.append('city', data.city);
//   formData.append('education', data.education);
//   formData.append('phoneNumber', data.phoneNumber);
//   formData.append('email', data.email);
//   formData.append('pinCode', data.pinCode);
//   formData.append('experience', data.experience);
//   formData.append('skills', data.skills);

//   // Check if resume file is present before appending
//   if (data.resume) {
//     formData.append('resume', data.resume, data.resume.name);
//   } else {
//     console.error("No resume file selected.");
//   }

//   return httpClient.post('/apply', formData, {
//       headers: {
//           'Content-Type': 'multipart/form-data',
//       },
//   });
// };





// // Update an existing employee application (with resume)
// const update = (id, data) => {
//     const formData = new FormData();
    
//     formData.append('firstName', data.firstName);
//     formData.append('lastName', data.lastName);
//     formData.append('gender', data.gender);
//     formData.append('dateOfBirth', data.dateOfBirth);
//     formData.append('address', data.address);
//     formData.append('city', data.city);
//     formData.append('education', data.education);
//     formData.append('phoneNumber', data.phoneNumber);
//     formData.append('email', data.email);
//     formData.append('pinCode', data.pinCode);
//     formData.append('experience', data.experience);
//     formData.append('skills', data.skills);
//     formData.append('resume', data.resumeFile, data.resumeFile.name);

//     return httpClient.put(`/apply/${id}`, formData); // PUT request to update an employee application
// };

// // Delete an employee application by ID
// const remove = (id) => {
//     return httpClient.delete(`/apply/${id}`); // DELETE request to remove an employee application by ID
// };

// export default { getAll, getById, create, update, remove }; // Export all functions




import httpClient from "../http-common.js";

const getAll = () => {
    return httpClient.get('/apply');
};

const create = (data, config) => {
    return httpClient.post("/apply", data, config).then((response) => response.data);
};

const get = (id) => {
    return httpClient.get(`/apply/${id}`);
};

const update = (id, data, config) => {
    return httpClient.put(`/apply/${id}`, data, config).then((response) => response.data);
};

const remove = (id) => {
    return httpClient.delete(`/apply/${id}`);
};

// const getAllGroupedByJobTitle = () => {
//     return httpClient.get('/jobs/groupedByJobTitle');
// };

export default { getAll, create, get, update, remove };
