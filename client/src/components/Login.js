import React, { useState } from "react";
import Logo from "../assets/logo4.png";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [userData, setUserData] = useState([])

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
    setUserData(data)

    if (data.role === "Donor") {
      window.location.href = "/donor-dashboard";
    } else if (data.role === "Organisation") {
      window.location.href = "/organization-dashboard";
    } else if(data.role === "Admin") {
      window.location.href = "/admin-dashboard";
    }
  };


  return (
    <div class="min-h-screen flex flex-col items-center justify-center bg">
    <div class="w-full max-w-md bg-[#9bbf7f] p-8 rounded-lg shadow-md">
      <h1 class="text-3xl font-bold text-yellow-500 text-center mb-6">Login</h1>
      <form>
        <div class="mb-6">
          <label for="email" class="block mb-2 font-medium"></label>
          <input type="email" id="email" class="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Enter your email" />
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-2 font-medium"></label>
          <input type="password" id="password" class="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Enter your password" />
        </div>
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center ">
            <input type="checkbox" id="remember" class="mr-2 " />
            <label for="remember">Remember me</label>
          </div>
          <a href="/password-reset" class="font-semibold hover:underline">Forgot password?</a>
        </div>
        <button type="submit" class="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition duration-300">Login</button>
      </form>

      <div class="mt-4 text-center">
        <p>Don't have an account? <a href="/registration" class="font-semibold hover:underline">Register</a></p>
      </div>


    </div>
  );
}

export default Login;

