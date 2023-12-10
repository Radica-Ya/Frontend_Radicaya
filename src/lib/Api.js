import axios from 'axios';

const url_backend = 'http://localhost:3000';

export const registerUsers = async (values) => {
    const response = await axios.post(`${url_backend}/registro`, values);
    return response.data;
};