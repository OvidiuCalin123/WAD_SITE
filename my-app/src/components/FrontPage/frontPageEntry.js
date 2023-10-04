import { FrontPageContentEntry } from "./Content/frontPageContentEntry";
import { FrontPageHeaderEntry } from "./Header/frontPageHeaderEntry";

export const FrontPageEntry = ({ checkIsAdmin }) => {
  return (
    <>
      <FrontPageHeaderEntry checkIsAdmin={checkIsAdmin} />
      <FrontPageContentEntry checkIsAdmin={checkIsAdmin} />
    </>
  );
};
