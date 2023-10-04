import { Pagination } from "./FrontPageContent/Pagination/pagination";

export const FrontPageContentEntry = ({ checkIsAdmin }) => {
  return (
    <>
      <div>
        <Pagination checkIsAdmin={checkIsAdmin} />
      </div>
    </>
  );
};
