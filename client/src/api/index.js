import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5500' });

export const fetchPosts = () => API.get(`/posts`);
export const createPost = (newPost) => API.post(`/posts`, newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signInUser = (formDataUser) => API.post('/user/signin', formDataUser);
export const signUpUser = (formDataUser) => API.post('/user/signup', formDataUser);
// export const signInAdmin = (formDataAdmin) => API.post('/admin/signin', formDataAdmin);
// export const signUpAdmin = (formDataAdmin) => API.post('/admin/signup', formDataAdmin);
