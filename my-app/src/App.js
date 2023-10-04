import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoginPage } from "./components/Login/loginPage";
import { WelcomePageEntry } from "./components/WelcomePage/welcomePageEntry";
import { RegisterPage } from "./components/Register/register";
import { FrontPageEntry } from "./components/FrontPage/frontPageEntry";
import { useState } from "react";

function App() {
  const [checkIsAdmin, setCheckIsAdmin] = useState(false);

  const setIsAdminOrNotCallback = (isAdmin) => {
    setCheckIsAdmin(isAdmin);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          exact
          path="/login"
          element={
            <LoginPage setIsAdminOrNotCallback={setIsAdminOrNotCallback} />
          }
        />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route
          exact
          path="/welcome"
          element={<WelcomePageEntry checkIsAdmin={checkIsAdmin} />}
        />
        <Route
          path="/job-postings"
          element={<FrontPageEntry checkIsAdmin={checkIsAdmin} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
