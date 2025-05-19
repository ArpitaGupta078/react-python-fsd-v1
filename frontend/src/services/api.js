const API_URL =  'http://localhost:3001/api';

// export const checkBackendStatus = async () => {
//     try {
//         const response = await fetch(`${API_URL}/`);
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error checking backend status:', error);
//         throw error;
//     }
// }; 


// services/api.js
// const API_BASE_URL = 'http://localhost:8000'; // Update this if needed

export const login = async (email, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Login failed');
  }

  return data;
};
