const BASE = 'https://jsonplaceholder.typicode.com';

export const api = {
  getAllPosts: async () => {
    const response = await fetch(`${BASE}/posts`);
    const json = await response.json();
    return json;
  },
  createNewPost: async (userId: number, title: string, body: string) => {
    const response = await fetch(`${BASE}/posts`, {
      method: 'POST',
      body: JSON.stringify({
        userId: userId,
        title: title,
        body: body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    });
    const json = await response.json();
    return json;
  },
};
