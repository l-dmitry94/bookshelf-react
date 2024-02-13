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

export const fetchTopBooks = async () => {
    try {
        const response = await instance.get('/top-books');
        return response.data;
    } catch (error) {
        console.log(error.message)
    }
}

export const fetchBooksByCategory = async category => {
    try {
        const response = await instance.get(`/category?category=${category}`)
        return response.data
    } catch (error) {
        console.log(error.message)
    }
}
