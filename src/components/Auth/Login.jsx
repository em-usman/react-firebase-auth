import React, { useState } from "react";
import { auth } from "../../Config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithGoogle } from "../../Config/firebase";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

const Login = ({ openModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
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
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      <button onClick={handleGoogleSignIn} className="google-button">
        Login with Google
      </button>
      <p>
        Don't have an account? <span className="link" onClick={() => openModal("signup")}>Sign Up</span>
      </p>
    </div>
  );
};

export default Login;
