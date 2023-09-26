import Pagination from "./FrontPageContent/pagination/pagination";
import { ContentBackground, FilterBackground } from "./styles/styleContent";
import Button from "react-bootstrap/Button";

export const FrontPageContent = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <FilterBackground></FilterBackground>
        <ContentBackground>
          <Pagination />
          <Button></Button>
        </ContentBackground>
      </div>
    </>
  );
};
