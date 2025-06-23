import axios from 'axios';
import { toast } from 'react-toastify';

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
    const response = await axios.post(`${url_backend}/documents`, values, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return response.data;
}


export const updateDocument = async (data) => {
    const response = await axios.post(`${url_backend}/documents-edit`, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return response.data;
}

export const listDocumentsUser = async (id) => {
    const response = await axios.get(`${url_backend}/documents-user/${id}`,);

    return response.data;
}

export const listDocuments = async () => {
    const response = await axios.get(`${url_backend}/list-documents`,);

    return response.data;
}

export const listUsers = async () => {
    const response = await axios.get(`${url_backend}/list-users`,);

    return response.data;
}

export const changeRoleUser = async (userId) => {
    const response = await axios.put(`${url_backend}/change-rol/${userId}`);

    return response.data;
}

export const responseRequest = async (data) => {
    const response = await axios.post(`${url_backend}/response-request`, data);

    return response.data;
}


export const downloadDocument = async (archivo) => {
    const encodedFileName = encodeURIComponent(archivo);
    const url = `${url_backend}/download/${encodedFileName}`;

    try {
        const response = await fetch(url, { method: 'HEAD' });
        if (response.ok) {
            window.open(url, '_blank');
        } else {
            toast.error("El archivo no existe o no se puede descargar.", { theme: "colored" })
        }
    } catch (error) {
        console.error('Error verificando el archivo:', error);
        toast.error("Error al intentar descargar el archivo.", { theme: "colored" })
    }
};
