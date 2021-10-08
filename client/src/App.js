import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import Home from "./pages/home/Main";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/dashboard/Main";
import Projects from "./pages/projects/Main";
import NewProject from "./pages/createProject/Main";
import EditProject from "./pages/editProject/Main";
import Library from "./pages/library/Main";
import Support from "./pages/Support";
import Thanks from "./pages/Thanks";
import MyPage from "./pages/mypage/Account";
import Error from "./pages/Error";

import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import {
  FetchRecordProvider,
  FetchProjectProvider,
} from "./context/FetchContext";

axios.defaults.withCredentials = true;

function App() {
  useEffect(() => {
    const url = "http://localhost:3001";
    const getCsrfToken = async () => {
      const { data } = await axios.get(`${url}/csrf-token`);
      axios.defaults.headers.post["X-CSRF-Token"] = data.csrfToken;
    };
    getCsrfToken();
  }, []);

  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>

            <Route exact path="/">
              <FetchRecordProvider>
                <Home />
              </FetchRecordProvider>
            </Route>

            <PrivateRoute exact path="/dashboard">
              <FetchRecordProvider>
                <Dashboard />
              </FetchRecordProvider>
            </PrivateRoute>

            <PrivateRoute exact path="/library">
              <FetchRecordProvider>
                <Library />
              </FetchRecordProvider>
            </PrivateRoute>

            <PrivateRoute exact path="/projects">
              <FetchProjectProvider>
                <Projects />
              </FetchProjectProvider>
            </PrivateRoute>

            <PrivateRoute exact path="/projects/new">
              <FetchRecordProvider>
                <NewProject />
              </FetchRecordProvider>
            </PrivateRoute>

            <PrivateRoute exact path="/project/:id">
              <FetchRecordProvider>
                <EditProject />
              </FetchRecordProvider>
            </PrivateRoute>

            <PrivateRoute exact path="/mypage">
              <MyPage />
            </PrivateRoute>

            <PublicRoute exact path="/signin">
              <Signin />
            </PublicRoute>

            <PublicRoute path="/signup">
              <Signup />
            </PublicRoute>

            <Route exact path="/support">
              <Support />
            </Route>

            <Route exact path="/thanks">
              <Thanks />
            </Route>

            <Route path="*">
              <Error />
            </Route>
            
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
