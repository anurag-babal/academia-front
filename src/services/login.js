import axios from "axios"

const baseUrl = 'http://localhost:8080/api/v1/login'

const login = async (credential) => {
    const response = await axios.post(baseUrl, credential);
    return response.data;
}

const exportObject = { login };
export default exportObject;