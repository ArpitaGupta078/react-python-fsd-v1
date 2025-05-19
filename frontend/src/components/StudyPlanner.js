const addTask = async (e) => {
  e.preventDefault();
  if (task && date && hours) {
    try {
      const response = await axiosInstance.post('/tasks', {
        task,
        date,
        hours
      });
      setTasks([...tasks, response.data]); // Assuming the backend returns the created task
      setTask('');
      setDate('');
      setHours('');
    } catch (error) {
      console.error("Error saving task:", error);
    }
  }
};
