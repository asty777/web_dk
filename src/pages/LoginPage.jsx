import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import Login4 from "../assets/bgLogin.png"; 
import ChefLogin from "../assets/ChefLogin.png"; 
import Logo from "../assets/logo.png";
import { login } from '../api/config';
import AlertComponent from '../components/notif/AlertComponent';
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await login(email, password);
      console.log('Login successful, token:', token);
      
     
      AlertComponent.SuccessLogin('Login berhasil, selamat datang di dashboard!');
      navigate('/Dashboard'); 
        
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Login failed, please check your email and password.');
      AlertComponent.Error('Login gagal, silakan periksa email dan kata sandi Anda.');
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-white flex flex-col justify-center items-center relative">
        <div className="absolute top-6 left-6 flex items-center justify-center w-16 h-16 rounded-full">
          <img src={Logo} alt="Logo" className="w-16 h-16" />
        </div>
        <div className="w-3/4 mt-8">
          <h2 className="text-3xl font-semibold mb-2">Sign in</h2>
          <p className="mb-4">
            Don't have an account? <a href="#" className="text-[#468585] underline">Create now</a>
          </p>
          {errorMessage && <div className="mb-4 text-red-500">{errorMessage}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="absolute inset-y-0 right-3 flex items-center">
                <button type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <HiOutlineEyeOff className="text-gray-500" />
                  ) : (
                    <HiOutlineEye className="text-gray-500" />
                  )}
                </button>
              </span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-500">Remember me</span>
              </label>
              <a href="#" className="text-[#1C4532] underline">Forgot Password?</a>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-[#468585] text-white rounded-md"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>

      <div
        className="w-1/2 flex flex-col justify-center items-center relative bg-cover bg-center"
        style={{ backgroundImage: `url(${Login4})` }}
      >
        <img
          src={ChefLogin}
          alt="Chefs"
          className="w-1/2 mb-6"
        />
        <div className="text-center p-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Welcome to Dika Lestrari Catering
          </h2>
          <p className="text-white mb-6">
            Analyzing previous trends ensures that businesses always make the right decision.
            And as the scale of the decision and its impact magnifies...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

