import { FrontPageContentEntry } from "./Content/frontPageContentEntry";
import { FrontPageHeaderEntry } from "./Header/frontPageHeaderEntry";

export const FrontPageEntry = () => {
  return (
    <>
      <FrontPageHeaderEntry />
      <FrontPageContentEntry />
    </>
  );
};
