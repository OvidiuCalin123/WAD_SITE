import Pagination from "./FrontPageContent/Pagination/pagination";
import { ContentBackground, FilterBackground } from "./styleContentEntry";

export const FrontPageContentEntry = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <FilterBackground></FilterBackground>
        <ContentBackground>
          <Pagination />
        </ContentBackground>
      </div>
    </>
  );
};
