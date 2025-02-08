import React, { useState } from "react";
import { auth } from "../Config/firebase";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      setTimeout(async () => {
        await auth.signOut();
        setLoading(false);
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Logout error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      {user && <p className="mb-4">Welcome, {user.email}</p>}
      <button onClick={handleLogout} className="bg-blue-500 text-white px-4 py-2 rounded">Logout</button>
    </div>
  );
};

export default Dashboard;
