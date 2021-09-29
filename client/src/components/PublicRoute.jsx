import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const PublicRoute = ({ children, ...rest }) => {
  const { user } = useAuthContext();
  
  return (
    <Route
      {...rest}
      children={() =>
        !user ? (
          children
        ) : (
          <Redirect to={{
            pathname: '/mypage',
          }} />
        )
      }
    />
  );
};

export default PublicRoute;