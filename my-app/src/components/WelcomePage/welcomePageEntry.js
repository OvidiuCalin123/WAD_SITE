import { FrontPageHeaderEntry } from "../FrontPage/Header/frontPageHeaderEntry";
import { CenterContent } from "./WelcomePageContent/styleWelcomePageEntry";
import "./welcomePageStyles.css";
import { WelcomeCard } from "./WelcomePageContent/WelcomeCard";

export const WelcomePageEntry = ({ checkIsAdmin }) => {
  return (
    <>
      <FrontPageHeaderEntry checkIsAdmin={checkIsAdmin} />
      <CenterContent>
        <WelcomeCard />
      </CenterContent>
    </>
  );
};
