import { useNavigate } from "react-router-dom";
import { FrontPageHeaderEntry } from "../FrontPage/Header/frontPageHeaderEntry";
import {
  CenterContent,
  CenterTitle,
} from "./WelcomePageContent/styleWelcomePageEntry";

export const WelcomePageEntry = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/job-postings");

  return (
    <>
      <FrontPageHeaderEntry />
      <CenterTitle>
        <h1>WELCOME</h1>
      </CenterTitle>
      <CenterContent>
        <button class="btn btn-primary" type="submit" onClick={handleClick}>
          Button
        </button>
      </CenterContent>
    </>
  );
};
