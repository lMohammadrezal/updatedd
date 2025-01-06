import React, { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from '../../assets/css/loginStyle.module.css'
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(name, password);
    navigate("/"); // Redirect to home page after successful login
  };

  return (
    // Ring animation div
    <div className={styles.Login}>
    <div className={styles.Login_body}>
    <div className={styles.Login_ring}>
      <i style={{ "--clr": "#00ff0a" }}></i>
      <i style={{ "--clr": "#ff0057" }}></i>
      <i style={{ "--clr": "#fffd44" }}></i>

      <div className={styles.Login_part}>
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className={styles.Login_input}>
            <input 
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.Login_input}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.Login_input}>
            <input type="submit" value="Sign in" />
          </div>
          <div className={styles.links}>
            <a href="#">Forget Password</a>
            <a href="#">Signup</a>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Login;
