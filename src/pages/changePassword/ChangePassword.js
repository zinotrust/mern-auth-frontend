import React, { useState } from "react";
import Card from "../../components/card/Card";
import profileImg from "../../assets/avatarr.png";
import "./ChangePassword.scss";
import PageMenu from "../../components/pageMenu/PageMenu";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import {
  changePassword,
  logout,
  RESET,
} from "../../redux/features/auth/authSlice";
import { Spinner } from "../../components/loader/Loader";
import { sendAutomatedEmail } from "../../redux/features/email/emailSlice";

const initialState = {
  oldPassword: "",
  password: "",
  password2: "",
};

const ChangePassword = () => {
  useRedirectLoggedOutUser("/login");
  const [formData, setFormData] = useState(initialState);
  const { oldPassword, password, password2 } = formData;

  const { isLoading, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const updatePassword = async (e) => {
    e.preventDefault();

    if (!oldPassword || !password || !password2) {
      return toast.error("All fields are required");
    }

    if (password !== password2) {
      return toast.error("Passwords do not match");
    }

    const userData = {
      oldPassword,
      password,
    };

    const emailData = {
      subject: "Password Changed - AUTH:Z",
      send_to: user.email,
      reply_to: "noreply@zino",
      template: "changePassword",
      url: "/forgot",
    };

    await dispatch(changePassword(userData));
    await dispatch(sendAutomatedEmail(emailData));
    await dispatch(logout());
    await dispatch(RESET(userData));
    navigate("/login");
  };

  return (
    <>
      <section>
        <div className="container">
          <PageMenu />
          <h2>Change Password</h2>
          <div className="--flex-start change-password">
            <Card cardClass={"card"}>
              <>
                <form onSubmit={updatePassword}>
                  <p>
                    <label>Current Password</label>
                    <PasswordInput
                      placeholder="Old Password"
                      name="oldPassword"
                      value={oldPassword}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <label>New Password:</label>
                    <PasswordInput
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <label>confirm New Password:</label>
                    <PasswordInput
                      placeholder="Confirm Password"
                      name="password2"
                      value={password2}
                      onChange={handleInputChange}
                    />
                  </p>
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <button
                      type="submit"
                      className="--btn --btn-danger --btn-block"
                    >
                      Change Password
                    </button>
                  )}
                </form>
              </>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChangePassword;
