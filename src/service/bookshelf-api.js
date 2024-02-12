import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://books-backend.p.goit.global/books',
});

export const fetchCategories = async () => {
    try {
        const response = await instance.get('/category-list');
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
};
