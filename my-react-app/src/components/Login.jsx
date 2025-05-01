import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../assets/css/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://v-627.onrender.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('studentEmail', data.email); 
        alert('Login successful!');

        if (formData.role === 'faculty') {
          navigate('/faculty-dashboard');
        } else if (formData.role === 'student') {
          navigate('/student-dashboard');
        }
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (error) {
      setError('Server error. Please try again.');
    }
  };

  return (
    <>
      <header className="nav-header">
        <nav>
          <div className="nav-left">
            <Link to="/">Student Assessment System</Link>
          </div>
          <div className="nav-right">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </nav>
      </header>
      <div className="main-container">
        <div className="login-image"></div>
        <div className="login-container">
          <h1>Login</h1>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <select 
                name="role" 
                value={formData.role} 
                onChange={handleChange} 
                required
              >
                <option value="">Select Role</option>
                <option value="faculty">Faculty</option>
                <option value="student">Student</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">Login</button>
          </form>
          <p className="register-link">
            Not registered? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;