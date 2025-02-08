import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import "../components/styles/home.css";

function Home() {
  const [modal, setModal] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Open popup based on URL parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const modalType = searchParams.get("modal");
    if (modalType === "login" || modalType === "signup") {
      setModal(modalType);
    } else {
      setModal(null);
    }
  }, [location.search]);

  // Open modal and update URL
  const openModal = (type) => {
    setModal(type);
    navigate(`/?modal=${type}`, { replace: true });
  };

  // Close modal and remove query param
  const closeModal = () => {
    setModal(null);
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="text-xl font-bold">MyApp</div>
        <div className="space-x-4">
          <button onClick={() => openModal("login")} className="text-blue-500">Login</button>
          <button onClick={() => openModal("signup")} className="text-blue-500">Signup</button>
        </div>
      </nav>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to Home Page</h1>
        <p>This is some temporary home page content.</p>
      </div>

      {/* Login Popup */}
      {modal === "login" && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <Login openModal={openModal} />
          </div>
        </div>
      )}

      {/* Signup Popup */}
      {modal === "signup" && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <Signup openModal={openModal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
