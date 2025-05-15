import axios from 'axios';

// Create an axios instance with base configuration
const API = axios.create({ baseURL: 'http://localhost:4000' });

// Set default headers (optional, useful if you plan to send auth token)
API.defaults.headers.post['Content-Type'] = 'application/json';

// Get timeline posts for a user
export const getTimelinePosts = (userId) => 
  API.get(`/post/${userId}/timeline`);

// Like or dislike a post
export const likePost = (postId, userId) => 
  API.put(`/post/${postId}/like_dislike`, { userId });
