import httpClient from "../http-common"; // Import your Axios instance

const getAll = () => {
    return httpClient.get('/jobs'); // Fetch all jobs
};

const create = (data) => {
    return httpClient.post('/jobs', data); // Create a new job
};

const get = (id) => {
    return httpClient.get(`/jobs/${id}`); // Fetch a specific job by ID
};

const update = (data) => {
    return httpClient.put('/jobs', data); // Update an existing job
};

const remove = (id) => {
    return httpClient.delete(`/jobs/${id}`); // Delete a job by ID
};

export default { getAll, create, get, update, remove }; // Export all functions
