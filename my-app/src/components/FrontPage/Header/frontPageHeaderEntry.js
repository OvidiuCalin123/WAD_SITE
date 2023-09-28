import { HeaderBackground, TitleContainer } from "./styleHeaderEntry";

export const FrontPageHeaderEntry = () => {
  const headerStyle = {
    color: "wheat",
    paddingRight: "2rem",
    paddingLeft: "2rem",
  };

  return (
    <HeaderBackground>
      <TitleContainer>
        <h1 style={headerStyle}>ByteHire</h1>
      </TitleContainer>
      <div style={{ width: "1px", height: "20px", background: "wheat" }}></div>
      <h3 style={headerStyle}>Home</h3>
      <div style={{ width: "1px", height: "20px", background: "wheat" }}></div>
      <h3 style={headerStyle}>Available Jobs</h3>
    </HeaderBackground>
  );
};
