import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const StepOne = ({ emitData }) => {
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
        <span className="text-main-primary">Sign in</span>
        <span> to join member</span>
      </h1>
      <div>
        <div className="mt-20 ">
          <div className="flex flex-col items-start">
            <label className="text-gray-700 font-semibold mt-4">
              FirstName
            </label>
            <input
              type="text"
              placeholder="FirstName"
              name="FirstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="border border-gray-300 rounded-md p-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-main-primary focus:border-main-primary"
            ></input>
          </div>

          <div className="flex flex-col items-start">
            <label className="text-gray-700 font-semibold mt-4">LastName</label>
            <input
              type="text"
              placeholder="LastName"
              name="LastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="border border-gray-300 rounded-md p-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-main-primary focus:border-main-primary"
            ></input>
          </div>

          <div className="flex flex-col items-start">
            <label className="text-gray-700 font-semibold mt-4">Email</label>
            <input
              type="text"
              placeholder="Email"
              name="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 rounded-md p-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-main-primary focus:border-main-primary"
            ></input>
          </div>

          <div className="flex flex-col items-start">
            <label className="text-gray-700 font-semibold mt-4">
              Phone number
            </label>
            <input
              type="text"
              placeholder="00-0000-0000"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="border border-gray-300 rounded-md p-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-main-primary focus:border-main-primary"
            ></input>
          </div>

          <div className="flex flex-col items-start">
            <label className="text-gray-700 font-semibold mt-4">
              Date of birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
              className="border border-gray-300 rounded-md p-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-main-primary focus:border-main-primary"
            ></input>
          </div>

          <div className="flex flex-col items-start">
            <label className="text-gray-700 font-semibold mt-4">
              Occupation
            </label>
            {/* <input
              type="date"
              name="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 rounded-md p-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-main-primary focus:border-main-primary"
            ></input> */}
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <button
              type="button"
              className=" bg-white text-black border border-gray-500 font-semibold py-2 px-4 rounded-2xl mt-6 w-full hover:bg-orange-600 transition duration-300 ease-in-out"
              onClick={handleBackClick}
            >
              Back
            </button>

            <button
              onClick={() => handleNextClick()}
              type="button"
              className="col-span-2 bg-main-primary text-white font-semibold py-2 px-4 rounded-2xl mt-6 w-full hover:bg-orange-600 transition duration-300 ease-in-out"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
