import React, { useState } from "react";
import Layout from "../components/Layout"; // นำเข้า Layout

const Login_page = () => {
  const [showPassword, setShowPassword] = useState(false);
  function handleSubmit(event) {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้าเมื่อส่งฟอร์ม
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log("Form submitted", { email, password });
  }

  function onClickShowPassword() {
    setShowPassword(!showPassword);
    console.log("eye", showPassword);
  }
  return (
    <Layout showFooter={true}>
      <h1 className="text-4xl font-bold text-center">
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
              <button className="bg-main-secondary text-white font-semibold py-2 px-4 rounded-2xl mt-1 w-full hover:bg-main-secondary/80 transition duration-300 ease-in-out">
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
