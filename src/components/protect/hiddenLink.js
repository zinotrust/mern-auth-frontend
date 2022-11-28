const { useSelector } = require("react-redux");
const {
  selectIsLoggedIn,
  selectUser,
} = require("../../redux/features/auth/authSlice");

export const ShowOnLogin = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <>{children}</>;
  }
  return null;
};

export const ShowOnLogout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return <>{children}</>;
  }
  return null;
};

export const AdminAuthorLink = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  if (isLoggedIn && (user?.role === "admin" || user?.role === "author")) {
    return <>{children}</>;
  }
  return null;
};
