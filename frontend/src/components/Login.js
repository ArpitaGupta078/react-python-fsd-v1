// inside handleLogin function in Login.js
import axiosInstance from '../api/axiosInstance';

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await axiosInstance.post('/login', {
      email,
      password
    });
    alert(`Logged in as: ${response.data.user}`);
    // You can save token or user info in localStorage if needed
  } catch (error) {
    alert('Login failed. Please try again.');
    console.error(error);
  }
};
