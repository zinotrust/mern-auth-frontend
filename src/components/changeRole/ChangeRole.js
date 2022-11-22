import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const ChangeRole = () => {
  const [userRole, setUserRole] = useState("");
  return (
    <div className="sort">
      <form className="--flex-start">
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
