import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const StepTwo = ({ emitData }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  // const [occupation, setOccupation] = useState("");
  // const [password, setPassword] = useState("");
  // function handleSubmit(event) {
  //   event.preventDefault(); // ป้องกันการรีเฟรชหน้าเมื่อส่งฟอร์ม
  // }
  function handleBackClick() {
    navigate("/login"); // เปลี่ยนเส้นทางไปที่หน้า login
  }

  function handleNextClick() {
    const setDataFromStep1 = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      dateOfBirth: dateOfBirth,
    };
    emitData("step2", setDataFromStep1);
  }
  return (
    <div>
      <h1 className="text-4xl font-bold text-center whitespace-nowrap">
        <span className="text-main-primary">Verify</span>
        <span> your identity via OTP</span>
      </h1>
      <div>

      </div>
    </div>
  );
};

export default StepTwo;
