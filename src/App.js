// File: src/App.js
import "./App.css";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom"; // ใช้ useNavigate
import Login_page from "./pages/login";
import Index_page from "./pages/index";
import Layout from "./components/Layout";
import Register_Page from "./pages/register"; // นำเข้า Register_Page
function App() {
  const navigate = useNavigate(); // ใช้ useNavigate สำหรับการเปลี่ยนเส้นทาง

  // useEffect(() => {
  //   const token = localStorage.getItem("token"); // ตรวจสอบว่า token มีใน localStorage หรือไม่

  //   if (!token) {
  //     // ถ้าไม่มี token ให้เปลี่ยนเส้นทางไปหน้า login
  //     console.log("Token is not present, redirecting to login...");
  //     // navigate("/login");
  //   } else {
  //     console.log("Token is present");
  //   }
  // }, [navigate]); // useEffect จะทำงานเมื่อคอมโพเนนต์โหลด

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index_page />} />
        <Route path="/login" element={<Login_page />} />
        <Route path="/register" element={<Register_Page />} />
      </Routes>
    </div>
  );
}

export default App;
