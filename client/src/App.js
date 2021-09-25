import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Project from "./pages/Project";
import NewProject from "./pages/NewProject";
import TextEditor from "./pages/TextEditor";
import Support from "./pages/Support";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Library from "./pages/Library";


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
        <Route path="/myaccount" component={Account} />
      </Router>
    </>
  );
}

export default App;
