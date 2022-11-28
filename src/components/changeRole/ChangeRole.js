import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getUsers, upgradeUser } from "../../redux/features/auth/authSlice";
import {
  EMAIL_RESET,
  sendAutomatedEmail,
} from "../../redux/features/email/emailSlice";

const ChangeRole = ({ _id, email }) => {
  const [userRole, setUserRole] = useState("");
  const dispatch = useDispatch();

  // Change User role
  const changeRole = async (e) => {
    e.preventDefault();

    if (!userRole) {
      toast.error("Please select a role");
    }

    const userData = {
      role: userRole,
      id: _id,
    };

    const emailData = {
      subject: "Account Role Changed - AUTH:Z",
      send_to: email,
      reply_to: "noreply@zino",
      template: "changeRole",
      url: "/login",
    };

    await dispatch(upgradeUser(userData));
    await dispatch(sendAutomatedEmail(emailData));
    await dispatch(getUsers());
    dispatch(EMAIL_RESET());
  };

  return (
    <div className="sort">
      <form
        className="--flex-start"
        onSubmit={(e) => changeRole(e, _id, userRole)}
      >
        <select value={userRole} onChange={(e) => setUserRole(e.target.value)}>
          <option value="">-- select --</option>
          <option value="subscriber">Subscriber</option>
          <option value="author">Author</option>
          <option value="admin">Admin</option>
          <option value="suspended">Suspended</option>
        </select>
        <button className="--btn --btn-primary">
          <FaCheck size={15} />
        </button>
      </form>
    </div>
  );
};

export default ChangeRole;
