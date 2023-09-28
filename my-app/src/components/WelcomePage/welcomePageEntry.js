import { FrontPageHeaderEntry } from "../FrontPage/Header/frontPageHeaderEntry";
import { CenterContent } from "./WelcomePageContent/styleWelcomePageEntry";
import "./welcomePageStyles.css";
import { WelcomeCard } from "./WelcomePageContent/WelcomeCard";

export const WelcomePageEntry = () => {
  return (
    <>
      <FrontPageHeaderEntry />
      <CenterContent>
        <WelcomeCard />
      </CenterContent>
    </>
  );
};
