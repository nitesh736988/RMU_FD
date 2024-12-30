import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
  });

  const [errors, setErrors] = useState({});
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (formData.email.trim() === '' || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }

    if (formData.address.trim() === '') {
      newErrors.address = 'Address is required';
      isValid = false;
    }

    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      console.log('Form Data:', formData);
  
      try {
        const response = await axios.post("http://localhost:3000/user/signup", formData);
        console.log('Response Data:', response.data);

        alert('Registration Successful!');
        navigate('/login');
      } catch (error) {
        console.error('There was an error!', error);
        
        if (error.response && error.response.data && error.response.data.errors) {
          setErrors(error.response.data.errors);
        } else {
          alert('There was an error with your request. Please try again.');
        }
      }
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>Register</h2>
       
        <form onSubmit={handleSubmit}>
          <div className="form-controller">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={formData.name}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-controller">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-controller">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              onChange={handleChange}
              value={formData.address}
            />
            {errors.address && <p className="error">{errors.address}</p>}
          </div>

          <div className="form-controller password-container">
            <label htmlFor="password">Password</label>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
            />
            <span
              onClick={togglePasswordVisibility}
              className="eye-icon"
            >
              {isPasswordVisible ? '🙈' : '👁️'}
            </span>
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          
          <button className="datasubmit" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
