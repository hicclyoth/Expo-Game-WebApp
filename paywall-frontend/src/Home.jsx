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
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter Code"
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
};

export default Home;
