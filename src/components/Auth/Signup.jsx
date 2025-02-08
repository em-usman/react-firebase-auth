import React, { useState } from "react";
import { auth } from "../../Config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithGoogle } from "../../Config/firebase";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

const Signup = ({ openModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      setTimeout(() => {
        setLoading(false);
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      alert(`Welcome to the watch, ${user.email}`);
      navigate("/dashboard");
    } catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        setError('The popup was closed before completing the sign-in.');
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="eye-button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </button>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={handleGoogleSignIn} className="google-button">
        Sign Up with Google
      </button>
      <p>
        Already have an account? <span className="link" onClick={() => openModal("login")}>Login</span>
      </p>
    </div>
  );
};

export default Signup;
