import httpClient from "../http-common";
const getAll = () =>
{
    return httpClient.get('register');
}
const create = (data) =>
{
    return httpClient.post("/register",data);
}
const get = (id) =>
{
    return httpClient.get(`/register/${id}`);
}
const update = (data) =>
{
    return httpClient.put('/register',data);
}
const remove =(id)=>
{

    return httpClient.delete(`/register/${id}`);
}


const login = (username, password) => {
    return httpClient.get(`/register/login`, {
        params: {
            username: username,
            password: password
        }
    });
}

export default { getAll, create, get, update, remove, login };