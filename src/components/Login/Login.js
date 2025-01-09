import React, { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import styles from "../../assets/css/loginStyle.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [passwordHints, setPasswordHints] = useState({
    minLength: false,
    hasNumber: false,
    hasLetter: false,
  });
  const [showHints, setShowHints] = useState(false); // Control the visibility of hints

  const { login } = useAuth();
  const navigate = useNavigate();

  // Validate password requirements live
  const validatePassword = (password) => {
    setPasswordHints({
      minLength: password.length >= 6,
      hasNumber: /\d/.test(password),
      hasLetter: /[a-zA-Z]/.test(password),
    });
  };

  // Validate form on submission
  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!username) {
      newErrors.username = "Email is required.";
    } else if (!emailPattern.test(username)) {
      newErrors.username = "Please enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else {
      if (!passwordHints.minLength) {
        newErrors.password = "Password must be at least 6 characters long.";
      }
      if (!passwordHints.hasNumber) {
        newErrors.password = "Password must contain at least one number.";
      }
      if (!passwordHints.hasLetter) {
        newErrors.password = "Password must contain at least one letter.";
      }
    }

    if (!repeatPassword) {
      newErrors.repeatPassword = "Repeat Password is required.";
    } else if (password !== repeatPassword) {
      newErrors.repeatPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        title: "Error",
        text: "Please fix the errors in the form before proceeding.",
        icon: "error",
        confirmButtonText: "Okay",
      });
      return;
    }

    Swal.fire({
      title: "Login Successful",
      text: "You have successfully logged in.",
      icon: "success",
      confirmButtonText: "Continue",
    }).then(() => {
      login(username, password); // Simulated login
      navigate("/"); // Redirect to the home page
    });
  };

  return (
    <div className={styles.Login}>
      <div className={styles.Login_body}>
        <div className={styles.Login_ring}>
          <i style={{ "--clr": "#00ff0a" }}></i>
          <i style={{ "--clr": "#ff0057" }}></i>
          <i style={{ "--clr": "#fffd44" }}></i>

          <div className={styles.Login_part}>
            <form onSubmit={handleSubmit}>
              <h2>Login</h2>

              {/* Email Field */}
              <div className={styles.Login_input}>
                <input
                  type="email"
                  placeholder="Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && (
                  <p className={styles.errorMessage}>{errors.username}</p>
                )}
              </div>

              {/* Password Field */}
              <div className={styles.Login_input}>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validatePassword(e.target.value);
                  }}
                  onFocus={() => setShowHints(true)} // Show hints when the field is focused
                  onBlur={() => setShowHints(false)} // Hide hints when focus is lost
                />
                {errors.password && (
                  <p className={styles.errorMessage}>{errors.password}</p>
                )}

                {/* Password Hints */}
                {showHints && (
                  <ul className={styles.passwordHints}>
                    <li
                      className={
                        passwordHints.minLength
                          ? styles.hintValid
                          : styles.hintInvalid
                      }
                    >
                      Password must be at least 6 characters
                    </li>
                    <li
                      className={
                        passwordHints.hasNumber
                          ? styles.hintValid
                          : styles.hintInvalid
                      }
                    >
                      Password must contain at least one number
                    </li>
                    <li
                      className={
                        passwordHints.hasLetter
                          ? styles.hintValid
                          : styles.hintInvalid
                      }
                    >
                      Password must contain at least one letter
                    </li>
                  </ul>
                )}
              </div>

              {/* Repeat Password Field */}
              <div className={styles.Login_input}>
                <input
                  type="password"
                  placeholder="Repeat Password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  disabled={!password} // Disable until password is entered
                />
                {errors.repeatPassword && (
                  <p className={styles.errorMessage}>
                    {errors.repeatPassword}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className={styles.Login_input}>
                <input type="submit" value="Sign in" />
              </div>

              {/* Links */}

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
