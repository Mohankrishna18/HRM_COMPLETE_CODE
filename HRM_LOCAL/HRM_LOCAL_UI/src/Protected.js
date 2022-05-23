import { Navigate } from "react-router-dom";

const useAuth = () => {
  const user = { loggedIn: false };

  return user && user.loggedIn;
};

const Protected = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default Protected;
