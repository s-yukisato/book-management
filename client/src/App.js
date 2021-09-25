// import SignUp from "./components/SignUp";
// import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Project from "./pages/Project";
import NewProject from "./pages/NewProject";
import TextEditor from "./pages/TextEditor";
import Support from "./pages/Support";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Library from "./pages/Library";

// import PrivateRoute from "./components/PrivateRoute";
// import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/projects/new" component={NewProject} />
        <Route exact path="/project/:id" component={TextEditor} />
        <Route exact path="/library" component={Library} />
        <Route path="/support" component={Support} />
        <Route path="/settings" component={Settings} />
      </Router>
    </>
  );
}

export default App;
