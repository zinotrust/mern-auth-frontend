import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import authService from "../redux/features/auth/authService";

const useRedirectLoggedOutUser = (path) => {
  const navigate = useNavigate();

  useEffect(() => {
    let isLoggedIn;
    const redirectLoggedOutUser = async () => {
      try {
        isLoggedIn = await authService.getLoginStatus();
      } catch (error) {
        console.log(error.message);
      }

      if (!isLoggedIn) {
        toast.info("Session expired, please login to continue");
        navigate(path);
        return;
      }
    };
    redirectLoggedOutUser();
  }, [path, navigate]);
};

export default useRedirectLoggedOutUser;
