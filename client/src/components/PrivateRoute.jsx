import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuthContext();
  return (
    <Route
      {...rest}
      children={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect to={{
            pathname: '/signin',
            state: { from: location }
          }} />
        )
      }
    />
  );
};

export default PrivateRoute;