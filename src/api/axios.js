import axios from 'axios';


export const userApi = axios.create({
    baseURL : 'http://localhost:3000/users'
});

export const operationApi = axios.create({
    baseURL : 'http://localhost:3000/operation'
});

export const categoriesApi = axios.create({
    baseURL : 'http://localhost:3000/categories'
})





