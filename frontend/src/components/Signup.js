const handleSignup = async (e) => {
  e.preventDefault();
  try {
    await axiosInstance.post('/signup', {
      name,
      email,
      password
    });
    alert('Signup successful! You can now log in.');
  } catch (error) {
    alert('Signup failed. Please try again.');
    console.error(error);
  }
};
