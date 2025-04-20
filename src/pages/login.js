import React, { useState } from "react";
import Layout from "../components/Layout"; // นำเข้า Layout
import loginRepo from "../repositories/login.repositories"; // นำเข้า loginRepo
import { useNavigate } from "react-router-dom";
const Login_page = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event) {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้าเมื่อส่งฟอร์ม
    console.log("Form submitted", { email, password });
    loginRepo
      .login({ email, password })
      .then((response) => {
        console.log("Login successful:", response);
        // Handle successful login (e.g., redirect to dashboard)
      })
      .catch((error) => {
        console.error("Login failed:", error);
        // Handle login error (e.g., show error message)
      });
  }

  function onClickShowPassword() {
    setShowPassword(!showPassword);
    console.log("eye", showPassword);
  }

  function register() {
    navigate("/register"); // ใช้ navigate เพื่อเปลี่ยนเส้นทางไปยังหน้า register
  }

  function handleLogin() {}
  return (
    <Layout showFooter={true}>
      <h1 className="text-3xl font-bold text-center whitespace-nowrap">
        <span className="text-main-primary">Sign in</span>
        <span> to your account</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-20 ">
          <div className="flex flex-col items-start">
            <label className="text-gray-700 font-semibold mt-4">Email</label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 rounded-md p-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-main-primary focus:border-main-primary"
            ></input>
          </div>

          <div className="flex flex-col items-start">
            <label className="text-gray-700 font-semibold mt-4">Password</label>
            <div class="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border border-gray-300 rounded-md p-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-main-primary focus:border-main-primary"
              />
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                <i
                  className={`bi ${
                    showPassword ? "bi-eye" : "bi-eye-slash"
                  } text-gray-500 text-[20px]`}
                  aria-hidden="true"
                  onClick={onClickShowPassword}
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center w-full">
            <div className="flex items-center">
              <input type="checkbox" className="w-5 h-5" />
              <label className="text-gray-700 font-semibold ml-2">
                Remember me
              </label>
            </div>

            <div>
              <a href="#" className="text-[#6366F1] font-bold  hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="bg-main-primary text-white font-semibold py-2 px-4 rounded-2xl mt-6 w-full hover:bg-orange-600 transition duration-300 ease-in-out"
          >
            Sign in
          </button>

          <div>
            <p className="text-gray-700 font-semibold mt-20 text-center">
              Not a member?, please
              <button
                type="button"
                onClick={register}
                className="bg-main-secondary text-white font-semibold py-2 px-4 rounded-2xl mt-1 w-full hover:bg-main-secondary/80 transition duration-300 ease-in-out"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Login_page;
