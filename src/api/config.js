import axios from 'axios';

const api = axios.create({
    baseURL: 'https://8650-45-64-100-26.ngrok-free.app/api',

});


// const getCsrfToken = async () => {
//     try {
//         const response = await api.get('/sanctum/csrf-cookie');
        
//         if (response.status === 200 ) {
//             console.log('CSRF cookie didapatkan');
//         } else {
//             console.error('Gagal mendapatkan CSRF cookie: Respons tidak sesuai dengan yang diharapkan');
//             throw new Error('Gagal mendapatkan CSRF cookie: Respons tidak sesuai dengan yang diharapkan');
//         }
//     } catch (error) {
//         console.error('Gagal mendapatkan CSRF cookie:', error.response ? error.response.data : error.message);
//         throw error;
//     }
// };



// export const login = async (email, password) => {
//     try {
//         // First, get the CSRF token
//         await getCsrfToken(); // Ensure the CSRF token is set

//         const response = await api.post('/auth/login', { email, password });

//         console.log('Login berhasil:', response.data);

//         // Assuming the token is in response.data.token, adjust according to your API's response
//         const { token } = response.data; // Modify this according to your actual response structure

//         // Store the token in local storage
//         localStorage.setItem('token', token);

//         return response.data; // Optionally return the response data
//     } catch (error) {
//         console.error('Login gagal:', error.response ? error.response.data : error.message);
//         throw error;
//     }
// };

export const login = async (email, password) => {
    try {
        const response = await api.post('/auth/login', { email, password });

        console.log('Login successful:', response.data);

       
        const { token } = response.data; 

      
        localStorage.setItem('token', token);

        return response.data; 
    } catch (error) {
        console.error('Login failed:', error.response ? error.response.data : error.message);
        throw error;
    }
};



export const logout = async () => {
    try {
        const response = await api.post('/auth/logout');
        console.log('Logout berhasil:', response.data);
    } catch (error) {
        console.error('Logout gagal:', error.response ? error.response.data : error.message);
        throw error;
    }
};

export default api;

