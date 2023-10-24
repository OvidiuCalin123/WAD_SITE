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
import { AddJobPostingEntry } from "./components/AddJobPostingPage/addJobPosting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/welcome" element={<WelcomePageEntry />} />
        <Route path="/job-postings" element={<FrontPageEntry />} />
        <Route path="/add-job-posting" element={<AddJobPostingEntry />} />
      </Routes>
    </Router>
  );
}

export default App;
