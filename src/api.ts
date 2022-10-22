import axios from 'axios';

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
});

export const api = {
  getAllPosts: async () => {
    try {
      const response = await http.get('/posts');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  // getAllPosts: async () => {
  //   const response = await fetch(`${BASE}/posts`);
  //   const json = await response.json();
  //   return json;
  // },
  createNewPost: async (userId: number, title: string, body: string) => {
    try {
      const response = await http.post('/posts', {
        userId: userId,
        title: title,
        body: body,
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
