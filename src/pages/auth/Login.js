import React, { useState } from "react";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import styles from "./auth.module.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = () => {};

  const loginUser = () => {};

  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <BiLogIn size={35} color="#999" />
          </div>
          <h2>Login</h2>
          <div className="--flex-center">
            <button className="--btn --btn-google">Login With Google</button>
          </div>
          <br />
          <p className="--text-center --fw-bold">or</p>

          <form onSubmit={loginUser}>
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <PasswordInput
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            {/* <input
              type="password"
              placeholder="Password"
              required
              name="password"
              value={password}
              onChange={handleInputChange}
            /> */}
            <button type="submit" className="--btn --btn-primary --btn-block">
              Login
            </button>
          </form>
          <Link to="/forgot">Forgot Password</Link>
          <span className={styles.register}>
            <Link to="/">Home</Link>
            <p> &nbsp; Don't have an account? &nbsp;</p>
            <Link to="/register">Register</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Login;
