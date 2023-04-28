import React, { useState } from "react";
import Logo from "../assets/logo4.png";
import { message } from "antd";
import { useDispatch } from 'react-redux';
import { setUserData } from '../userSlice';

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("email:", formData.email, "password:", formData.password);
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    console.log(data);

    if (response.status === 401) {
      message.error(data.error);
    } else if (response.status === 200) {
      dispatch(setUserData(data));
      message.success("Login Successfull");
      if (data.role === "Donor") {
        window.location.href = "/donor-dashboard";
      } else if (data.role === "Organisation") {
        window.location.href = "/organization-dashboard";
      } else if (data.role === "Admin") {
        window.location.href = "/admin-dashboard";
      }
    }
  };



  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg">
      <div className="w-full max-w-md bg-[#9bbf7f] p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-yellow-500 text-center mb-6">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-medium"></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-medium"></label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center ">
              <input type="checkbox" id="remember" className="mr-2 " />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="/password-reset" className="font-semibold hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p>
            Don't have an account?{" "}
            <a href="/registration" className="font-semibold hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
      <div className="text-center text-white font-semibold mt-40">
        <p>
          For further support, you may visit the Help Center or contact our
          customer service team.
        </p>
        <img src={Logo} alt="logo" className="h-25 w-40 mx-auto mt-4" />
      </div>
    </div>
  );
}

export default Login;
