import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5500', headers: { 'Content-Type': 'application/json' } });

API.interceptors.request.use(
    (req) => {
        if (localStorage.getItem('profileUser')) {
            req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profileUser')).token}`;
        } else if (localStorage.getItem('profileAdmin')) {
            req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profileAdmin')).token}`;
        } else {
            console.log('Not Found Local Storage!');
        }
        return req;
    },
    (err) => {
        console.log({ errorInterceptors: err.message });
        return Promise.reject(err);
    },
);

//endpoint
export const fetchPostsNoPaginate = () => API.get(`/posts/no-paginate`);
export const fetchPost = (id, type) => API.get(`/posts/${type}/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
// export const fetchRecommendPosts = (type) => API.get(`/posts/${type}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery || 'none'}`);
export const createPost = (newPost) => API.post(`/posts`, newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const commentPost = (value, id) => API.post(`/posts/${id}/commentPost`, { value });
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const deleteCmt = (id) => API.delete(`/posts/${id}/deleteCmt`);

//Users
export const signInUser = (formDataUser) => API.post('/user/signin', formDataUser);
export const signUpUser = (formDataUser) => API.post('/user/signup', formDataUser);

export const fetchUser = (id) => API.get(`/user/${id}`);
// export const updateUser = (id, updatedUser) => API.patch(`/user/${id}`, updatedUser);

//Admins
export const signInAdmin = (formDataAdmin) => API.post('/admin/signin', formDataAdmin);
export const signUpAdmin = (formDataAdmin) => API.post('/admin/signup', formDataAdmin);
export const fetchAdmins = () => API.get('/admin/admins');
export const fetchAdminsBySearch = (searchQuery) =>
    API.get(`/admin/admins/search?searchQuery=${searchQuery || 'none'}`);
//Admins - User
export const fetchUsers = () => API.get('/admin/users');
export const fetchUsersBySearch = (searchQuery) => API.get(`/admin/users/search?searchQuery=${searchQuery || 'none'}`);
export const deleteUser = (id) => API.delete(`/admin/users/${id}`);
