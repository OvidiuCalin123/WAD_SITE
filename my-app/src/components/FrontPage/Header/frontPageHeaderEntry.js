import { HeaderBackground, TitleContainer } from "./styleHeaderEntry";

export const FrontPageHeaderEntry = ({ checkIsAdmin }) => {
  const headerStyle = {
    color: "wheat",
    paddingRight: "2rem",
    paddingLeft: "2rem",
  };

  return (
    <HeaderBackground>
      <TitleContainer>
        <h1 style={headerStyle}>ByteHire</h1>
        {checkIsAdmin && <h3>I AM AN ADMIN</h3>}
      </TitleContainer>
      <div style={{ width: "1px", height: "20px", background: "wheat" }}></div>
      <a href="/welcome" style={{ textDecoration: "none" }}>
        <h4 style={headerStyle}>Home</h4>
      </a>
      <div style={{ width: "1px", height: "20px", background: "wheat" }}></div>
      <a href="/job-postings" style={{ textDecoration: "none" }}>
        <h4 style={headerStyle}>Available Jobs</h4>
      </a>
    </HeaderBackground>
  );
};
