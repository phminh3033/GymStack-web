import axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchPosts = () => axios.get(`${URL}/posts`);
export const createPosts = (newPost) => axios.post(`${URL}/posts`, newPost);
