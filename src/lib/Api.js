import axios from 'axios';

const url_backend = 'http://localhost:3000';

export const registerUsers = async (values) => {
    const response = await axios.post(`${url_backend}/registro`, values);
    return response.data;
};

export const loginUsers = async (values) => {
    const response = await axios.post(`${url_backend}/login`, values);
    return response.data;
};

export const ObtenerUsuarios = async (values) => {
    const response = await axios.get(`${url_backend}/user`, values);
    return response.data;
};

export const registerDocument = async (values) => {
    const response = await axios.post(`${url_backend}/formulario`, values);
}
/*import axios from 'axios';

export const loginUsers = async (values) => {
    try {
        const response = await axios.post(`${url_backend}/login`, values, {
            withCredentials: true, // Asegúrate de enviar las credenciales
        });
        return response.data;
    } catch (error) {
        console.error('Error en la solicitud de inicio de sesión:', error);
        throw error;
    }
};
*/
