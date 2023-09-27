import { FrontPageEntry } from "./components/FrontPage/frontPageEntry";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { LoginPage } from "./components/Login/loginPage";
import { WelcomePageEntry } from "./components/WelcomePage/welcomePageEntry";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/welcome" element={<WelcomePageEntry />} />
        <Route path="/job-postings" element={<FrontPageEntry />} />
      </Routes>
    </Router>
  );
}

export default App;
