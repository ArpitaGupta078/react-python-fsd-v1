import { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const [tasks, setTasks] = useState([]);

useEffect(() => {
  const fetchTasks = async () => {
    try {
      const response = await axiosInstance.get('/tasks');
      setTasks(response.data); // assuming this is an array
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };
  fetchTasks();
}, []);
