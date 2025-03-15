import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [code, setCode] = useState();
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/verify-code", {
        code,
      });
      if (res.data.success) {
        localStorage.setItem("access", "allowed");
        navigate("/game");
      } else {
        setMessage("Invalid code was entered.");
      }
    } catch {
      setMessage("Server Error.");
    }
  };

  return (
    <div className="bg-slate-50 w-screen h-screen flex items-center justify-center">
      <form
        className="flex flex-col p-6 rounded-md drop-shadow-2xl bg-white"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center font-bold text-slate-800">
          Enter the code you received{" "}
        </h1>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter Code"
          className="border-1 text-center text-slate-800 border-slate-600 rounded-sm my-4"
        />
        <button
          className="text-center bg-blue-600 text-slate-900 px-6 py-1 rounded-sm my-2 w-fit self-center"
          type="submit"
        >
          Submit
        </button>
        {message && <p className="text-red-600 self-center">{message}</p>}
      </form>
    </div>
  );
};

export default Home;
